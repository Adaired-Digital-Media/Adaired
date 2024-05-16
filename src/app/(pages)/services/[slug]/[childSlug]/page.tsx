import BlogCards from "@/components/BlogCard/BlogCards";
import { Icons } from "@/components/Icons/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import PageBanner from "@/components/PageBanner/PageBanner";
import parse from "html-react-parser";
import Image from "next/image";
import React from "react";
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

export async function generateStaticParams() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/services`
  ).then((res) => res.json());

  const services = res.data;

  // Extract and return the slugs from the childrens array of each service
  return services.flatMap((service: any) => {
    return service.childrens.map((child: string) => ({
      slug: service.slug.toString(), // Assuming each service has a slug property
      childSlug: child.toString(),
    }));
  });
}

async function getServiceData({
  params,
}: {
  params: { slug: string; childSlug?: string };
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/services/${params.slug}/${params.childSlug}`
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
    robots: {
      index: true,
      follow: true,
    },
  };
}

interface ChildServiceProps {
  params: {
    slug: string;
  };
}

const ChildService: React.FC<ChildServiceProps> = async ({ params }) => {
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
      <ServiceBuild data={data.combinedSection} />
      <BlogCards />
    </>
  );
};

export default ChildService;

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

const ServiceBuild = ({ data }: { data: any }) => {
  return (
    // <>
    //   {data.map(
    //     (
    //       section: {
    //         combinedSectionImage: string;
    //         editorValue: string;
    //         accordion: any;
    //         heading: string;
    //       },
    //       index: number
    //     ) => {
    //       const value = section.editorValue;
    //       const ChangedEditorValue = value
    //         ? value
    //             .replace(/<ul>/g, '<ul class="grid grid-cols-2 py-2">')
    //             .replace(
    //               /<li>/g,
    //               '<li class="custom-marker flex items-center custom-marker py-1" >'
    //             )
    //             .replace(
    //               /<li dir="ltr">/g,
    //               '<li class="custom-marker flex items-center custom-marker py-1" >'
    //             )
    //         : "";

    //       return (
    //         <section
    //           key={section.combinedSectionImage}
    //           className={cn(
    //             "flex relative min-h-96",
    //             index % 2 === 0 ? "flex-row-reverse" : "flex-row",
    //             index === data.length - 1 ? "pb-6 lg:pb-12" : ""
    //           )}
    //         >
    //           <div className="w-1/2"></div>
    //           <div className="w-1/2 object-cover">
    //             <Image
    //               src={`${process.env.NEXT_PUBLIC_IMAGE_URL}services/${section.combinedSectionImage}`}
    //               alt="Image"
    //               height={300}
    //               width={1000}
    //             />
    //           </div>
    //           <MaxWidthWrapper
    //             className={cn(
    //               "absolute left-1/2 -translate-x-1/2 flex",
    //               index % 2 === 0 ? "flex-row" : "flex-row-reverse"
    //             )}
    //           >
    //             <div className="w-1/2"></div>
    //             <div className="w-1/2 ">
    //               {section.editorValue ? (
    //                 <div
    //                   className={cn(
    //                     index % 2 === 0 ? "p-10 pr-0" : "p-10 pl-0"
    //                   )}
    //                 >
    //                   <h2 className="text-[1.688rem] md:text-4xl pb-4">
    //                     {section.heading}
    //                   </h2>
    //                   <div
    //                     dangerouslySetInnerHTML={{ __html: ChangedEditorValue }}
    //                   />
    //                   <Button
    //                     title="View More"
    //                     className="bg-white text-black mt-5"
    //                     svgClassName="bg-[#F89520] right-2.5 group-hover/btn:right-28"
    //                     type="button"
    //                     navigateTo="/about"
    //                   />
    //                 </div>
    //               ) : (
    //                 <div>
    //                   <h2
    //                     className={cn(
    //                       "text-[1.688rem] md:text-4xl ",
    //                       index % 2 === 0 ? "p-10 pr-0 pb-2" : "p-10 pb-2 pl-0"
    //                     )}
    //                   >
    //                     {section.heading}
    //                   </h2>
    //                   <Accordion type="single" collapsible>
    //                     {section.accordion.map(
    //                       (accordion: any, index: number) => {
    //                         return (
    //                           <AccordionItem
    //                             key={index}
    //                             value={accordion.title}
    //                             className="border-none px-10 data-[state=open]:bg-[#FFFAFD]"
    //                           >
    //                             <AccordionTrigger className="flex ">
    //                               <div className="flex items-center gap-3">
    //                                 <div className="h-3 w-3 bg-[#BC1D8D]" />
    //                                 {accordion.title}
    //                               </div>
    //                             </AccordionTrigger>
    //                             <AccordionContent>
    //                               {parse(accordion.content)}
    //                             </AccordionContent>
    //                           </AccordionItem>
    //                         );
    //                       }
    //                     )}
    //                   </Accordion>
    //                   <div className="px-10">
    //                     <Button
    //                       title="View More"
    //                       className="bg-white text-black mt-5"
    //                       svgClassName="bg-[#F89520] right-2.5 group-hover/btn:right-28"
    //                       type="button"
    //                       navigateTo="/about"
    //                     />
    //                   </div>
    //                 </div>
    //               )}
    //             </div>
    //           </MaxWidthWrapper>
    //         </section>
    //       );
    //     }
    //   )}
    // </>
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
            key={section.combinedSectionImage}
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
