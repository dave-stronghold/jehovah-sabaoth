import React from "react";
import MainLayout from "../components/layout/MainLayout";
import data from "../data/portfolio.json";
import Link from "next/link";
const PortfolioTwoColumnPage = () => {
  return (
    <MainLayout>
      <div className="portfolio-two-column-section pt-130 mb-130">
        <div className="container">
          <div className="row g-md-4 gy-5 mb-70">
            {data.slice(0,4).map((i) => {
              return (
                <div key={i.id} className="col-md-6">
                  <div className="eg-card4">
                    <div className="card-img">
                      <img src={i.img} alt="" />
                    </div>
                    <div className="card-content">
                      <Link legacyBehavior href="/portfolio-two-column">
                        <a>{i.tag}</a>
                      </Link>
                      <div className="title-and-btn">
                        <h4>
                          <Link legacyBehavior href="/portfolio-details">
                            <a>{i.title}</a>
                          </Link>
                        </h4>
                        <Link legacyBehavior href="/portfolio-details">
                          <a className="explore-btn">
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
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="pagination-area">
                <ul className="paginations">
                  <li className="page-item active">
                    <a href="#">01</a>
                  </li>
                  <li className="page-item">
                    <a href="#">02</a>
                  </li>
                  <li className="page-item">
                    <a href="#">03</a>
                  </li>
                  <li className="page-item">
                    <a href="#">04</a>
                  </li>
                  <li className="page-item">
                    <a href="#">05</a>
                  </li>
                </ul>
                <div className="paginations-button">
                  <a href="#">
                    Next
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={7}
                      height={14}
                      viewBox="0 0 7 14"
                    >
                      <path d="M7 7.00008L0 0L4.45455 7.00008L0 14L7 7.00008Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PortfolioTwoColumnPage;
