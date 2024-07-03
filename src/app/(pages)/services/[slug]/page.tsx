import BlogCards from "@/components/BlogCard/BlogCards";
import { Icons } from "@/components/Icons/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import PageBanner from "@/components/PageBanner/PageBanner";
import ServicePageMenu from "@/components/ServicePageMenu/ServicePageMenu";
import { Separator } from "@/components/ui/separator";
import parse from "html-react-parser";
import Image from "next/image";
import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Button from "@/components/Button/Button";
import GetInTouchForm from "@/components/Forms/GetInTouchForm";
import type { Metadata } from "next";

async function getServiceData({ params }: { params: { slug: string } }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/services/${params.slug}`
  );
  const data = await res.json();
  const newData = data.data[0];
  return newData;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = await getServiceData({ params });
  return {
    title: data.metaTitle ? data.metaTitle : data.serviceTitle,
    description: data.metaDescription
      ? data.metaDescription
      : data.serviceDescription,
      alternates:{
        canonical: `https://adaired.com/services/${params.slug}`,
      },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export async function generateStaticParams() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/services?all=true`
  );
  const data = await res.json();
  const newData = data.data;
  return newData.map((service: any) => ({
    slug: service.slug.toString(),
  }));
}

interface MainServiceProps {
  params: {
    slug: string;
  };
}

const MainService: React.FC<MainServiceProps> = async ({ params }) => {
  const data = await getServiceData({ params });
  return (
    <>
      <PageBanner title={data.serviceBanner} />
      <IntroSection
        title={data.serviceTitle}
        description={data.serviceDescription}
        mainTwoPoints={data.mainTwoPoints}
        serviceImage={data.serviceImage}
        decription_II={data.serviceDescriptionII}
        serviceHeadingII={data.serviceHeadingII}
        serviceDescriptionIII={data.serviceDescriptionIII}
        fourPoints={data.fourPoints}
        menuData={data.childrens}
        slug={data.slug}
      />

      {data.ourProcessSubHeading && (
        <>
          <MaxWidthWrapper>
            <Separator className="h-0.5 bg-[#A7A9AC]" />
          </MaxWidthWrapper>

          <OurProcess
            ourProcessSubHeading={data.ourProcessSubHeading}
            ourProcessImage1={data.ourProcessImageI}
            ourProcessImage2={data.ourProcessImageII}
          />
        </>
      )}

      <ServiceBuild data={data.combinedSection} />
      {data.serviceHeadingIII && (
        <ServiceParagraph
          title={data.serviceHeadingIII}
          description={data.serviceDescriptionIV}
        />
      )}
      {data.LastSectionHeading && (
        <>
          <PinkSection
            heading={data.LastSectionHeading}
            text={data.LastSectionText}
            image={data.LastSectionImage}
            hookline={data.LastSectionHookLine}
            points={data.LastSectionPoints}
          />
          <Consultation />
        </>
      )}

      <BlogCards />
    </>
  );
};

export default MainService;

interface MainTwoPoints {
  mainTwoPointsImage: string;
  title: string;
  description: string;
}

interface IntroSectionProps {
  title: string;
  description: string;
  mainTwoPoints?: MainTwoPoints[];
  serviceImage: string;
  decription_II: string;
  serviceHeadingII: string;
  serviceDescriptionIII: string;
  fourPoints?: string[];
  menuData?: string[];
  slug: string;
}

const IntroSection: React.FC<IntroSectionProps> = ({
  title,
  description,
  mainTwoPoints,
  serviceImage,
  decription_II,
  serviceHeadingII,
  serviceDescriptionIII,
  fourPoints,
  menuData,
  slug,
}) => {
  return (
    <section className="py-6 lg:py-12">
      <MaxWidthWrapper className="xl:flex gap-10">
        <div className="w-full xl:w-3/4">
          <h2 className="text-[1.688rem] md:text-4xl pb-4">{title}</h2>
          <div className="text-justify hyphens-auto text-base sm:hyphens-none sm:text-left sm:text-lg">
            {parse(description)}
          </div>
          {mainTwoPoints && (
            <ul className="flex flex-col lg:flex-row gap-5 py-4">
              {mainTwoPoints.map((point: any, index: number) => {
                return (
                  <li
                    key={point.title}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-5 border p-3 sm:p-5 w-full lg:w-1/2"
                  >
                    <div className="relative flex items-center justify-center sm:justify-start sm:items-start">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}services/${point.mainTwoPointsImage}`}
                        alt={point.title}
                        width={150}
                        height={150}
                        className="hidden lg:block border"
                      />
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}services/${point.mainTwoPointsImage}`}
                        alt={point.title}
                        width={70}
                        height={70}
                        className="lg:hidden border"
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3>{point.title}</h3>
                      <p className="hyphens-auto text-base sm:hyphens-none sm:text-lg">
                        {point.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
          <div>
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}services/${serviceImage}`}
              alt={title}
              width={1300}
              height={400}
            />
          </div>
          <div className="py-3 text-justify hyphens-auto text-base sm:hyphens-none sm:text-left sm:text-lg">
            {parse(decription_II)}
          </div>
          <h3 className="text-[1.688rem] md:text-4xl py-2">
            {serviceHeadingII}
          </h3>
          <div className="pb-3 text-justify hyphens-auto text-base sm:hyphens-none sm:text-left sm:text-lg">
            {parse(serviceDescriptionIII)}
          </div>
        </div>

        <aside className="hidden xl:block w-1/4 relative">
          <div className="sticky top-28 space-y-5">
            <ServicePageMenu data={menuData} />
            <GetInTouchForm />
          </div>
        </aside>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="py-2">
        {fourPoints && (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {fourPoints.map((point: any, index: number) => {
              return (
                <li key={point}>
                  <div className="flex gap-2 ">
                    <Icons.PinkArrowMarker className="mt-1" />
                    <p className="text-justify hyphens-auto text-base sm:hyphens-none sm:text-left sm:text-lg">
                      {point}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </MaxWidthWrapper>
      <MaxWidthWrapper className="xl:hidden mt-6">
        <GetInTouchForm />
      </MaxWidthWrapper>
    </section>
  );
};

interface OurProcessProps {
  ourProcessSubHeading: string;
  ourProcessImage1: string;
  ourProcessImage2: string;
}

const OurProcess: React.FC<OurProcessProps> = ({
  ourProcessSubHeading,
  ourProcessImage1,
  ourProcessImage2,
}) => {
  return (
    <section className="py-6 lg:py-12">
      <MaxWidthWrapper>
        <div className="text-center flex flex-col items-center justify-center">
          <h5 className="inline font-nunito text-[#515151] relative px-4 text-lg">
            <div className="absolute top-1/2 left-full transform -translate-y-1/2 bg-[#A7A9AC] h-px w-16"></div>
            <div className="absolute top-1/2 right-full transform -translate-y-1/2 bg-[#A7A9AC] h-px w-16"></div>
            How We Work
          </h5>
          <h2 className="text-[1.688rem] md:text-4xl py-2">Our Process</h2>
          <p className="py-2 max-w-[900px] text-base sm:text-lg">
            {ourProcessSubHeading}
          </p>
        </div>
        <div>
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}services/${ourProcessImage2}`}
                srcSet={`${process.env.NEXT_PUBLIC_IMAGE_URL}services/${ourProcessImage2}`}
                alt="Image one"
                className="bg-white"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}services/${ourProcessImage1}`}
                srcSet={`${process.env.NEXT_PUBLIC_IMAGE_URL}services/${ourProcessImage1}`}
                alt="Image two"
                className="bg-white"
                style={{ objectFit: "contain" }}
              />
            }
            className="py-8 my-6"
          />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

const ServiceBuild = ({ data }: { data: any }) => {
  return (
    <>
      {data.map((section: any, index: number) => {
        const value = section.editorValue;

        const ChangedEditorValue = value
          ? value
              .replace(
                /<ul>/g,
                '<ul class="text-left grid grid-cols-1 sm:grid-cols-2 py-2">'
              )
              .replace(
                /<li>/g,
                '<li class="custom-marker flex custom-marker py-1" >'
              )
              .replace(
                /<li dir="ltr">/g,
                '<li class="custom-marker flex custom-marker py-1" >'
              )
          : "";
        return (
          <section
            className={cn(
              `flex flex-col lg:flex-row lg:odd:flex-row-reverse `,
              index === data.length - 1 ? "pb-6 lg:pb-12" : ""
            )}
            key={index}
          >
            <div
              className={cn(
                "w-full lg:w-1/2",
                index % 2 === 0 ? "" : "grid justify-items-end"
              )}
            >
              <div
                className={cn(
                  "lg:max-w-[720px] space-y-4",
                  index % 2 === 0
                    ? "p-4 md:p-6 lg:p-10 "
                    : "p-4 md:p-6 lg:p-10 lg:pl-6"
                )}
              >
                {section.editorValue ? (
                  <div className="">
                    <h2 className={cn("text-[1.688rem] md:text-4xl pb-4 ")}>
                      {section.heading}
                    </h2>
                    <div
                      className="text-base sm:text-lg text-justify hyphens-auto lg:hyphens-none lg:text-left"
                      dangerouslySetInnerHTML={{ __html: ChangedEditorValue }}
                    />
                    <Button
                      title="Let's Talk"
                      className="bg-white text-black mt-5"
                      svgClassName="bg-[#F89520] right-2.5 group-hover/btn:right-[101px]"
                      type="button"
                      navigateTo="/contact"
                    />
                  </div>
                ) : (
                  <div className="">
                    <h2 className="text-[1.688rem] md:text-4xl pb-4  ">
                      {section.heading}
                    </h2>
                    <Accordion type="single" collapsible>
                      {section.accordion.map(
                        (accordion: any, index: number) => {
                          return (
                            <AccordionItem
                              key={index}
                              value={accordion.title}
                              className="border-none data-[state=open]:bg-[#FFFAFD] px-2"
                            >
                              <AccordionTrigger className="flex ">
                                <div className="flex items-center gap-3">
                                  <div className="h-3 w-3 bg-[#BC1D8D] " />
                                  {accordion.title}
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="px-6 text-base sm:text-lg">
                                {parse(accordion.content)}
                              </AccordionContent>
                            </AccordionItem>
                          );
                        }
                      )}
                    </Accordion>
                    <Button
                      title="Let's Talk"
                      className="bg-white text-black mt-5"
                      svgClassName="bg-[#F89520] right-2.5 group-hover/btn:right-[101px]"
                      type="button"
                      navigateTo="/contact"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="w-full lg:w-1/2 cover">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}services/${section.combinedSectionImage}`}
                alt="hero image"
                width={1000}
                height={400}
                placeholder="blur"
                blurDataURL="/banner1.webp"
                className="object-cover w-full h-full"
              />
            </div>
          </section>
        );
      })}
    </>
  );
};

interface ServiceParagraphProps {
  title: string;
  description: string;
}

const ServiceParagraph: React.FC<ServiceParagraphProps> = ({
  title,
  description,
}) => {
  const modifiedText = description
    .replace(
      /<ul>/g,
      '<ul class="text-left grid grid-cols-1 sm:grid-cols-2 gap-2 py-2">'
    )
    .replace(/<li>/g, '<li class="custom-marker flex" >')
    .replace(/<li dir="ltr">/g, '<li class="custom-marker flex " >')
    .replace(
      /<li dir="ltr" aria-level="1">/g,
      '<li class="custom-marker flex r" >'
    );
  function parseHTML() {
    return { __html: modifiedText };
  }

  return (
    <section className="pb-6 lg:pb-12">
      <MaxWidthWrapper>
        <h2 className="text-[1.688rem] md:text-4xl pb-4">{title}</h2>
        <div
          className="text-justify lg:text-left hyphens-auto sm:hyphens-none"
          dangerouslySetInnerHTML={parseHTML()}
        />
      </MaxWidthWrapper>
    </section>
  );
};
interface PinkSectionProps {
  heading: string;
  text: string;
  image: string;
  hookline: string;
  points: lastPoints[];
}
interface lastPoints {
  LastSectionPointsImage: string;
  title: string;
}

const PinkSection: React.FC<PinkSectionProps> = ({
  heading,
  text,
  image,
  hookline,
  points,
}) => {
  return (
    <section className="pt-10 pb-14 lg:pt-20 md:pb-28 bg-[#bc1d8d0a]">
      <MaxWidthWrapper className="flex flex-col-reverse gap-10 lg:flex-row ">
        <div className="w-full lg:w-full xl:w-1/2">
          <h2 className="text-[1.688rem] md:text-4xl pb-1">{heading}</h2>
          <div className="py-2 text-justify hyphens-auto sm:text-left sm:hyphens-none">
            {parse(text)}
          </div>
          {points && (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 py-2">
              {points.map((point: any, index: number) => {
                return (
                  <li key={point.title}>
                    <div className="flex gap-2 items-center border p-5">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}services/${point.LastSectionPointsImage}`}
                        alt={point.title}
                        width={50}
                        height={50}
                        className="border"
                      />
                      <p className="font-semibold">{point.title}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
          <p className="py-2 text-justify hyphens-auto sm:text-left sm:hyphens-none">
            {hookline}
          </p>
        </div>
        <div className="w-full lg:w-1/2 lg:hidden xl:flex flex items-center justify-center cover relative">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}services/${image}`}
            alt={heading}
            width={800}
            height={400}
            style={{ objectFit: "cover" }}
          />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

const Consultation = () => {
  return (
    <section className="mx-3">
      <MaxWidthWrapper className="my-6 sm:my-0 sm:-mt-10 md:-mt-16 flex flex-col sm:flex-row items-center justify-between md:px-10 py-4 sm:py-6 max-w-5xl rounded-xl bg-[#fb9100] text-white">
        <div className="flex flex-col sm:flex-row text-center sm:text-left gap-2 sm:gap-5 items-center p-3 sm:p-0">
          <div className="border p-2">
            <Icons.Phone className="w-10 h-10 md:h-14 md:w-14" />
          </div>
          <div>
            <p className="text-lg md:text-xl">Get A Free Consultation</p>
            <p className="text-xl md:text-2xl text-semibold">
              <Link href="/">+91-8907200008</Link>
            </p>
          </div>
        </div>
        <Separator
          orientation="vertical"
          className="h-20 w-0.5 bg-white hidden sm:block"
        />
        <Separator className="h-0.5 w-full bg-white sm:hidden" />
        <div className="flex flex-col sm:flex-row text-center sm:text-left gap-2 sm:gap-5 items-center p-3 sm:p-0">
          <div className="border p-2">
            <Icons.Mail className="w-10 h-10 md:h-14 md:w-14" />
          </div>
          <div>
            <p className="text-lg md:text-xl">Mail Us</p>
            <p className="text-xl md:text-2xl text-semibold">
              <Link href="/">info@adaired.com</Link>
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
