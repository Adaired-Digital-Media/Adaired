import { DateComponent } from "@/helpers/formatDate";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Services URLs
  const Services = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/services?all=true`
  );
  const { data } = await Services.json();

  const servicePaths: MetadataRoute.Sitemap = data.map(
    ({ slug, updatedAt }: { slug: string; updatedAt: string }) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/${slug}`,
      lastModified: DateComponent(updatedAt),
      changeFrequency: `monthly`,
      priority: 0.5,
    })
  );

  // Case Studies
  const CaseStudies = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/case-studies/all`
  );
  const caseStudies = await CaseStudies.json();

  const caseStudiesPaths: MetadataRoute.Sitemap = caseStudies.result.map(
    ({ slug, updatedAt }: { slug: string; updatedAt: string }) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/case-studies/${slug}`,
      lastModified: DateComponent(updatedAt),
      changeFrequency: `monthly`,
      priority: 0.5,
    })
  );

  // Blog URLs
  const Blogs = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/blog/findBlog`
  );
  const { result } = await Blogs.json();

  const blogPaths: MetadataRoute.Sitemap = result.map(
    ({ slug, updatedAt }: { slug: string; updatedAt: string }) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}`,
      lastModified: DateComponent(updatedAt),
      changeFrequency: `monthly`,
      priority: 0.5,
    })
  );

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      lastModified: `2024-06-24`,
      changeFrequency: `monthly`,
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      lastModified: `2024-06-24`,
      changeFrequency: `monthly`,
      priority: 1,
    },
    ...servicePaths,
    {
      url: `https://career.adaired.com/jobs/Careers`,
      lastModified: `2024-06-24`,
      changeFrequency: `monthly`,
      priority: 0.5,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/case-studies`,
      lastModified: `2024-06-24`,
      changeFrequency: `monthly`,
      priority: 0.5,
    },
    ...caseStudiesPaths,
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
      lastModified: `2024-06-24`,
      changeFrequency: `monthly`,
      priority: 0.5,
    },
    ...blogPaths,
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
      lastModified: `2024-06-24`,
      changeFrequency: `monthly`,
      priority: 0.5,
    },
  ];
}
