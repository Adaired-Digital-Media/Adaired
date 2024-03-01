import PageBanner from "@/components/PageBanner/PageBanner";
import { ProcessSection } from "../about/page";
import TestimonialSlider from "@/components/TestimonialSlider/TestimonialSlider";
import BlogCards from "@/components/BlogCard/BlogCards";
import CaseStudyCards from "@/components/CaseStudyCards/CaseStudyCards";

async function getCaseStudyCategories() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/case-studies-category/getCaseStudiesCategory/all`,
    {
      method: "GET",
    }
  );
  const data = await res.json();
  return data.result;
}

async function getCaseStudies() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/case-studies/all`
  );
  const data = await res.json();
  return data.result;
}

const CaseStudies = async () => {
  const categories = await getCaseStudyCategories();
  const caseStudies = await getCaseStudies();

  return (
    <>
      <PageBanner title="Case Studies" />
      <CaseStudyCards categories={categories} caseStudies={caseStudies} />
      <ProcessSection />
      <TestimonialSlider />
      <BlogCards />
    </>
  );
};

export default CaseStudies;
