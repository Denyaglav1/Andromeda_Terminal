# Andromeda Dashboard — Local Setup & Deployment

## Quick Start (3 commands)

```bash
npm install
npm run dev
# Open http://localhost:5173
```

## Full Setup Guide

### 1. Download from Figma Make

Click **"Download code"** in Figma Make. Unzip the archive:

```bash
unzip andromeda-dashboard.zip -d andromeda-dashboard
cd andromeda-dashboard
```

### 2. Handle Figma Assets

The project uses `figma:asset/HASH.png` imports for images (analyst avatars, thumbnails).
A Vite plugin (`vite-plugin-figma-assets.ts`) auto-resolves these to `/assets/HASH.png`.

**You need to place the actual PNG files in `public/assets/`:**

```bash
mkdir -p public/assets
# Run the helper script to see which files are needed:
bash scripts/setup-assets.sh
```

**How to get the asset files:**
- From the Figma Make preview: right-click images > Save image as...
- Save each file as `public/assets/<HASH>.png` (keep the hash filename)
- The app works without them (images just won't load), so this step is optional for development

### 3. Install Dependencies

```bash
# Using npm
npm install

# Or using pnpm (recommended)
pnpm install
```

### 4. Run Development Server

```bash
npm run dev
# -> http://localhost:5173
```

### 5. Build for Production

```bash
npm run build
npm run preview
# -> http://localhost:4173
```

---

## GitHub Integration

### Initial Push

```bash
git init
git branch -M main
git add .
git commit -m "feat: Andromeda financial dashboard"

# Create repo (GitHub CLI)
gh repo create andromeda-dashboard --public --source=. --remote=origin
# Or manually:
git remote add origin https://github.com/YOUR_USERNAME/andromeda-dashboard.git

git push -u origin main
```

### CI/CD with GitHub Actions (optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Build & Deploy
on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-artifact@v4
        with:
          name: dist
          path: dist/
```

---

## Railway Deployment

### Option A: GitHub Integration (recommended)

1. Go to [railway.app](https://railway.app) > **New Project** > **Deploy from GitHub repo**
2. Select `andromeda-dashboard`
3. Railway auto-detects the `railway.json` config
4. Deploy happens automatically on every `git push`

**Environment variable (set in Railway Dashboard):**
```
PORT=3000
```

### Option B: Railway CLI

```bash
npm install -g @railway/cli
railway login
railway init
railway up
```

### Option C: Docker

The project includes a `Dockerfile`. In Railway:
1. New Project > Deploy from GitHub
2. Railway auto-detects Dockerfile
3. Set `PORT=3000` in environment variables

---

## Project Structure

```
andromeda-dashboard/
├── public/
│   └── assets/          # Place figma:asset PNGs here
├── src/
│   ├── app/
│   │   ├── App.tsx      # Entry point (ErrorBoundary > MantineProvider > Router)
│   │   ├── routes.tsx   # All routes (createBrowserRouter)
│   │   ├── theme.ts     # Mantine theme config
│   │   ├── types.ts     # Core types & COMPANIES data
│   │   └── components/  # All components
│   ├── imports/         # Figma imports (SVGs, tokens, frames)
│   └── styles/          # Global CSS (theme.css, tailwind.css, fonts.css)
├── packages/
│   └── andromeda-ds/    # npm package source
├── docs/                # Feature specs
├── vite.config.ts       # Vite config + figma assets plugin
├── railway.json         # Railway deployment config
├── Dockerfile           # Docker build
└── package.json
```

## Tech Stack

| Package        | Version  | Role                    |
|----------------|----------|-------------------------|
| React          | 18.3.1   | UI framework            |
| Vite           | 6.3.5    | Bundler                 |
| Mantine        | ^8.3.15  | Component library       |
| ECharts        | ^6.0.0   | Charts (canvas)         |
| React Router   | 7.13.0   | Routing (Data mode)     |
| Tailwind CSS   | 4.1.12   | Utility classes         |
| Lucide React   | 0.487.0  | Icons                   |
| Motion         | 12.23.24 | Animations              |

## Troubleshooting

### `figma:asset` import errors
Make sure `vite-plugin-figma-assets.ts` is loaded in `vite.config.ts` and
images are in `public/assets/`.

### SPA routing 404 on refresh
The `serve -s` flag enables SPA fallback. For Nginx/Apache, add rewrite rules
to serve `index.html` for all routes.

### Mantine styles broken
Check that `postcss.config.mjs` exists with `postcss-preset-mantine` plugin.
The CSS layer order in `tailwind.css` (`@layer theme, base, mantine;`) is critical.
