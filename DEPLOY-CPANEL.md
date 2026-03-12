# Deploy Next.js static export to cPanel

Your site is built as **static files** (no Node.js on the server). Follow these steps so the site does **not** show a white/blank page.

## 1. Build locally

```bash
npm run build
```

This creates a **`dist`** folder with the site.

## 2. Upload to cPanel (critical)

- Open **cPanel** → **File Manager** → **public_html** (or the folder your domain uses).
- **Upload the CONTENTS of `dist`, not the `dist` folder itself.**

Correct structure on the server:

```
public_html/
  index.html          ← home page
  about.html
  contact.html
  services.html
  products.html
  portfolio.html
  privacy-policy.html
  404.html
  .htaccess           ← enables /privacy-policy (no .html) to work
  logo/               ← from public/logo
    logo.png
  _next/              ← JS and CSS (required)
    static/
      css/
      chunks/
```

Wrong (causes white screen):

```
public_html/
  dist/               ← WRONG: do not upload the folder
    index.html
    _next/
    ...
```

If the site lives at `https://yourdomain.com/`, the browser must get:

- `https://yourdomain.com/` → `index.html`
- `https://yourdomain.com/_next/static/css/...` → your CSS
- `https://yourdomain.com/_next/static/chunks/...` → your JS
- `https://yourdomain.com/logo/logo.png` → logo

If you put everything inside `public_html/dist/`, then the site is at `https://yourdomain.com/dist/` but the HTML still asks for `/_next/...` (from the root). Those requests 404 → no CSS/JS → white screen.

## 3. How to upload “contents” of dist

**Option A – File Manager**

1. Open `dist` on your computer.
2. Select **all files and folders inside** `dist` (e.g. `index.html`, `_next`, `logo`, `about.html`, etc.).
3. Upload them into **public_html** so they sit **directly** inside `public_html`, not inside a `dist` folder.

**Option B – ZIP**

1. On your computer, open the `dist` folder.
2. Select everything **inside** `dist` (not the `dist` folder itself).
3. Create a ZIP of those items.
4. In cPanel File Manager, go to `public_html`, upload the ZIP, then **Extract**.
5. Confirm `index.html` and `_next` are directly inside `public_html`. Delete the ZIP if you want.

## 4. If the site is in a subfolder (e.g. yourdomain.com/inntri/)

Then you must build with a base path and re-upload:

1. In `next.config.ts` add:
   ```ts
   basePath: '/inntri',
   ```
2. Run `npm run build` again.
3. Upload the **contents** of `dist` into the subfolder (e.g. `public_html/inntri/`).

## 5. Clean URLs (privacy-policy, about, etc.)

The build includes `.htaccess` which rewrites extensionless URLs to `.html` files. For example, `yoursite.com/privacy-policy` will serve `privacy-policy.html`. Make sure `.htaccess` is uploaded with the rest of the `dist` contents—it is copied from `public/` during build. Without it, direct links like `/privacy-policy` may 404 on cPanel.

## 6. Check after deploy

- Open `https://yourdomain.com/`.
- Open DevTools (F12) → **Network**.
- Reload the page. You should see:
  - `index.html` → 200
  - `_next/static/css/...` → 200
  - `_next/static/chunks/...` → 200
- If any of these are **404**, the paths or upload structure are wrong (often the “dist folder inside public_html” mistake).

A **no-JS fallback** is included: if scripts fail to load (e.g. wrong paths), the main content should still become visible. Fixing the upload structure is still required for full styling and behavior.
