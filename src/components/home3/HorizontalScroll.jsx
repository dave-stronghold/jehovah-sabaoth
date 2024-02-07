import React from "react";

const HorizontalScroll = () => {
  return (
    <div className="horizontal-scrolling-section">
      <div
        className="single-scroll-container two"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(13, 23, 32, 0.90) 0%, rgba(13, 23, 32, 0.10) 56.93%), url(assets/img/home3/ceo-img.png)",
        }}
      >
        <div className="container-fluid one pl--95">
          <div className="horizontal-scrolling-content two">
            <div className="horizental-scrolling-top-content">
              <div className="section-title1 two">
                <h2>
                  "Business Consuting" is not a specific term or concept
                  commonly used in business. It appears to be a combination of
                  words that could refer to various aspects of business
                  operations, strategies, or solutions."
                </h2>
              </div>
              <div className="name-degi">
                <h5>Mr. Daniel Scoot,</h5>
                <span>Company CEO</span>
              </div>
            </div>
            <div className="horizental-scrolling-bottom-content">
              <div className="consulting">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={30}
                  height={30}
                  viewBox="0 0 30 30"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M25.4663 2.65593L0 28.1209L1.87907 30L27.3441 4.53366V22.1411H30V0H7.85888V2.65593H25.4663Z"
                  />
                </svg>
                <p>
                  <strong>50%</strong> Emission reduction of your business by
                  our consulting.
                </p>
              </div>
              <ul className="features">
                <li>Problem Solving</li>
                <li>Determine Probelm</li>
                <li>Cost-Efficiency</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
