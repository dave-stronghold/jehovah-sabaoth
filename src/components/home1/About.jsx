import useButtonHover from "@/src/hooks/useButtonHover";
import Link from "next/link";
import React from "react";

const About = () => {
  useButtonHover();
  return (
    <div className="about-section mb-130" id="about-section">
      <div className="container-fluid one pl--95">
        <div className="row g-xl-4 gy-5">
          <div className="col-xl-6">
            <div className="about-content pr--95">
              <div className="section-title1 two mb-50">
                <span>About Us</span>
                <h2>
                  We are here to equip and enlighten the truth to every human,
                  Lead them in the path of our Lord Jesus.
                </h2>
              </div>
              <Link legacyBehavior href="/about">
                <a className="primary-btn1 btn-hover">
                  About More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                    />
                  </svg>
                  <span />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="row g-4">
              <div className="col-sm-5">
                <div className="award-area">
                  <ul>
                    <li>
                      Ministering Since <br />
                      2020
                    </li>
                  </ul>
                  <Link legacyBehavior href="/about">
                    <a className="explore-btn">
                      Our Story
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                        />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-sm-7">
                <div className="team-card">
                  <div className="content">
                    <h4>Our Vision</h4>
                    <p>
                      Prepare everyone to live in the word of God. Help
                      believers to develop a strong sense of Christian identity
                      and purpose, encouraging them to live out their faith in
                      their daily lives.
                    </p>
                  </div>
                  <Link legacyBehavior href="/about">
                    <a className="explore-btn">
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                        />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
