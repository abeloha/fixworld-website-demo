import type { NextConfig } from "next";

const isGithubPagesExport = process.env.GITHUB_PAGES_EXPORT === "true";
const basePath = isGithubPagesExport ? "/fixworld-website-demo" : "";

const nextConfig: NextConfig = {
  agentRules: false,
  ...(isGithubPagesExport && {
    output: "export",
    basePath,
    images: { unoptimized: true },
  }),
};

export default nextConfig;
