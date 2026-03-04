#!/bin/bash
# ═══════════════════════════════════════════════════
# Copy DS components from main project to package
# Run from /packages/andromeda-ds/
# ═══════════════════════════════════════════════════

set -e

SRC="../../src/app/components/ui"
DEST="src/components"

mkdir -p "$DEST"

# Copy all ds-* component files (except ds-source-badge which depends on source-icons)
for f in "$SRC"/ds-*.tsx; do
  basename=$(basename "$f")
  if [ "$basename" = "ds-source-badge.tsx" ]; then
    echo "  SKIP $basename (depends on source-icons)"
    continue
  fi
  cp "$f" "$DEST/"
  echo "  COPY $basename"
done

# Copy CSS module
cp "$SRC/ds-table.module.css" "$DEST/"
echo "  COPY ds-table.module.css"

# ═══ Excluded: source-icons.tsx and SVG path data ═══
# Source icons will be moved to a separate icon database.
# Do NOT copy: source-icons.tsx, svg-52gvh62ygy.ts

# ═══ Patch ds-badge.tsx — remove source-icons import, use text fallback ═══
echo ""
echo "Patching ds-badge.tsx to remove source-icons dependency..."

# 1. Replace the source-icons import block with an empty icon map
sed -i '/^import {$/,/^} from .\/source-icons.;$/c\
\/\/ Source icons excluded from package — text fallback used for variant="source"\
\/\/ To provide icons, pass them via renderIcon prop or use the main app source-icons.' "$DEST/ds-badge.tsx"

# 2. If the multi-line import wasn't caught, try single-line pattern
sed -i "s|^import {.*} from './source-icons';|// Source icons excluded — text fallback for variant=\"source\"|g" "$DEST/ds-badge.tsx"

# 3. Replace all Icon component references with a null fallback
# The SOURCE_ICON_MAP in ds-badge.tsx maps SourceId -> React component.
# We replace the map values with undefined so the text fallback renders instead.
python3 -c "
import re, sys

path = '$DEST/ds-badge.tsx'
with open(path, 'r') as f:
    content = f.read()

# Find the SOURCE_ICON_MAP object and replace icon references with undefined
# Pattern: identifier: SomeIcon  ->  identifier: undefined
content = re.sub(
    r'(SOURCE_ICON_MAP[^}]*?)((?:euler|nfgroup|veleskapital|ibcrealestate|astra|interfax|telegram|ria|rbc|yahoo|marketscreener|reuters|cnbc|aninews|businessstandard|pti|scmp|tipranks|futunn|bseindia|economictimes|andromeda|moex|tass|kommersant)\s*:\s*)(\w+Icon)',
    lambda m: m.group(0).replace(m.group(3), 'undefined as any'),
    content
)

with open(path, 'w') as f:
    f.write(content)
print('  Patched SOURCE_ICON_MAP entries to undefined')
" 2>/dev/null || {
  # Fallback if python3 is not available: use sed for common patterns
  sed -i "s/: EulerIcon/: undefined as any/g" "$DEST/ds-badge.tsx"
  sed -i "s/: NfgroupIcon/: undefined as any/g" "$DEST/ds-badge.tsx"
  sed -i "s/: VelesIcon/: undefined as any/g" "$DEST/ds-badge.tsx"
  sed -i "s/: IbcRealEstateIcon/: undefined as any/g" "$DEST/ds-badge.tsx"
  sed -i "s/: AstraIcon/: undefined as any/g" "$DEST/ds-badge.tsx"
  sed -i "s/: InterfaxIcon/: undefined as any/g" "$DEST/ds-badge.tsx"
  sed -i "s/: TelegramIcon/: undefined as any/g" "$DEST/ds-badge.tsx"
  sed -i "s/: RiaIcon/: undefined as any/g" "$DEST/ds-badge.tsx"
  sed -i "s/: RbcIcon/: undefined as any/g" "$DEST/ds-badge.tsx"
  sed -i "s/: YahooIcon/: undefined as any/g" "$DEST/ds-badge.tsx"
  sed -i "s/: MarketScreenerIcon/: undefined as any/g" "$DEST/ds-badge.tsx"
  sed -i "s/: ReutersIcon/: undefined as any/g" "$DEST/ds-badge.tsx"
  sed -i "s/: CnbcIcon/: undefined as any/g" "$DEST/ds-badge.tsx"
  sed -i "s/: AniNewsIcon/: undefined as any/g" "$DEST/ds-badge.tsx"
  sed -i "s/: BusinessStandardIcon/: undefined as any/g" "$DEST/ds-badge.tsx"
  sed -i "s/: PtiIcon/: undefined as any/g" "$DEST/ds-badge.tsx"
  sed -i "s/: ScmpIcon/: undefined as any/g" "$DEST/ds-badge.tsx"
  sed -i "s/: TipranksIcon/: undefined as any/g" "$DEST/ds-badge.tsx"
  sed -i "s/: FutunnIcon/: undefined as any/g" "$DEST/ds-badge.tsx"
  sed -i "s/: BseIndiaIcon/: undefined as any/g" "$DEST/ds-badge.tsx"
  sed -i "s/: EconomicTimesIcon/: undefined as any/g" "$DEST/ds-badge.tsx"
  sed -i "s/: AndromedaIcon/: undefined as any/g" "$DEST/ds-badge.tsx"
  sed -i "s/: MoexIcon/: undefined as any/g" "$DEST/ds-badge.tsx"
  sed -i "s/: TassIcon/: undefined as any/g" "$DEST/ds-badge.tsx"
  sed -i "s/: KommersantIcon/: undefined as any/g" "$DEST/ds-badge.tsx"
  echo "  Patched icon references via sed fallback"
}

echo ""
echo "Done! Components copied and patched successfully."
echo ""
echo "Excluded from package:"
echo "  - source-icons.tsx (SVG icon components — will be in separate icon DB)"
echo "  - ds-source-badge.tsx (wrapper around source variant)"
echo "  - svg-52gvh62ygy.ts (SVG path data)"
echo ""
echo "Next steps:"
echo "  1. pnpm install"
echo "  2. pnpm build"
echo "  3. pnpm pack (to verify)"
