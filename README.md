# Verdis website — GitHub Pages deploy

## Quick deploy
1. Create a new repo on GitHub (e.g. `verdis-site`).
2. Upload all files in this folder to the repo root (or drag the whole folder onto github.com).
3. In the repo: **Settings → Pages**.
4. Under **Source**, pick the branch (usually `main`) and folder `/ (root)`. Save.
5. Wait ~30s. Your site will be live at:
   `https://<your-username>.github.io/<repo-name>/`

## Files
- `index.html` — entry point
- `app.jsx`, `components.jsx`, `mocks.jsx`, `sections.jsx`, `tweaks-panel.jsx` — React components (transpiled in-browser by Babel)
- `facility-research.png`, `facility-production.png` — sector photos

## Custom domain (optional)
Add a file named `CNAME` with one line: `yourdomain.com`
Then point your domain's DNS at GitHub Pages per their docs.

## Local preview
Just open `index.html` in a browser — or run a tiny server:
```
python3 -m http.server 8000
```
