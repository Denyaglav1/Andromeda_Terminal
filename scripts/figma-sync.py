#!/usr/bin/env python3
"""
Figma Sync Script — Andromeda Terminal
Checks for design changes and exports assets from Figma.

Usage:
  python scripts/figma-sync.py          # Check for changes + export assets
  python scripts/figma-sync.py --check  # Only check if file changed
  python scripts/figma-sync.py --export # Force export assets even if no changes
"""

import argparse
import io
import json
import os
import re
import sys
import urllib.request
import urllib.error
from datetime import datetime, timezone
from pathlib import Path

# Fix Windows console encoding
if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding="utf-8", errors="replace")

# ── Config ──────────────────────────────────────────────────────────────────

ROOT = Path(__file__).parent.parent
ENV_FILE = ROOT / ".env"
STATE_FILE = ROOT / ".figma-sync-state.json"
ASSETS_DIR = ROOT / "public" / "assets"
EXPORTS_DIR = ROOT / "public" / "figma-exports"

FIGMA_API = "https://api.figma.com/v1"

# ── Helpers ──────────────────────────────────────────────────────────────────

def load_env() -> dict:
    """Load .env file into a dict."""
    env = {}
    if ENV_FILE.exists():
        for line in ENV_FILE.read_text().splitlines():
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, _, v = line.partition("=")
                env[k.strip()] = v.strip()
    # Override with actual environment variables
    for key in ("FIGMA_TOKEN", "FIGMA_FILE_ID"):
        if key in os.environ:
            env[key] = os.environ[key]
    return env


def figma_get(token: str, path: str) -> dict:
    """Make a GET request to the Figma API."""
    url = f"{FIGMA_API}/{path}"
    req = urllib.request.Request(url, headers={"X-Figma-Token": token})
    try:
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read())
    except urllib.error.HTTPError as e:
        body = e.read().decode()
        print(f"  [ERROR] Figma API {e.code}: {body[:200]}")
        sys.exit(1)


def load_state() -> dict:
    if STATE_FILE.exists():
        return json.loads(STATE_FILE.read_text())
    return {}


def save_state(state: dict):
    STATE_FILE.write_text(json.dumps(state, indent=2))


def download_file(url: str, dest: Path):
    req = urllib.request.Request(url)
    with urllib.request.urlopen(req) as resp:
        dest.write_bytes(resp.read())


def sanitize_name(name: str) -> str:
    """Convert node name to safe filename."""
    name = re.sub(r"[^\w\-]", "_", name)
    return re.sub(r"_+", "_", name).strip("_")

# ── Main logic ───────────────────────────────────────────────────────────────

def check_changes(token: str, file_id: str, state: dict) -> tuple[bool, str]:
    """Returns (changed, last_modified)."""
    print("Checking Figma file for changes...")
    data = figma_get(token, f"files/{file_id}?depth=1")
    last_modified = data.get("lastModified", "")
    file_name = data.get("name", file_id)
    print(f"  File: {file_name}")
    print(f"  Last modified: {last_modified}")

    prev = state.get("lastModified", "")
    if prev:
        print(f"  Last sync:     {prev}")
        if last_modified == prev:
            print("  [OK] No changes since last sync.")
            return False, last_modified
        else:
            print("  [!] File has changed since last sync!")
            return True, last_modified
    else:
        print("  [INFO] No previous sync state found.")
        return True, last_modified


def find_exportable_nodes(token: str, file_id: str) -> list[dict]:
    """Get all nodes with exportSettings from the file."""
    print("\nScanning for exportable nodes...")
    data = figma_get(token, f"files/{file_id}?depth=3")

    def collect(node):
        results = []
        if node.get("exportSettings"):
            for setting in node["exportSettings"]:
                results.append({
                    "id": node["id"],
                    "name": node.get("name", node["id"]),
                    "type": node.get("type", ""),
                    "format": setting.get("format", "PNG"),
                    "scale": setting.get("constraint", {}).get("value", 1),
                })
        for child in node.get("children", []):
            results.extend(collect(child))
        return results

    nodes = collect(data.get("document", {}))
    print(f"  Found {len(nodes)} exportable node(s).")
    return nodes


