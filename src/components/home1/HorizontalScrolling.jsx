import Link from "next/link";
import React from "react";

const HorizontalScrolling = () => {
  return (
    <div className="horizontal-scrolling-section mb-130">
      <div
        className="single-scroll-container"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), url(assets/img/home1/scroll-bg-1.jpg)",
        }}
      >
        <div className="container-fluid one pl--95">
          <div className="horizontal-scrolling-content">
            <div className="section-title1 two">
              <span>Real Estate</span>
              <h2>
                A Business Consulting to Increase Marketing Analaytic on Markio
                Logistics
              </h2>
            </div>
            <p>
              Business consultants are typically hired by organizations of all
              sizes, from small startups to large corporations, and across
              various industries.
            </p>
            <Link legacyBehavior href="/case-study1">
              <a className="primary-btn1 btn-hover">
                Explore Case Study
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
      </div>
    </div>
  );
};

export default HorizontalScrolling;
