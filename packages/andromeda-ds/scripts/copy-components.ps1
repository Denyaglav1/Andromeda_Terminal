# Copy DS components from main project to package
# Run from /packages/andromeda-ds/

$ErrorActionPreference = "Stop"

$SRC = "../../src/app/components/ui"
$DEST = "src/components"

# Create destination directory
New-Item -ItemType Directory -Force -Path $DEST | Out-Null

# Copy all ds-* component files (except ds-source-badge)
$files = Get-ChildItem -Path "$SRC/ds-*.tsx"
foreach ($f in $files) {
    if ($f.Name -eq "ds-source-badge.tsx") {
        Write-Host "  SKIP $($f.Name)"
        continue
    }
    Copy-Item $f.FullName -Destination $DEST -Force
    Write-Host "  COPY $($f.Name)"
}

# Copy CSS module
Copy-Item "$SRC/ds-table.module.css" -Destination $DEST -Force
Write-Host "  COPY ds-table.module.css"

# Patch ds-badge.tsx - remove source-icons import
Write-Host ""
Write-Host "Patching ds-badge.tsx..."

$badgePath = Join-Path $DEST "ds-badge.tsx"
if (Test-Path $badgePath) {
    $content = Get-Content $badgePath -Raw

    # Remove import of source-icons (multi-line or single-line)
    $content = $content -replace "(?s)import\s*\{[^}]*\}\s*from\s*'\.\/source-icons';\s*\r?\n?", "// Source icons excluded from package`n"

    # Remove any remaining source-icons import
    $content = $content -replace "import\s+.*from\s*'\.\/source-icons'.*\r?\n?", ""

    # Replace all icon references with undefined
    $iconNames = @(
        'EulerIcon', 'NfgroupIcon', 'VelesIcon', 'IbcRealEstateIcon', 'AstraIcon',
        'InterfaxIcon', 'TelegramIcon', 'RiaIcon', 'RbcIcon', 'YahooIcon',
        'MarketScreenerIcon', 'ReutersIcon', 'CnbcIcon', 'AniNewsIcon',
        'BusinessStandardIcon', 'PtiIcon', 'ScmpIcon', 'TipranksIcon',
        'FutunnIcon', 'BseIndiaIcon', 'EconomicTimesIcon', 'AndromedaIcon',
        'MoexIcon', 'TassIcon', 'KommersantIcon'
    )
    foreach ($icon in $iconNames) {
        $content = $content -replace ":\s*$icon\b", ": undefined as any"
    }

    Set-Content -Path $badgePath -Value $content -NoNewline
    Write-Host "  Patched ds-badge.tsx successfully"
}
else {
    Write-Host "  WARNING: ds-badge.tsx not found"
}

Write-Host ""
Write-Host "Done! Components copied and patched."
Write-Host ""
Write-Host "Next steps:"
Write-Host "  1. npm run build"
Write-Host "  2. npm pack (to verify)"
