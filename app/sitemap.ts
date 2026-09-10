import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

const siteUrl = "https://younes-projects-growth.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl },
    { url: `${siteUrl}/projects` },
    { url: `${siteUrl}/platform` },
  ];

  const projectRoutes = projects.map(
    (project): MetadataRoute.Sitemap[number] => ({
      url: `${siteUrl}/projects/${project.slug}`,
    }),
  );

  return [...staticRoutes, ...projectRoutes];
}
