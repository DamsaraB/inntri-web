import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for cPanel / Nginx hosting
  output: "export",

  // /page/index.html so direct URL loads work on static hosts
  trailingSlash: true,

  // Keep the default `.next` build cache (do NOT use `dist` here).
  // Using distDir: 'dist' made `next dev` and `next build` fight over the same folder
  // and caused ENOENT errors for routes-manifest.json / webpack cache.

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
