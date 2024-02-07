import React, { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import Partner from "../components/common/Partner";
import About from "../components/Home2/About";
import Testimonial from "../components/Home2/Testimonial";
import WhyChooseSection from "../components/Home2/WhyChooseSection";
import VideoArea from "../components/Home2/VideoArea";
import PeopleSection from "../components/Home2/PeopleSection";
import Contact from "../components/Home2/Contact";

const AboutPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };
  return (
    <MainLayout>
      <Partner gap="mb-130" />
      <div className="mission-section mb-130">
        <div className="container-fluid one pl--95">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-4">
              <div className="mission-img">
                <img
                  src="assets/img/inner-pages/about-mission-section-img.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-8 pl--95">
              <div className="mission-content-wrap">
                <div className="mission-content-top">
                  <div className="section-title1 w-890">
                    <h2>
                      Business consulting is a professional service provided by
                      experts who offer advice.
                    </h2>
                  </div>
                  <p>
                    Business consulting is a professional service provided by
                    experts who offer advice and guidance to businesses to help
                    them improve their performance, solve specific problems, and
                    achieve their goals.
                  </p>
                  <h5>
                    Mr. Daniel Scoot, <span>Company CEO</span>
                  </h5>
                </div>
                <div className="mission-content-bottom">
                  <h3>Our Mission</h3>
                  <p>
                    To empower organizations to thrive and achieve their full
                    potential by providing strategic insights, innovative
                    solutions, and expert guidance. We partner with our clients
                    to enhance efficiency, competitiveness, and sustainability
                    in an ever-evolving business landscape.
                  </p>
                  <p
                    className="moretext"
                    style={{ display: isExpanded ? "block" : "none" }}
                  >
                    To empower organizations to thrive and achieve their full
                    potential by providing strategic insights, innovative
                    solutions, and expert guidance. We partner with our clients
                    to enhance efficiency, competitiveness, and sustainability
                    in an ever-evolving business landscape.
                  </p>
                  {/* <a className="moreless-button">Read More</a> */}
                  <a
                    className={`moreless-button bi ${
                      isExpanded ? "bi-chevron-up" : "bi-chevron-down"
                    }`}
                    onClick={toggleText}
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Testimonial />
      <WhyChooseSection />
      <VideoArea />
      <PeopleSection />
      <Contact />
    </MainLayout>
  );
};

export default AboutPage;
