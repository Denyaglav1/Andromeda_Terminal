#!/bin/bash
# ═══════════════════════════════════════════════════════════
# Andromeda Dashboard — Asset Setup Script
# ═══════════════════════════════════════════════════════════
# This script creates the public/assets/ directory and
# generates placeholder files for all figma:asset imports.
#
# After downloading from Figma Make, the actual PNG files
# should be placed in public/assets/ with their hash names.
# ═══════════════════════════════════════════════════════════

set -e

ASSETS_DIR="public/assets"
mkdir -p "$ASSETS_DIR"

echo "Scanning for figma:asset imports..."

# Extract all unique asset hashes from source code
ASSETS=$(grep -roh 'figma:asset/[^"'"'"']*' src/ | sed 's|figma:asset/||' | sort -u)

FOUND=0
MISSING=0

for asset in $ASSETS; do
  if [ -f "$ASSETS_DIR/$asset" ]; then
    FOUND=$((FOUND + 1))
  else
    MISSING=$((MISSING + 1))
    echo "  MISSING: $ASSETS_DIR/$asset"
  fi
done

echo ""
echo "Summary:"
echo "  Found:   $FOUND assets"
echo "  Missing: $MISSING assets"
echo ""

if [ "$MISSING" -gt 0 ]; then
  echo "To get the missing assets:"
  echo "  1. Open the Figma Make project in your browser"
  echo "  2. Right-click each image > Save image as..."
  echo "  3. Save to public/assets/ with the hash filename"
  echo ""
  echo "Or use the Figma API to export all assets programmatically."
fi

echo "Done."
