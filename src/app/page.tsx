import BannerSlider from "@/components/BannerSlider/BannerSlider";
import Button from "@/components/Button/Button";
import { Icons } from "@/components/Icons/Icons";

import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import Image from "next/image";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import dynamic from "next/dynamic";
import BlogCards from "@/components/BlogCard/BlogCards";
import Link from "next/link";
import HomePageForm from "@/components/Forms/HomePageForm";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import type { Metadata } from "next";

// Static Images
import TeamsBig from "../../public/TeamsBig.webp";

export const metadata: Metadata = {
  robots:{
      index:true,
      follow:true
  },
  alternates: {
    canonical: "https://www.adaired.com",
  },
  
};

// Dynamic Imports
const CaseStudySlider = dynamic(
  () => import("@/components/CaseStudySlider/CaseStudySlider")
);
const TestimonialSlider = dynamic(
  () => import("@/components/TestimonialSlider/TestimonialSlider")
);

export default function Home() {
  return (
    <main>
      <BannerSlider />
      <ManageGrid />
      <AboutSection />
      <LogoSlider />
      <Services />
      <CaseStudySlider />
      <Growth />
      <Awards />
      <TestimonialSlider />
      <BlogCards />
      <ContactUs />
    </main>
  );
}

const ManageGrid = () => {
  return (
    <>
      <section className="pt-6 flex items-center justify-between transition-all">
        <div className="hidden md:block">
          <Image
            height={300}
            width={150}
            src="/splashLeft-.webp"
            alt="Splash Left Image"
          />
        </div>
        <MaxWidthWrapper>
          <div className="text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl ">
              {" "}
              Digital Marketing Services For The Most Ambitious Enterprises
            </h2>
            <div className="relative py-6">
              <div className="absolute top-1/2 left-[-100px] transform -translate-y-1/2 bg-[#A7A9AC] h-px w-20"></div>
              <div className="absolute top-1/2 right-[-100px] transform -translate-y-1/2 bg-[#A7A9AC] h-px w-20"></div>
              <Icons.NimbusMarketing className="text-white h-14 w-14 bg-[#8EC640] p-2 rounded-full" />
            </div>

            <p className="text-xl md:text-2xl max-w-[900px]">
              We work with businesses that want to engage better, dominate
              SERPs, and achieve more than just website traffic.
            </p>
          </div>
        </MaxWidthWrapper>
        <div className=" hidden md:block">
          <Image
            height={300}
            width={150}
            src="/splashRight-.webp"
            alt="Splash Left Image"
          />
        </div>
      </section>
    </>
  );
};

