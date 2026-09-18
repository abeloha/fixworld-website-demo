import NextImage, { type ImageProps } from "next/image";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function withBasePath(src: ImageProps["src"]): ImageProps["src"] {
  if (typeof src === "string" && src.startsWith("/") && !src.startsWith("//")) {
    return `${BASE_PATH}${src}`;
  }
  return src;
}

/**
 * Drop-in replacement for next/image that prepends the configured basePath
 * to root-relative sources — next/image does not do this automatically
 * (unlike next/link), which breaks images under a GitHub Pages sub-path.
 */
export default function AppImage({ src, ...rest }: ImageProps) {
  return <NextImage src={withBasePath(src)} {...rest} />;
}
