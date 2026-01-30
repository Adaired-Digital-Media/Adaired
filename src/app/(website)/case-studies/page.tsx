"use client";
import PageBanner from "@/src/components/PageBanner";
import { getBlogsData, ProcessSection } from "../about/page";
import { Suspense, useEffect, useState } from "react";
import type { Metadata } from "next";
import { Base2URL } from "@/src/baseUrl";
import Blogs from "@/src/components/home/Blogs";
import MaxWidthWrapper from "@/src/components/layout/MaxWidthWrapper";
import axios from "axios";
import { useRouter } from "next/navigation";
import Heading from "@/src/components/common/Heading";
import CaseStudy from "@/src/components/card/CaseStudy";
import CaseStudyImg from "../../../../public/assets/images/case_staudy/case_study.webp";
import CaseStudyImg_2 from "../../../../public/assets/images/case_staudy/case_study_2.webp";
import CaseStudyImg_3 from "../../../../public/assets/images/case_staudy/case_study_3.webp";
import Testimonial from "@/src/components/home/Testimonial";

//hello
const CaseStudies = () => {
  const [isActiveTab, setIsActiveTab] = useState(0);
  const router = useRouter();
  const [caseStudies, setCaseStudies] = useState([0]);
  const getData = async () => {
    const res = await axios.get(`${Base2URL}/case-study/read`);
    setCaseStudies(res?.data?.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const ApiData = [
    {
      image: CaseStudyImg,
      caseStudyName: "Green Choice Carpet Cleaning",
      slug: "green-choice-carpet-cleaning",
    },
    {
      image: CaseStudyImg_2,
      caseStudyName: "AMPT Calgary Electricians",
      slug: "ampt-calgary-electricians",
    },
    {
      image: CaseStudyImg_3,
      caseStudyName: "Bayside Heating and Cooling",
      slug: "bayside-heating-and-cooling",
    },
  ];

  const data = [
    "All",
    "SEO ( Search Engine Optimization )",
    "PPC ( Pay-Per-Click )",
    "Website Development",
    "App Development",
  ];
  const COLORS = [
    { bg: "#FFF4F3", btn: "#FFF4F3", hover: "#FFB3AD" },
    { bg: "#D7EBFF", btn: "#D7EBFF", hover: "#3B82F6" },
    { bg: "#E1F2E2", btn: "#048C0B", hover: "#036B08" },
  ];

  return (
    <>
      <PageBanner subTitle={"LATEST"} title={"CASE STUDIES"} />
      <Suspense fallback={<p>Loading feed...</p>}>
        <MaxWidthWrapper className="py-[3rem] lg:py-[4rem] xl:py-[6rem]">
          <div>
            <Heading
              isVarticle={true}
              breakIndex={3}
              subTitle={"CASE STUDIES"}
              title={`Digital Agency That Turns Businesses Into Brands`}
            />
          </div>
          <div className="mb-[4rem] mt-[1rem] flex gap-[1rem] rounded-full bg-[#EDF6FF]">
            {data?.map((item, idx: number) => (
              <p
                key={idx}
                onClick={() => setIsActiveTab(idx)}
                className={`my-auto cursor-pointer rounded-full px-[3rem] py-[0.8rem] transition-all duration-300 ease-in-out ${
                  isActiveTab === idx
                    ? "scale-105 bg-[#1B5A96] text-white"
                    : "hover:bg-[#1B5A96] hover:text-white"
                }`}
              >
                {item}
              </p>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-[2rem]">
            {ApiData.map((caseStudy: any, idx: number) => (
              <div key={idx}>
                <CaseStudy
                  image={caseStudy?.image}
                  labels={["SEO", "PPC"]}
                  title={caseStudy?.caseStudyName ?? ""}
                  breakIndex={3}
                  link={caseStudy?.slug}
                  bgColor={
                    (idx === 0 && "#FFF4F3") ||
                    (idx === 1 && "#D7EBFF") ||
                    (idx === 2 && "#E1F2E2")
                  }
                  buttonColor={
                    (idx === 0 && "#FFF4F3") ||
                    (idx === 1 && "#D7EBFF") ||
                    (idx === 2 && "#048C0B")
                  }
                />
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </Suspense>
      <Testimonial />
      <Blogs />
    </>
  );
};

export default CaseStudies;
