import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    
  // Blog Urls
  const Blogs = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/blog/findBlog`
  );
  const { result } = await Blogs.json();

  const blogPaths: MetadataRoute.Sitemap = result.map(
    ({ slug, updatedAt }: { slug: string; updatedAt: string }) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}`,
      lastModified: new Date(updatedAt),
    })
  );

  return [
    ...blogPaths,
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
    },
  ];
}
