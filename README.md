# Afters / Flowon landing page

This repository is a **Next.js 14 App Router** project and is ready to deploy on Vercel.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Import this repo in Vercel.
2. Framework preset: **Next.js** (auto-detected).
3. Set environment variable (recommended):
   - `NEXT_PUBLIC_SITE_URL=https://your-domain.com`
4. Deploy.

### Why this setup is Vercel-friendly

- Single framework (Next.js) with no leftover Vite entrypoints.
- `.gitignore` prevents uploading `node_modules`, `.next`, and local env files.
- `vercel.json` pins install/build commands for predictable CI deploys.
