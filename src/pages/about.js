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
      <div className="mt-130"></div>
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
                      For the earnest expectation of the creation eagerly waits
                      for the revealing of the sons of God. - Romans 8:19
                    </h2>
                  </div>
                  <div className="mission-content-bottom pt-0">
                    <p>
                      Revelation 10:6 says "And he swore by him who lives for
                      ever and ever, who created the heavens and all that is in
                      them, the earth and all that is in it, and the sea and all
                      that is in it, and said, “There will be no more delay!".
                      Empowered by the eternal Creator, we vow to proclaim the
                      imminent end, ushering in a time without delay, while
                      fervently anticipating the revelation of God's children,
                      shaping a world bound by divine purpose and truth.
                    </p>
                  </div>
                  <h5>
                    Bro. Anand <span>, Jehova Sabaoth Ministries</span>
                  </h5>
                </div>
                <div className="mission-content-bottom">
                  <h3>Our Mission and Vision</h3>
                  <p>
                    Jehovah Sabaoth Ministries operates as a fully registered
                    Religious Charitable Trust in Tamil Nadu, India, committed
                    to enlightening individuals with the truth and guiding them
                    along the path of Lord Jesus. Our mission is to equip
                    believers with a deep understanding of the Word of God and
                    empower them to live out their faith in their daily lives.
                  </p>

                  <p>
                    Within our ministry, we prioritize engaging with Christian
                    youth through our Youth Fellowship programs. These
                    gatherings aim to foster a strong sense of community and
                    fellowship among young believers, providing them with a
                    supportive environment to connect with like-minded peers,
                    build meaningful friendships, and encourage one another on
                    their spiritual journey.
                  </p>

                  <p
                    className="moretext"
                    style={{ display: isExpanded ? "block" : "none" }}
                  >
                    <p>
                      Moreover, we recognize the importance of nurturing
                      leadership skills among our youth. As part of our Youth
                      Fellowship activities, we actively involve young people in
                      organizing and leading various aspects of our gatherings,
                      thereby providing them with valuable opportunities for
                      personal growth and development.
                    </p>

                    <p>
                      Evangelism is a core focus of our ministry. We are
                      dedicated to equipping young Christians with the necessary
                      tools and resources to confidently share their faith with
                      others and engage in evangelistic efforts within their
                      communities. Through training sessions and practical
                      outreach initiatives, we empower young believers to
                      effectively communicate the message of the Gospel and
                      bring hope to those in need.
                    </p>

                    <p>
                      In addition to our Youth Fellowship and evangelism
                      efforts, Jehovah Sabaoth Ministries is actively involved
                      in various other ministries, including Children's
                      Ministry, Prison Ministry, Hospital Ministry, and Social
                      Welfare initiatives. These ministries allow us to extend
                      our reach and impact, serving individuals of all ages and
                      backgrounds with compassion and love.
                    </p>

                    <p>
                      Overall, our organization is committed to empowering
                      believers, particularly youth, to live out their faith
                      boldly, share the message of Christ with others, and
                      actively engage in compassionate service to those in need,
                      thereby fulfilling the mandate to love God and love our
                      neighbors as ourselves.
                    </p>
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
      {/* <About /> */}
      {/* <Testimonial /> */}
      {/* <WhyChooseSection /> */}
      {/* <VideoArea /> */}
      {/* <PeopleSection /> */}
      {/* <Contact /> */}
    </MainLayout>
  );
};

export default AboutPage;
