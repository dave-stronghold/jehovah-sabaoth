import React from "react";
import Header3 from "../components/header/Header3";
import Banner from "../components/home3/Banner";
import Ourpartner from "../components/home3/Ourpartner";
import Gallary from "../components/home3/Gallary";
import WorkProcess from "../components/home3/WorkProcess";
import VideoArea from "../components/home3/VideoArea";
import HorizontalScroll from "../components/home3/HorizontalScroll";
import Testimonial from "../components/home3/Testimonial";
import CaseStudy from "../components/home3/CaseStudy";
import PeopleSection from "../components/home3/PeopleSection";
import InnerBanner from "../components/home3/InnerBanner";
import Footer2 from "../components/footer/Footer2";
import Contact from "../components/home3/Contact";
import Blog from "../components/home3/Blog";
import About from "../components/home3/About";

const HomepageThree = () => {
  return (
    <>
      <Header3 />
      <Banner />
      <Ourpartner />
      <About/>
      <Gallary />
      <WorkProcess/>
      <VideoArea />
      <HorizontalScroll />
      <Testimonial />
      <CaseStudy />
      <PeopleSection />
      <InnerBanner />
      <Blog />
      <Contact />
      <Footer2 />
    </>
  );
};

export default HomepageThree;