const AboutSection = () => {
  return (
    <>
      <section className="py-6 md:py-12">
        <MaxWidthWrapper className="flex gap-10 flex-col lg:flex-row">
          <div className="flex-1 mx-auto ">
            <div className="max-w-lg lg:max-w-full ">
              <Image
                src="/about_img.webp"
                alt="About Image"
                height={500}
                width={800}
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="flex-1 p-2 text-center md:text-left">
            <h3 className=" sm:text-xl inline font-nunito text-[#515151] relative md:pl-20 text-lg">
              <div className="absolute top-1/2 -left-full md:left-0 transform -translate-y-1/2 bg-[#A7A9AC] h-px w-16"></div>
              <div className="md:hidden absolute top-1/2 -right-full transform -translate-y-1/2 bg-[#A7A9AC] h-px w-16"></div>
              About Us
            </h3>

            <h2 className="text-[1.688rem] md:text-4xl">
              A Company Obsessed With ROI
            </h2>
            <p className="py-3 text-base sm:text-lg text-justify hyphens-auto">
              Transform your marketing outcomes and experience exponential ROI
              growth by partnering with Adaired! We offer smart, targeted,
              integrated campaigns that drive traffic, build engagement,
              generate conversions, and foster long-term relationships. Our
              online marketing services will turn your website into a
              lead-generating machine, and our ongoing efforts will bring in
              more clients than you can handle.
            </p>
            <div className="flex gap-5 py-6 flex-col sm:flex-row">
              <div className="flex flex-col items-center border p-4 md:p-0 md:border-none md:items-start ">
                <Image
                  src="/homePage_about1.svg"
                  alt="Information Icon"
                  height={60}
                  width={60}
                  className="border rounded-lg p-2 mb-2"
                />
                <h3 className="relative py-2 font-nunito font-semibold text-xl">
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 md:translate-x-0  md:left-0 bg-[#c0c2c5] h-0.5 w-14 rounded-lg"></div>
                  Tailored Approach
                </h3>
                <p className="text-base sm:text-lg text-justify hyphens-auto">
                  Our obsession with ROI means crafting personalized strategies,
                  from meticulous campaign design to continuous optimization for
                  maximum impact and growth.
                </p>
              </div>
              <div className="flex flex-col items-center border p-4 md:p-0 md:border-none md:items-start ">
                <Image
                  src="/homePage_about2.svg"
                  alt="Information Icon"
                  height={60}
                  width={60}
                  className="border rounded-lg p-2 mb-2 "
                />
                <h3 className="relative py-2 font-nunito font-semibold text-xl">
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-0 bg-[#c0c2c5] h-0.5 w-14 rounded-lg"></div>
                  Tangible Results
                </h3>
                <p className="text-base sm:text-lg text-justify hyphens-auto">
                  Experience transparency in your marketing endeavors with
                  Adaired. As your brand gains momentum, the ROI translates into
                  measurable success for your business.
                </p>
              </div>
            </div>
            <p className="font-baby text-lg sm:text-2xl font-semibold py-2">
              &quot;Your brand is what people say about you when you&apos;re not
              in the room.&quot; -<i className="text-[#92288D]">Jeff Bezos</i>
            </p>
            <Button
              title="View More"
              className="bg-white text-black mt-5"
              svgClassName="bg-[#F89520] right-2.5 group-hover/btn:right-28"
              type="button"
              navigateTo="/about"
            />
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

const LogoSlider = () => {
  const logoImages = [
    {
      img: "/trustedBy1.webp",
    },
    {
      img: "/trustedBy2.webp",
    },
    {
      img: "/trustedBy3.webp",
    },
    {
      img: "/trustedBy4.webp",
    },
    {
      img: "/trustedBy5.webp",
    },
    {
      img: "/trustedBy6.webp",
    },
    {
      img: "/trustedBy7.webp",
    },
    {
      img: "/trustedBy8.webp",
    },
    {
      img: "/trustedBy9.webp",
    },
    {
      img: "/trustedBy10.webp",
    },
    {
      img: "/trustedBy11.webp",
    },
    {
      img: "/trustedBy12.webp",
    },
  ];
  return (
    <>
      <section className="bg-[#f8f8f8] py-6 sm:py-12">
        <MaxWidthWrapper className="flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl py-2">Trusted By:</h2>
          <p className="max-w-[1000px] py-2 mb-4 text-base sm:text-lg">
            The success of our clients is what determines our success. Below are
            a few of our favorite clients who we have worked for; we have
            reserved a spot for you!
          </p>
          <div className="antialiased w-full py-2">
            <InfiniteMovingCards
              items={logoImages}
              direction="left"
              speed="slow"
              itemClassName="border border-[#E5E5E5] bg-white grayscale hover:grayscale-0 px-2 py-2 sm:py-5 sm:px-8"
            />
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

const Services = () => {
  const projects = [
    {
      title: "Website Designing & Development",
      description:
        "Website Design and development services that deliver exquisite design, a user-friendly interface, and robust functionality for lasting impressions on the audience.",
      link: "/services/web-designing-and-development",
      list: [
        "PHP Development",
        "Website management",
        "Website CMS migrations",
        "WordPress design & development",
        "Landing page design & development",
        "E-commerce website design & development",
      ],
      mainSvg: "/web-main.svg",
      hoverSvg: "/web-hover.svg",
      accentColor: "#973492",
    },
    {
      title: "Search Engine Optimization (SEO)",
      description:
        "Launch and maintain the websites on top of search results to enhance your online visibility with tried and tested Search Engine Optimization (SEO) services.",
      link: "/services/search-engine-optimization",
      list: [
        "Meta Tags Optimization",
        "Google tags Setup",
        "Schema Optimization",
        "Website Layout Optimization",
        "Website Broken Link Analysis",
        "Penalty Review & recovery",
      ],
      mainSvg: "/seo-main.svg",
      hoverSvg: "/seo-hover.svg",
      accentColor: "#F89520",
    },
    {
      title: "Paid Media  & Advertising",
      description:
        "Building strategic ad campaigns and carrying data-driven optimizations to drive targeted traffic with our Pay-Per-Click (PPC) solutions.",
      link: "/services/paid-media-and-advertising",
      list: [
        "Social Ads",
        "Google Ads",
        "Conversion Tracking",
        "Google Analytics set up",
        "Overall Performance Analysis",
        "Campaign Management and Optimization",
      ],
      mainSvg: "/ppc-main.svg",
      hoverSvg: "/ppc-hover.svg",
      accentColor: "#EC1F27",
    },
    {
      title: "Compelling Content Marketing",
      description:
        "Engaging and captivating content development that not only resonates with the audience but ranks well across all search engines.  ",
      link: "/services/compelling-content-marketing",
      list: [
        "Infographics",
        "Website Blogs",
        "Press Releases",
        "Website Copy",
        "Guest Posting",
        "Social Media Posting",
      ],
      mainSvg: "/content-marketing-main.svg",
      hoverSvg: "/content-marketing-hover.svg",
      accentColor: "#038EB0",
    },
    {
      title: "Digital Creative & Logo Design",
      description:
        "The creative team illustrates the brand's image and ideas in captivating visuals to communicate with the target audience.",
      link: "/services/digital-creative-and-logo-design",
      list: [
        "Digital Broucher",
        "Email Marketing Graphics",
        "Logos and Branded Elements",
        "Poster, Banner and Signage",
        "Business Card, Letterhead and Envelope",
        "Social media graphics & digital marketing ads",
      ],
      mainSvg: "/logo-mian.svg",
      hoverSvg: "/logo-hover.svg",
      accentColor: "#BC1D8D",
    },
    {
      title: "Strategic Social Media Management",
      description:
        "Enhance the social media presence of brands on diverse social platforms with engaging content to foster meaningful interactions and amplify reach.",
      link: "/services/strategic-social-media-management",
      list: [
        "Profile Optimization",
        "Targeted Page Likes",
        "Hashtag Trend Research",
        "Content Calendar",
        "Monthly Report",
      ],
      mainSvg: "/smm-main.svg",
      hoverSvg: "/smm-hover.svg",
      accentColor: "#8EC640",
    },
  ];

  return (
    <>
      <section className="py-6 lg:py-12">
        <MaxWidthWrapper>
          <div className="text-center flex flex-col items-center justify-center">
            <h3 className="inline font-nunito text-[#515151] relative px-4 text-lg">
              <div className="absolute top-1/2 left-full transform -translate-y-1/2 bg-[#A7A9AC] h-px w-16"></div>
              <div className="absolute top-1/2 right-full transform -translate-y-1/2 bg-[#A7A9AC] h-px w-16"></div>
              Our Services
            </h3>
            <h2 className="text-[1.688rem] md:text-4xl py-2">What We Offer</h2>
            <p className="py-2 max-w-[900px] text-base sm:text-lg">
              Whatever service we provide, we give a thought about every small
              detail. Our main motive is brand growth and this is what leaves a
              mark on every customer.
            </p>
          </div>

          <HoverEffect items={projects} />
        </MaxWidthWrapper>
      </section>
    </>
  );
};

const Growth = () => {
  return (
    <>
      <section className="py-7 sm:py-14 ">
        <MaxWidthWrapper className="flex flex-col lg:flex-row items-center lg:items-start gap-16 xl:gap-36  ">
          <div className="flex-1 relative ml-2 mr-4 lg:mr-0 lg:ml-2 ">
            <div className="max-w-[500px] lg:max-w-full after:absolute after:-top-3 after:-right-3 md:after:-top-6 md:after:-right-6 after:border-2 after:border-[#BC1D8D] after:h-[90%] after:w-[90%] after:-z-10">
              {" "}
              <Image
                src={TeamsBig}
                alt="Growth Image"
                height={800}
                width={800}
                className=""
                placeholder="blur"
              />
            </div>
            <div className="transition-all absolute top-3/4 left-1/2 -translate-x-1/2 xl:translate-x-0 xl:top-auto xl:left-auto xl:bottom-[20%] xl:right-[-20%]">
              <Image
                src="/TeamsSmall.webp"
                alt="Growth Image"
                height={100}
                width={300}
                sizes="(min-width:640px) 50vw, 100vw"
                className=""
              />
            </div>
          </div>
          <div className="flex-1 ">
            <h3 className="inline font-nunito text-[#515151] relative pl-16 text-lg md:pl-20 ">
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#A7A9AC] h-px w-12 md:w-16"></div>
              {/* <div className="lg:hidden absolute top-1/2 -right-2/4 transform -translate-y-1/2 bg-[#A7A9AC] h-px w-16"></div> */}
              Holistic Expertise
            </h3>
            <h2 className="text-[1.688rem] md:text-4xl py-2">
              Digital Marketing Experts Dedicated To Your Growth
            </h2>
            <p className="py-2 text-base sm:text-lg">
              Adaired has helped numerous companies develop their brands with
              its digital marketing services worldwide. We understand the
              importance of leads, sales, and return on investment when it comes
              to digital marketing. Our clients come from all industries of
              every size.
            </p>
            <ul className="text-left grid gap-3 sm:gap-0 sm:grid-cols-2 py-2">
              <li className="flex items-center gap-1 border p-2 sm:border-none">
                <Icons.PinkArrowMarker className="text-[#BC1D8D]" />{" "}
                Comprehensive Services
              </li>
              <li className="flex items-center gap-1 border p-2 sm:border-none">
                <Icons.PinkArrowMarker className="text-[#BC1D8D]" />
                Industry Expertise
              </li>
              <li className="flex items-center gap-1 border p-2 sm:border-none">
                <Icons.PinkArrowMarker className="text-[#BC1D8D]" />
                Client-Centric Approach
              </li>
              <li className="flex items-center gap-1 border p-2 sm:border-none">
                <Icons.PinkArrowMarker className="text-[#BC1D8D]" />
                Tailored Solutions
              </li>
            </ul>
            <p className="py-2 text-base sm:text-lg">
              Our digital marketing agency provides a wide range of services,
              from initial brand development to a globally syndicated
              advertising campaign, all of which are customized to meet the
              unique needs of our clients.
            </p>
            <p className="py-2 px-2 bg-[#FFF9FD] border-l-8 border-[#BC1D8D] text-base sm:text-lg">
              We strive to surpass your expectations, providing unparalleled
              quality in our online marketing services.
            </p>
            <Button
              title="View More"
              className="bg-white text-black mt-5"
              svgClassName="bg-[#F89520] right-2.5 group-hover/btn:right-28"
              type="button"
              navigateTo="/about"
            />
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

const Awards = () => {
  type AwardImages = {
    img: string;
  };
  const data: AwardImages[] = [
    {
      img: "/image1.webp",
    },
    {
      img: "/image2.webp",
    },
    {
      img: "/image3.webp",
    },
    {
      img: "/image4.webp",
    },
    {
      img: "/image5.webp",
    },
    {
      img: "/image6.webp",
    },
    {
      img: "/image7.webp",
    },
    {
      img: "/image8.webp",
    },
  ];
  return (
    <>
      <section className="py-6 sm:py-12">
        <MaxWidthWrapper>
          <div className="antialiased w-full py-2">
            <InfiniteMovingCards
              items={data}
              direction="right"
              speed="slow"
              itemClassName=" w-20 sm:w-32 h-auto md:w-40 px-2 py-2 sm:py-5 sm:px-8"
            />
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

const ContactUs = () => {
  return (
    <>
      <section className="pt-6 sm:pt-12">
        <div className="bg-[#ECECEC] pt-4 lg:pt-0 lg:bg-white">
          <MaxWidthWrapper className="flex">
            <div className="flex-1">
              <h2 className="text-[1.688rem] md:text-4xl py-2">
                Ready To Win More Customers?{" "}
              </h2>
              <p className="py-2 text-base sm:text-lg">
                Connect for more website traffic, qualified leads, and an
                established online brand image.
              </p>
            </div>
            <div className="hidden lg:block flex-1" />
          </MaxWidthWrapper>
        </div>
        <div className="md:pb-10 bg-[#ECECEC] pb-16 ">
          <MaxWidthWrapper className="flex py-6 flex-col gap-10 lg:flex-row">
            <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-1  gap-2 flex-1 items-center">
              <div className=" p-3 sm:p-6 bg-white sm:max-w-[500px] rounded-lg ">
                <Link
                  href="mailto:info@adaired.com"
                  className="flex flex-row sm:flex-col lg:flex-row bg-white gap-4 items-center  "
                >
                  <Icons.Mail className="border p-2 rounded h-14 w-14 sm:h-16 sm:w-16 text-[#1B5A96]" />
                  <div>
                    <p className="text-base text-left sm:text-center lg:text-left lg:text-lg">
                      Email Support
                    </p>
                    <p className="font-semibold text-lg text-left sm:text-center lg:text-left  lg:text-2xl">
                      info@adaired.com
                    </p>
                  </div>
                </Link>
              </div>
              <div className=" p-3 sm:p-6 bg-white sm:max-w-[500px] rounded-lg ">
                <Link
                  href="skype:live:.cid.46cf67c456a5bb0c?chat"
                  className="flex flex-row sm:flex-col lg:flex-row bg-white gap-4 items-center  "
                >
                  <Icons.Skype className="border p-2 rounded h-14 w-14 sm:h-16 sm:w-16 text-[#1B5A96]" />
                  <div>
                    <p className="text-base text-left sm:text-center lg:text-left lg:text-lg">
                      Ready for a Skype chat?
                    </p>
                    <p className="font-semibold text-lg text-left sm:text-center lg:text-left  lg:text-2xl">
                      Adaired Digital
                    </p>
                  </div>
                </Link>
              </div>
              <div className=" p-3 sm:p-6 bg-white sm:max-w-[500px] rounded-lg ">
                <Link
                  href="https://api.whatsapp.com/send?phone=918907400008"
                  className="flex flex-row sm:flex-col lg:flex-row bg-white gap-4 items-center  "
                >
                  <Icons.Whatsapp className="border p-2 rounded h-14 w-14 sm:h-16 sm:w-16 text-[#1B5A96]" />
                  <div>
                    <p className="text-base text-left sm:text-center lg:text-left lg:text-lg">
                      WhatsApp us your queries
                    </p>
                    <p className="font-semibold text-lg text-left sm:text-center lg:text-left  lg:text-2xl">
                      +91 890-740-0008
                    </p>
                  </div>
                </Link>
              </div>
              <div className=" p-3 sm:p-6 bg-white sm:max-w-[500px] rounded-lg ">
                <Link
                  href="https://telegram.me/adaired"
                  className="flex flex-row sm:flex-col lg:flex-row bg-white gap-4 items-center  "
                >
                  <Icons.Telegram className="border p-2 rounded h-14 w-14 sm:h-16 sm:w-16 text-[#1B5A96]" />
                  <div>
                    <p className="text-base text-left sm:text-center lg:text-left lg:text-lg">
                      Drop us a Telegram note
                    </p>
                    <p className="font-semibold text-lg text-left sm:text-center lg:text-left  lg:text-2xl">
                      Adaired Digital Media
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex-1 lg:relative">
              <div className=" rounded-lg border-4 border-[#EFEFEF] lg:-mt-32 w-full ">
                <HomePageForm />
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      </section>
    </>
  );
};
