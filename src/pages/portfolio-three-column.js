import React from "react";
import MainLayout from "../components/layout/MainLayout";
import data from "../data/portfolio.json";
import Link from "next/link";

const PortfolioThreeColumnPage = () => {
  return (
    <MainLayout>
      <div className="portfolio-three-column-section pt-130 mb-130">
        <div className="container">
          <div className="row g-lg-4 gy-5 mb-70">
            {data.map((i) => {
              return (
                <div key={i.id} className="col-lg-4 col-md-6">
                  <div className="eg-card3 four">
                    <div className="card-img">
                      <img src={i.col_3_img} alt="" />
                    </div>
                    <div className="card-content">
                      <div className="catgory-and-title">
                        <Link legacyBehavior href="/portfolio-three-column">
                          <a>{i.tag}</a>
                        </Link>
                        <h5>
                          <Link legacyBehavior href="/portfolio-details">
                            <a>{i.title}</a>
                          </Link>
                        </h5>
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

export default PortfolioThreeColumnPage;
