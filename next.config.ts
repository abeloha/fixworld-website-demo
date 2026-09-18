import type { NextConfig } from "next";

const isGithubPagesExport = process.env.GITHUB_PAGES_EXPORT === "true";
const basePath = isGithubPagesExport ? "/fixworld-website-demo" : "";

const nextConfig: NextConfig = {
  agentRules: false,
  ...(isGithubPagesExport && {
    output: "export",
    basePath,
    trailingSlash: true,
    images: { unoptimized: true },
  }),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
