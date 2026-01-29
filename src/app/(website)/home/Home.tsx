import { ServiceSectionData } from "@/src/@core/data/website/Homepage";
import Banner from "@/src/components/home/Banner/Banner";
import About from "@/src/components/home/About";
import Blogs from "@/src/components/home/Blogs";
import Certificate from "@/src/components/home/Certificate";
import Clients from "@/src/components/home/Clients";
import Contact from "@/src/components/home/Contact";
import Expect from "@/src/components/home/Expect";
import FAQ from "@/src/components/home/FAQ";
import Solutions from "@/src/components/home/Solutions";
import Testimonial from "@/src/components/home/Testimonial";
import WhyChoose from "@/src/components/home/WhyChoose";
import React from "react";

const Home = () => {
  return (
    <div>
      <Banner />
      <Certificate />
      <Solutions />
      {/* <Services /> */}
      <Expect />
      <Clients />
      <WhyChoose />
      <About />
      <Testimonial />
      <Contact />
      <Blogs />
      <FAQ />
    </div>
  );
};

export default Home;
