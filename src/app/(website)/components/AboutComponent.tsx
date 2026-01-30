"use client";
import { AboutSectionData } from "@/src/@core/data/website/Homepage";
// import React from "react";
import MaxWidthWrapper from "../../../components/layout/MaxWidthWrapper";
import Heading from "../../../components/common/Heading";
import Image from "next/image";
import img from "../../../../public/assets/images/home/aboutus.png";
import img_700 from "../../../../public/assets/710_480.png";
import about_graph from "../../../../public/assets/images/home/about_graph.png";
import Mask from "../../../../public/assets/images/home/Mask group.png";
import check from "../../../../public/assets/icons/blue_check.png";
import { useInViewOnce } from "@/src/@core/hooks/useInViewOnce";
import { aboutData } from "../aboutData/aboutData";
import SaveAndCancel from "../../../components/common/SaveAndCancel";


const AboutComponent = () => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);
  const { subTitle, title, points, description, cursive } = AboutSectionData;
  const d = aboutData;

  return (
    <>

      {/* SECTION 1 */}
      <section>
        <MaxWidthWrapper className="pb-[8rem] pt-[3rem] lg:py-[4rem] xl:py-[6rem]">
          <Heading
            className="py-[2rem]"
            isBgWhite={true}
            isVarticle
            subTitle={d.heading.subTitle}
            breakIndex={d.heading.breakIndex}
            title={d.heading.title}
          />
          <div
            ref={ref}
            className="flex flex-col-reverse gap-[3rem] lg:flex-row lg:justify-between lg:gap-[3rem] 1400:gap-[1rem] 1680:gap-[2rem] 3xl:gap-[5.25rem]"
          >
            {/* Image Section */}
            <div className="relative mx-auto flex-1">
              {/* CENTER IMAGE */}
              <div
                // ref={imageRef}
                // className={`mt-0 flex items-center justify-center p-3 md:mt-0 lg:mt-[2rem] xl:mt-0 1400:mt-[2rem] 1440:mt-[2rem] 1600:mt-[2rem] 1710:mt-0 ${'imageClass'}`}
                className={`mt-0 flex items-center justify-center p-3 md:mt-0 lg:mt-[2rem] xl:mt-0 1400:mt-[2rem] 1440:mt-[2rem] 1600:mt-[2rem] 1710:mt-0 transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"} `}
              >
                <Image
                  src={img}
                  alt="About Image"
                  className="block h-[14rem] w-[14rem] rounded-lg md:h-[34.625rem] md:w-[36.313rem] lg:h-[20.625rem] lg:w-[20.313rem] xl:h-[34.625rem] xl:w-[36.313rem] 1360:mt-[2rem] 1360:h-[20rem] 1360:w-[22rem] 1400:mt-[2rem] 1400:hidden 1400:h-[23rem] 1400:w-[23rem] 1470:hidden 1470:w-[25rem] 1600:mt-[2rem] 1600:hidden 1600:h-[37rem] 1600:w-[30rem] 1680:mt-[2rem] 1680:hidden 1680:h-[37rem] 1680:w-[31.5rem] 1710:block 1710:w-[32rem] 3xl:h-[38rem] 3xl:w-[36.313rem]"
                />
                <Image
                  src={img_700}
                  alt="About Image"
                  className="hidden rounded-xl 1400:block 1400:h-[710px] 1400:w-[480px] 1440:h-[640px] 1440:w-[500px] 1470:h-[575px] 1470:w-[445px] 1600:block 1600:h-[600px] 1600:w-[490px] 1710:hidden"
                />
              </div>
              <div className="absolute left-[-1rem] top-[2rem] flex animate-zoomPulse gap-2 rounded-xl border-[1px] border-[#000000]/10 bg-[#FFFFFF] px-2 py-1 lg:left-0 lg:top-14 lg:px-4 lg:py-2">
                <Image
                  src={check}
                  width={18}
                  height={18}
                  alt="check "
                  className="my-auto"
                />
                <p className="my-auto font-outfit text-[12px] text-[#000000] lg:text-[15.62px]">
                  100% Business Growth
                </p>
              </div>
              {/* MASK – TOP RIGHT */}
              <Image
                src={Mask}
                alt="Mask Image"
                width={246}
                height={136}
                className="absolute right-[-3rem] top-[-2rem] -z-10 lg:right-6 lg:top-0"
              />

              {/* MASK – BOTTOM LEFT */}
              <Image
                src={Mask}
                alt="Mask Image"
                width={246}
                height={136}
                // className="absolute bottom-[-1.8rem] left-[-3rem] -z-10 lg:bottom-[22.75rem] lg:left-5 xl:bottom-[5.5rem] 1360:bottom-[22rem] 1400:bottom-[0rem] 1470:bottom-[1rem] 1600:bottom-[8.5rem] 1680:bottom-[6.5rem] 3xl:bottom-[4rem]"
                className="absolute bottom-[-1.8rem] left-[-3rem] -z-10 lg:bottom-[22.75rem] lg:left-5 xl:bottom-[5.5rem] 1360:bottom-[22rem] 1400:bottom-[0rem] 1470:bottom-[1rem] 1600:bottom-[rem] 1680:bottom-[rem] 3xl:bottom-[-2.3rem]"
              />

              {/* ABOUT GRAPH – BOTTOM RIGHT */}
              <div
                className={`transition-all delay-300 duration-700 ${isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"} `}
              >
                <Image
                  src={about_graph}
                  alt="Graph Image"
                  width={276}
                  height={215}
                  // ref={zoomRef}
                  className={`absolute bottom-[-2.25rem] right-[-2rem] h-[7rem] w-[8rem] md:bottom-[-3.25rem] md:right-[-3rem] md:h-[14.063rem] md:w-[17.25rem] lg:bottom-[-3rem] lg:right-0 lg:h-[180px] lg:w-[226px] xl:h-[215px] xl:w-[276px]`}
                />
              </div>
            </div>

            {/* Content Section */}
            <div
              className={`flex-1 p-2 text-left transition-all delay-200 duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"} `}
            >
              {/* Points Section */}
              {/* <Heading
              subTitle=""
              title={title}
              span=""
              description={description}
              isPara2={true}
              description2={` We've helped brands transform their digital presences, build loyal
              audiences, and exceed their growth goals. When you work with us,
              you are investing in outcomes rather than simply marketing.`}
            /> */}


              <div className="gap-5 space-y-8 py-6 sm:flex-row">
                {d.section1.description.map((des, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center gap-4 transition-all duration-700 lg:flex-row lg:items-start ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} `}
                    style={{ transitionDelay: `${index * 120}ms` }}
                  >
                    <div>
                      <p>
                        {des.des1}
                      </p>
                      <p>
                        {des.des2}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="gap-5 space-y-8 py-6 sm:flex-row">
                {points.map((point, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center gap-4 transition-all duration-700 lg:flex-row lg:items-start ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} `}
                    style={{ transitionDelay: `${index * 120}ms` }}
                  >
                    {/* ICON */}
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#FEE9CC99]">
                      <Image
                        src={point.icon}
                        alt={point.title}
                        width={35}
                        height={35}
                        className="object-contain"
                      />
                    </div>

                    {/* CONTENT */}
                    <div>
                      <h3 className="text-center text-xs font-bold lg:text-left">
                        {point.title}
                      </h3>
                      <p className="mt-1 text-center font-montserrat lg:text-left">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>


      {/* SECTION 2 */}
      {/* <section className="py-[4rem] bg-[#FAFDFF] mt-20">
        <div className='flex justify-center '>
          <MaxWidthWrapper>
            <div className="flex flex-wrap items-center gap-6 sm:gap-16 md:gap-[80px]">
              <p className="uppercase font-medium text-[24px] text-left whitespace-pre-line">
                {d.section2.certificatesTitle}
              </p>

              <div className="h-[130px] w-[1px] bg-[#D7EBFF]"></div>

              {d.section2.images.map((img: any) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt="Certificate"
                  style={{ width: `${img.w}px`, height: `${img.h}px` }}
                />
              ))}
            </div>
          </MaxWidthWrapper>
        </div>
      </section> */}

      <section className="py-[4rem] bg-[#FAFDFF] mt-20">
        <div className="flex justify-center">
          <MaxWidthWrapper>

            {/* viewport */}
            <div className="w-full overflow-hidden">
              <div className="flex items-center gap-[80px] w-max animate-marquee">

                {/* left text */}
                <p className="uppercase font-medium text-[24px] whitespace-pre-line flex-shrink-0">
                  {d.section2.certificatesTitle}
                </p>

                {/* divider */}
                <div className="h-[130px] w-[1px] bg-[#D7EBFF] flex-shrink-0"></div>

                {/* images (duplicated for smooth loop) */}
                {[...d.section2.images, ...d.section2.images, ...d.section2.images].map((img: any, idx: number) => (
                  <img
                    key={`${img.src}-${idx}`}
                    src={img.src}
                    alt="Certificate"
                    style={{ width: `${img.w}px`, height: `${img.h}px` }}
                    className="flex-shrink-0 object-contain"
                  />
                ))}

              </div>
            </div>

          </MaxWidthWrapper>
        </div>
      </section>


      {/* SECTION 3 */}
      <section className=" py-[4rem]">
        <MaxWidthWrapper>
          <Heading
            className="py-[2rem]"
            isBgWhite={true}
            isVarticle
            subTitle={d.section3.heading.subTitle}
            breakIndex={d.section3.heading.breakIndex}
            title={d.section3.heading.title}
          />

          <div className=" py-[2rem] px-[6rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10">
              {d.section3.cards.map((card: any) => (
                <div key={card.title} className="w-full border border-gray-200 rounded-[20px] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                  <div className="flex items-start justify-between gap-3 p-8">
                    <h3 className="p-2 whitespace-pre-line">
                      {card.title}
                    </h3>
                    <div className="p-4 rounded-full bg-[#FFF9F3] flex-shrink-0">
                      <img src={card.icon} alt="Icon" className="w-10 h-10" />
                    </div>
                  </div>
                  <p className="text-gray-700 pb-[3rem] px-10 text-justify">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </MaxWidthWrapper>
      </section>


      {/* SECTION 4 */}
      <section className="relative w-[1920px] h-[404px] py-[6rem] bg-black/10">
        <Image src={d.section4.background} alt="Background" fill className="object-cover -z-10 w-full" />
        <MaxWidthWrapper>
          <div className="relative z-10 w-full h-full flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
              <div className="group">
                <Heading
                  subTitle={d.section4.heading.subTitle}
                  breakIndex={d.section4.heading.breakIndex}
                  title={d.section4.heading.title}
                  className="text-white [&_h1]:text-white [&_h2]:text-white [&_span]:text-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[minmax(250px,1fr)] xl:grid-cols-3 gap-6">
                {d.section4.stats.map((s: any) => (
                  <div key={s.label} className="w-full h-[208px] rounded-[20px] bg-[#050815B2] flex flex-col items-center justify-center text-center relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-4">
                      <img src={s.icon} alt="icon" className="w-10 h-10" />
                    </div>
                    <h3 className="text-white  font-bold">{s.value}</h3>
                    <p className="text-white mt-2">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>


      {/* SECTION 5 */}
      <section className="px-4 md:px-8 lg:px-28 py-[6rem]">
        <MaxWidthWrapper>
          <div className="max-w-[98%] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-20 w-full">
              <div className="relative w-full m-auto max-w-[700px] aspect-[4/3] md:aspect-[16/11] lg:aspect-[16/10]">
                <img src={d.section5.images[0]} alt="About" className="absolute top-0 left-8 w-[618px] h-[421px] rounded-lg z-5" />
                <img src={d.section5.images[1]} alt="About" className="absolute top-3 left-3 md:top-4 md:left-4 w-[622px] h-[426px] rounded-lg z-20" />
                <img src={d.section5.images[2]} alt="About" className="absolute top-6  md:top-8 md:left-0 w-[618px] h-[421px] rounded-lg z-10" />
                <Image
                  src={img}
                  alt="Success story Image"
                  className="absolute top-3 left-3 md:top-4 md:left-4 w-[622px] h-[426px] rounded-lg z-20"
                />
              </div>

              <div className="w-full h-full mt-10 md:mt-0 p-5 text-justify">
                <Heading
                  isBgWhite={true}
                  isVarticle={false}
                  subTitle={d.section5.heading.subTitle}
                  breakIndex={d.section5.heading.breakIndex}
                  title={d.section5.heading.title}
                />

                <p>{d.section5.text}</p>

                <p className="mt-6 md:mt-10 text-base max-w-3xl">
                  <span className="text-blue-700">{d.section1.quote.blue}</span>
                  {d.section1.quote.normal}
                </p>

              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>


      {/* SECTION 6 */}
      <section className="sm:py-[1rem] md:py-[4rem]">
        <MaxWidthWrapper>
          <div className="relative w-full  mx-auto border bg-[#030A2AB5] text-white rounded-[28px] overflow-hidden">
            <Image src={d.section6.background} alt="Background" fill className="object-cover -z-10 rounded-[28px]" />

            <div className="grid grid-cols-1 md:grid-cols-[1fr_100px_1fr] gap-6 p-6 md:p-20 min-h-[1157px] md:min-h-[1157px] mx-auto">
              <div className="grid grid-rows-5">
                <div className="w-full text-[48px] flex items-center justify-end">2020</div>

                <div className="group w-full bg-[#12385DA8] hover:bg-white p-10 rounded-xl text-justify">
                  <h3 className="text-white group-hover:text-[#F28F17]">{d.section6.timeline[0].title}</h3>
                  <p className="text-white group-hover:text-black mt-2">{d.section6.timeline[0].desc}</p>
                </div>

                <div className="w-full text-[48px] flex items-center justify-end">2022</div>

                <div className="group w-full bg-[#12385DA8] hover:bg-white p-10 rounded-xl text-justify">
                  <h3 className="text-white group-hover:text-[#F28F17]">{d.section6.timeline[2].title}</h3>
                  <p className="text-white group-hover:text-black mt-2">{d.section6.timeline[2].desc}</p>
                </div>
                <div className="w-full text-[48px] flex items-center justify-end">2024</div>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative w-[1px] h-[79%] bg-white mb-2">
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F28F17] w-[26px] h-[26px]"></div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-[25%] rounded-full bg-white w-[16px] h-[16px]"></div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-[50%] rounded-full bg-white w-[16px] h-[16px]"></div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-[75%] rounded-full bg-white w-[16px] h-[16px]"></div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-[100%] rounded-full bg-white w-[16px] h-[16px]"></div>
                </div>
              </div>

              <div className="grid grid-rows-5">
                <div className="group w-full bg-[#12385DA8] hover:bg-white p-10 rounded-xl text-justify">
                  <h3 className='text-white group-hover:text-[#F28F17]'>{d.section6.timeline[1].title}</h3>
                  <p className="text-white group-hover:text-black mt-2">{d.section6.timeline[1].desc}</p>
                </div>

                <div className="w-full text-[48px] flex items-center justify-start">2021</div>
                <div className="group w-full bg-[#12385DA8] hover:bg-white p-10 rounded-xl text-justify">
                  <h3 className="text-white group-hover:text-[#F28F17]">{d.section6.timeline[3].title}</h3>
                  <p className="text-white group-hover:text-black mt-2">{d.section6.timeline[3].desc}</p>
                </div>

                <div className="w-full text-[48px] flex items-center justify-start">2023</div>
                <div className="group w-full bg-[#12385DA8] hover:bg-white p-10 rounded-xl text-justify">
                  <h3 className="text-white group-hover:text-[#F28F17]">{d.section6.timeline[4].title}</h3>
                  <p className="text-white group-hover:text-black mt-2">{d.section6.timeline[4].desc}</p>
                </div>
              </div>

            </div>
          </div>
        </MaxWidthWrapper>
      </section>


      {/* SECTION 7 */}
      {/* <section className="mt-[2rem] py-[4rem] bg-[#F9FCFF]">
        <MaxWidthWrapper>
          <Heading
            className="py-[2rem] [&_h2]:text-3xl"
            isBgWhite={true}
            isInCenter={true}
            subTitle={d.section7.heading.subTitle}
            breakIndex={d.section7.heading.breakIndex}
            title={d.section7.heading.title}
            description={d.section7.heading.description}
          />

          <div className=" py-[2rem] px-[6rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10">
              {d.section7.cards.map((card: any) => (
                <div key={card.title} className="w-full border border-gray-200 rounded-[20px] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                  <img src={card.img} alt="Icon" className="w-50 h-50 rounded-[20px]" />
                  <div className="bg-white rounded-[20px] p-8">
                    <p className="text-black pb-[3rem]text-justify">
                      {card.desc}
                    </p>
                    <div className="w-full h-[1px] bg-gray-100 mb-6 mt-2"></div>
                    <div className="flex justify-between items-center">
                      <SaveAndCancel
                        name="Read more"
                        isIcon
                      />
                      <p className="text-gray-300">{card.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center items-center">
              <SaveAndCancel
                name="View All Blogs"
                isIcon
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </section> */}

    </>
  );
};

export default AboutComponent;