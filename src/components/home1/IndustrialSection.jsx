import Link from "next/link";
import React from "react";

const IndustrialSection = () => {
  return (
    <div className="industrial-section">
      <div className="container-fluid one pl--95">
        <div className="row g-lg-4 gy-5">
          <div className="col-lg-6">
            <div className="left-content">
              <div className="section-title1 two">
                <h2>
                  Consultants brainstorm potential solutions and strategies to
                  address the identified problem.
                </h2>
                <Link legacyBehavior href="/services1">
                  <a className="primary-btn1 btn-hover">
                    Explore More
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
          <div className="col-lg-6">
            <ul className="industeies-list">
              <li>
                <Link legacyBehavior href="/services1">
                  <a>Higher Education</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/services1">
                  <a>Construction</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/services1">
                  <a>Finance</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/services1">
                  <a>Low Firm</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/services1">
                  <a>Real Estate</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/services1">
                  <a>Startup</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/services1">
                  <a>Marketing</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/services1">
                  <a>Construction</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/services1">
                  <a>Oil &amp; Gas</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/services1">
                  <a>Non-Profit</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/services1">
                  <a>Family Business</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrialSection;
