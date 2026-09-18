import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { products } from "@/data/products";

export const dynamic = "force-static";

const BASE_URL = "https://www.fixworldglobal.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/projects",
    "/products",
    "/gallery",
    "/engineers",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    lastModified: new Date(),
  }));

  const productRoutes = products.map((p) => ({
    url: `${BASE_URL}/products/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...productRoutes];
}
