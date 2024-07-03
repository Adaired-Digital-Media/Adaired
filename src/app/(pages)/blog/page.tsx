import React from "react";
import PageBanner from "@/components/PageBanner/PageBanner";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import PopularPosts from "@/components/PopularPosts/PopularPosts";
import BlogWPagination from "@/components/BlogWithPagination/BlogWPagination";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Read Our Blog for Helpful Tips and Ideas | Adaired",
  description:
    "Get easy-to-understand tips and new ideas from Adaired’s blogs. From practical tips to interesting ideas, there is something for everyone. Start exploring today!",
    alternates: {
      canonical: "https://adaired.com/blog",
    },
  
};

async function getBlogs() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/blog/findBlog`
  );
  const data = await res.json();
  return data;
}

const Blog = async () => {
  const data = await getBlogs();

  return (
    <>
      <PageBanner title="Blog" />
      <MaxWidthWrapper className="py-6 lg:py-12">
        <div className="flex flex-col xl:flex-row gap-10">
          <div className="xl:w-[70%]">
            <BlogWPagination data={data.result} />
          </div>

          <aside className="xl:w-[30%] relative mt-10">
            <div className="sticky top-24">
              <PopularPosts />
            </div>
          </aside>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Blog;
