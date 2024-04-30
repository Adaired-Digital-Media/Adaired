import Button from "@/components/Button/Button";
import Image from "next/image";
import React from "react";
import parse from "html-react-parser";
import { cn, formatDate } from "@/lib/utils";
import PageBanner from "@/components/PageBanner/PageBanner";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import PopularPosts from "@/components/PopularPosts/PopularPosts";
import BlogWPagination from "@/components/BlogWithPagination/BlogWPagination";

async function getBlogs() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/blog/findBlog`,
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
