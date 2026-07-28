import type { NextConfig } from "next";

// Set NEXT_PUBLIC_BASE_PATH=/me when deploying to kidwon.github.io/me;
// leave it unset for local dev so the site serves at the root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
