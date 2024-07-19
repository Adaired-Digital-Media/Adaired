import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import React from "react";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import parse from "html-react-parser";
import PageBanner from "@/components/PageBanner/PageBanner";
import PopularPosts from "@/components/PopularPosts/PopularPosts";
import type { Metadata } from "next";

async function getBlogs({ params }: { params: { slug: string } }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/blog/${params.slug}`
  );
  const data = await res.json();
  return data.result[0];
}
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = await getBlogs({ params });
  return {
    title: data.metaTitle
      ? data.metaTitle
      : `Read Our Blog for Helpful Tips and Ideas | Adaired`,
    description: data.metaDescription
      ? data.metaDescription
      : `Get easy-to-understand tips and new ideas from Adaired’s blogs. From practical tips to interesting ideas, there is something for everyone. Start exploring today!`,
    alternates: {
      canonical: `https://www.adaired.com/blog/${params.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
export async function generateStaticParams() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/blog/findBlog`
  ).then((res) => res.json());
  const blogs = res.result;
  return blogs.map((blog: any) => ({
    slug: blog.slug.toString(),
  }));
}

interface BlogProps {
  params: {
    slug: string;
  };
}

const Blog: React.FC<BlogProps> = async ({ params }) => {
  const data = await getBlogs({ params });

  return (
    <>
      <PageBanner title="Blog" />
      <MaxWidthWrapper className="flex gap-10 py-6 lg:py-12">
        <div className="border p-10 w-[70%]">
          <div>
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}blog/${data.image}`}
              height={560}
              width={1000}
              placeholder="blur"
              blurDataURL="/banner1.webp"
              alt={data.title}
            />
          </div>
          <h2 className="text-[1.688rem] md:text-4xl py-4">{data.title}</h2>
          <p>{formatDate(data.createdAt)}</p>
          <div>{parse(data.description)}</div>
        </div>
        <aside className="w-[30%] relative">
          <div className="sticky top-24">
            <PopularPosts />
          </div>
        </aside>
      </MaxWidthWrapper>
    </>
  );
};

export default Blog;
