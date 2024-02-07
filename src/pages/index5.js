import React from "react";
import Topbar from "../components/home5/Topbar";
import Header5 from "../components/header/Header5";
import Banner from "../components/home5/Banner";
import FeatureCardSection from "../components/home5/FeatureCardSection";
import About from "../components/home5/About";
import Services from "../components/home5/Services";
import Protfolio from "../components/home5/Protfolio";
import CompanyActivities from "../components/home5/CompanyActivities";
import Testimonial from "../components/home5/Testimonial";
import PeopleSection from "../components/home5/PeopleSection";
import FindJob from "../components/home5/FindJob";
import HorizontalScroll from "../components/home5/HorizontalScroll";
import Blog from "../components/home5/Blog";
import LogoSection from "../components/home5/LogoSection";
import Contact from "../components/home5/Contact";
import Footer2 from "../components/footer/Footer2";

const HomepageFive = () => {
  return (
    <>
      <div className="header-topbar-area">
        <Topbar />
        <Header5 />
      </div>
      <Banner />
      <FeatureCardSection />
      <About />
      <Services />
      <Protfolio />
      <CompanyActivities />
      <Testimonial />
      <PeopleSection />
      <FindJob />
      <HorizontalScroll />
      <Blog />
      <LogoSection />
      <Contact />
      <Footer2/>
    </>
  );
};

export default HomepageFive;
