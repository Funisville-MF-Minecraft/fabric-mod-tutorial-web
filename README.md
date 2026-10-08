# Fabric Modding Docs

This repository contains a multi-page documentation site for Fabric modding on Minecraft: Java Edition, with a strong emphasis on server-side modding, public hosting, and Bedrock compatibility with Geyser and Floodgate.

## Local development

From the project root:

```bash
npm install
npm run dev
```

Then open the local preview in your browser.

## Production build

```bash
npm run build
```

The generated static site is output to `dist`.

## GitHub Pages deployment

This project includes a GitHub Actions workflow for Pages deployment in `.github/workflows/docs.yml`.

To publish the docs on GitHub Pages:

1. Push the repo to GitHub.
2. Open the repository settings.
3. Go to Pages.
4. Set the source to GitHub Actions.
5. Let the workflow run.

The site can also be deployed to Netlify, Cloudflare Pages, Vercel, or any static host that accepts the Astro build output.

## Project structure

- `site/` — Astro Starlight docs app
- `COVERAGE.md` — required topic coverage manifest
- `PLAN.md` — project plan and implementation roadmap
- `UNVERIFIED.md` — verification ledger for items that still need official confirmation
- `.github/workflows/docs.yml` — CI and Pages deployment workflow
