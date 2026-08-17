/**
 * After `next build` with `output: 'export'`, Next writes static files to `out/`.
 * Deploy docs expect a `dist/` folder — copy/rename here for cPanel & Nginx.
 */
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const outDir = path.join(root, "out");
const distDir = path.join(root, "dist");

if (!fs.existsSync(outDir)) {
  console.error("Missing `out/` folder. Run `next build` first.");
  process.exit(1);
}

fs.rmSync(distDir, { recursive: true, force: true });
fs.renameSync(outDir, distDir);
console.log("Static export ready in dist/");
