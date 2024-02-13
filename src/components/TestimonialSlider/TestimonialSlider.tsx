"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Button from "@/components/Button/Button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import { Icons } from "@/components/Icons/Icons";
const TestimonialSlider = () => {
  type Data = {
    img: string;
    name: string;
    review: string;
  };

  const data: Data[] = [
    {
      img: "",
      name: "Tom Allen Jr.",
      review:
        "I was impressed with their work, the team is very experienced. They are able to manage all my social media accounts in a very professional manner.",
    },
    {
      img: "",
      name: "Marianne Thomas",
      review:
        "They worked incredibly hard on my projects and consistently delivered excellent outcomes 💥. All I can say this is the best IT firm I've ever worked with.",
    },
    {
      img: "",
      name: "Gloria Oliver",
      review:
        "My experience with the company was amazing. They worked incredibly well on our recent project. We are more than happy with the final results.",
    },
    {
      img: "",
      name: "Rath Lora",
      review:
        "It's great to deal with Adaired digital. They are responsive and if you have any trouble they are available almost 24/7. I love their project management tool. Kudos to you.",
    },
    {
      img: "",
      name: "Glenn Russell",
      review:
        "AdAired Digital Media's PPC service has helped me increase my website's traffic and reach the target audience better. Their team of experts helped me create a customized campaign, which has improved my business's ROI. I'd recommend their PPC services to anyone looking to boost their online presence.",
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <>
      <section className="py-6 md:py-12 bg-[#FAFFF3]">
        <MaxWidthWrapper>
          <div
            className={`flex-1 pb-12 flex flex-col items-center text-center lg:text-left lg:items-start lg:pb-0`}
          >
            <h5 className="inline font-nunito text-[#515151] relative lg:pl-20 text-lg">
              <div className="absolute top-1/2 -left-2/4 lg:left-0 transform -translate-y-1/2 bg-[#A7A9AC] h-px w-10 lg:w-16 "></div>
              <div className="lg:hidden absolute top-1/2 -right-2/4 transform -translate-y-1/2 bg-[#A7A9AC] h-px w-10 lg:w-16"></div>
              Not Convinced?
            </h5>
            <h2 className="text-2xl md:text-3xl lg:text-4xl py-1">
              Check Out What Our Clients Want To Say!
            </h2>
            <p className="py-1">
              These are the genuine experiences of our clients regarding
              Adaired&apos;s digital marketing services. The service quality and
              client satisfaction we focus on define our unwavering commitment
              and make us the most trusted digital marketing company.
            </p>
          </div>
          <div className="pt-4">
            <Carousel
              opts={{
                align: "start",
                loop: true,
            }}
            
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.play}
            >
              <CarouselContent className="-ml-0 md:-ml-1 ">
                {data.map((item) => (
                  <CarouselItem
                    key={item.name}
                    className="pl-2 pr-3 pt-3 pb-3 md:p-0 md:basis-1/2 lg:basis-1/2 border border-[#8EC640] rounded-lg md:pl-3 md:border-none"
                  >
                    <div className="flex gap-10 pl-6">
                      <div className="relative max-h-24 sm:max-h-32">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-24 sm:h-32 w-1.5 bg-[#D2EAB1] rounded-full " />
                        <div className="flex items-center justify-center absolute z-2 left-1/2 -translate-x-1/2  top-1/2 -translate-y-1/2 border-4 border-[#D2EAB1] text-white  w-10 h-10 bg-[#8EC640] rounded-full sm:w-12 sm:h-12">
                          <Icons.Quote />
                        </div>
                      </div>
                      <div>
                        <div className="flex gap-5 items-center">
                          {item.img ? (
                            <Image
                              src={item.img}
                              alt="User Avatar"
                              height={50}
                              width={50}
                            />
                          ) : (
                            <div className="w-12 h-12 bg-[#c2c2c2] flex items-center justify-center rounded-full">
                              {item.name[0].toUpperCase()}
                            </div>
                          )}
                          <h4>{item.name}</h4>
                        </div>
                        <p className="pt-4 text-base sm:text-lg">{item.review}</p>
                        <Image
                          src={"/rating-star.svg"}
                          alt="Rating"
                          width={100}
                          height={50}
                          className="pt-4"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};
export default TestimonialSlider;
