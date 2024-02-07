import React from "react";
import MainLayout from "../components/layout/MainLayout";
import data from "../data/portfolio.json";
import Link from "next/link";
const PortfolioSingleColumnpage = () => {
  return (
    <MainLayout>
      <div className="portfolio-two-column-section pt-130 mb-130">
        <div className="container">
          <div className="row g-md-4 gy-5">
            <div className="col-md-12">
              {data.slice(0,5).map((i) => {
                return (
                  <div key={i.id} className="eg-card4 two mb-60">
                    <div className="row g-0">
                      <div className="col-md-6">
                        <div className="card-img mb-0">
                          <img src={i.img} alt="" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card-content">
                          <div className="title-and-btn">
                            <Link legacyBehavior href="/portfolio-single-column"><a>{i.tag}</a></Link>
                            <h4>
                              <Link legacyBehavior href="/portfolio-details"><a>{i.title}</a></Link>
                            </h4>
                          </div>
                          <div className="card-btn">
                            <Link legacyBehavior href="/portfolio-details">
                              <a className="explore-btn two btn-hover">
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
                    </div>
                  </div>
                );
              })}
            </div>
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

export default PortfolioSingleColumnpage;
