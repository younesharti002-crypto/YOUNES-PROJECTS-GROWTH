import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

const siteUrl = "https://younes-projects-growth.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/platform`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const projectRoutes = projects.map(
    (project): MetadataRoute.Sitemap[number] => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    }),
  );

  return [...staticRoutes, ...projectRoutes];
}