def export_assets(token: str, file_id: str, nodes: list[dict]):
    """Export assets from Figma and save to EXPORTS_DIR."""
    if not nodes:
        print("  Nothing to export.")
        return

    EXPORTS_DIR.mkdir(parents=True, exist_ok=True)

    # Group nodes by format for batch API calls
    by_format: dict[str, list] = {}
    for n in nodes:
        by_format.setdefault(n["format"], []).append(n)

    exported = 0
    failed = 0

    for fmt, group in by_format.items():
        ids = ",".join(n["id"] for n in group)
        print(f"\n  Exporting {len(group)} nodes as {fmt}...")
        data = figma_get(token, f"images/{file_id}?ids={ids}&format={fmt.lower()}&scale=1")
        images = data.get("images", {})

        for node in group:
            url = images.get(node["id"])
            if not url:
                print(f"    [SKIP] {node['name']} — no URL returned")
                failed += 1
                continue

            safe_name = sanitize_name(node["name"])
            node_id_safe = node["id"].replace(":", "-")
            filename = f"{safe_name}__{node_id_safe}.{fmt.lower()}"
            dest = EXPORTS_DIR / filename

            try:
                download_file(url, dest)
                print(f"    [OK] {filename}")
                exported += 1
            except Exception as e:
                print(f"    [FAIL] {node['name']}: {e}")
                failed += 1

    print(f"\n  Exported: {exported}  |  Failed: {failed}")
    print(f"  Saved to: {EXPORTS_DIR.relative_to(ROOT)}/")


def check_missing_figma_assets():
    """Check which figma:asset/ imports are missing from public/assets/."""
    src_dir = ROOT / "src"
    pattern = re.compile(r"figma:asset/([^\s\"'`]+)")

    all_refs = set()
    for f in src_dir.rglob("*.tsx"):
        for match in pattern.finditer(f.read_text(encoding="utf-8", errors="ignore")):
            all_refs.add(match.group(1))
    for f in src_dir.rglob("*.ts"):
        for match in pattern.finditer(f.read_text(encoding="utf-8", errors="ignore")):
            all_refs.add(match.group(1))

    if not all_refs:
        return

    missing = [ref for ref in sorted(all_refs) if not (ASSETS_DIR / ref).exists()]
    if missing:
        print(f"\n  [WARN] {len(missing)} figma:asset file(s) missing from public/assets/:")
        for m in missing[:5]:
            print(f"    - {m}")
        if len(missing) > 5:
            print(f"    ... and {len(missing) - 5} more")
        print("  -> Download new ZIP from Figma Make and run: bash scripts/setup-assets.sh")
    else:
        print(f"\n  [OK] All {len(all_refs)} figma:asset file(s) present in public/assets/.")


# ── CLI ──────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="Figma sync for Andromeda Terminal")
    parser.add_argument("--check", action="store_true", help="Only check for changes, don't export")
    parser.add_argument("--export", action="store_true", help="Force export assets even without changes")
    args = parser.parse_args()

    # Load config
    env = load_env()
    token = env.get("FIGMA_TOKEN")
    file_id = env.get("FIGMA_FILE_ID")

    if not token or not file_id:
        print("[ERROR] Missing FIGMA_TOKEN or FIGMA_FILE_ID.")
        print("  Create a .env file with:")
        print("    FIGMA_TOKEN=your_token_here")
        print("    FIGMA_FILE_ID=your_file_id_here")
        sys.exit(1)

    state = load_state()

    print("=" * 60)
    print("  Figma Sync — Andromeda Terminal")
    print("=" * 60)

    changed, last_modified = check_changes(token, file_id, state)

    if args.check:
        sys.exit(0 if not changed else 1)

    should_export = changed or args.export

    if should_export:
        nodes = find_exportable_nodes(token, file_id)
        export_assets(token, file_id, nodes)

        # Update state
        state["lastModified"] = last_modified
        state["lastSync"] = datetime.now(timezone.utc).isoformat()
        state["exportedCount"] = len(nodes)
        save_state(state)
        print(f"\n  State saved to {STATE_FILE.name}")
    else:
        print("\n  Skipping export (use --export to force).")

    check_missing_figma_assets()

    print("\n" + "=" * 60)
    if changed:
        print("  NEXT STEPS:")
        print("  1. Review exported assets in public/figma-exports/")
        print("  2. If components changed → download ZIP from Figma Make")
        print("     and run: bash scripts/figma-merge.sh <path-to-zip>")
        print("  3. Commit: git add public/figma-exports && git commit")
    print("=" * 60)


if __name__ == "__main__":
    main()
