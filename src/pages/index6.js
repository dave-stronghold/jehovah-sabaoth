import React from "react";
import Header6 from "../components/header/Header6";
import Banner from "../components/home6/Banner";
import About from "../components/home6/About";
import Video from "../components/home6/Video";
import AboutSuccess from "../components/home6/AboutSuccess";
import CountryMap from "../components/home6/CountryMap";
import Testimonial from "../components/home6/Testimonial";
import People from "../components/home6/People";
import FindJob from "../components/home6/FindJob";
import WorkingProcess from "../components/home6/WorkingProcess";
import EventSection from "../components/home6/EventSection";
import Blog from "../components/home6/Blog";
import ClientSection from "../components/home6/ClientSection";
import Contact from "../components/home6/Contact";
import Footer2 from "../components/footer/Footer2";
import CoverArea from "../components/home6/CoverArea";

const HomepageSix = () => {
  return (
    <>
      <Header6 />
      <Banner />
      <CoverArea/>
      <About />
      <Video />
      <AboutSuccess />
      <CountryMap />
      <Testimonial />
      <People />
      <FindJob />
      <WorkingProcess />
      <EventSection />
      <Blog />
      <ClientSection />
      <Contact />
      <Footer2 />
    </>
  );
};

export default HomepageSix;
