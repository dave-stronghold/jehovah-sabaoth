import React from 'react'
import MainLayout from '../components/layout/MainLayout'
import Link from 'next/link'

const PortfolioThreeColumnTabPage = () => {
  return (
    <MainLayout>
      <div className="portfolio-section style-2 mb-130">
  <div className="container-fluid one">
    <div className="row">
      <div className="col-lg-12 mb-60">
        <div className="portfolio-tab-area two">
          <ul className="nav nav-tabs" id="portfolio" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all" type="button" role="tab" aria-controls="all" aria-selected="true">All</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="technology2-tab" data-bs-toggle="tab" data-bs-target="#technology2" type="button" role="tab" aria-controls="technology2" aria-selected="false">Technology</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="marketing2-tab" data-bs-toggle="tab" data-bs-target="#marketing2" type="button" role="tab" aria-controls="marketing2" aria-selected="false">Marketing</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="finance2-tab" data-bs-toggle="tab" data-bs-target="#finance2" type="button" role="tab" aria-controls="finance2" aria-selected="true">Finance</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="management2-tab" data-bs-toggle="tab" data-bs-target="#management2" type="button" role="tab" aria-controls="management2" aria-selected="false">Management</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="international2-tab" data-bs-toggle="tab" data-bs-target="#international2" type="button" role="tab" aria-controls="international2" aria-selected="false">International</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="portfolio-tab-content">
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
              <div className="row g-lg-4 gy-5 mb-60">
                <div className="col-lg-4 col-md-6">
                  <div className="eg-card3 three">
                    <div className="card-img">
                      <img src="assets/img/home4/portfolio-img-01.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <Link legacyBehavior href="/portfolio-details">
                        <a className="view-btn">
                        <img src="assets/img/inner-pages/right-arrow2.png" alt="" />
                        </a>
                      </Link>
                      <div className="catgory-and-title">
                        <Link legacyBehavior href="/portfolio-two-column"><a>Technology</a></Link>
                        <h5><Link legacyBehavior href="/portfolio-details"><a>Management Consulting</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="eg-card3 three">
                    <div className="card-img">
                      <img src="assets/img/home4/portfolio-img-02.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <Link legacyBehavior href="/portfolio-details">
                      <a className="view-btn">
                        <img src="assets/img/inner-pages/right-arrow2.png" alt="" />
                      </a>
                      </Link>
                      <div className="catgory-and-title">
                        <Link legacyBehavior href="/portfolio-two-column"><a>Technology</a></Link>
                        <h5><Link legacyBehavior href="/portfolio-details"><a>Human Resources Consulting</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="eg-card3 three">
                    <div className="card-img">
                      <img src="assets/img/home4/portfolio-img-03.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <Link legacyBehavior href="/portfolio-details">
                      <a className="view-btn">
                        <img src="assets/img/inner-pages/right-arrow2.png" alt="" />
                      </a>
                      </Link>
                      <div className="catgory-and-title">
                        <Link legacyBehavior href="/portfolio-two-column"><a>Marketing</a></Link>
                        <h5><Link legacyBehavior href="/portfolio-details"><a>IT Consulting</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="eg-card3 three">
                    <div className="card-img">
                      <img src="assets/img/inner-pages/portfolio-img1.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <Link legacyBehavior href="/portfolio-details">
                      <a className="view-btn">
                        <img src="assets/img/inner-pages/right-arrow2.png" alt="" />
                      </a>
                      </Link>
                      <div className="catgory-and-title">
                        <Link legacyBehavior href="/portfolio-two-column"><a>Marketing</a></Link>
                        <h5><Link legacyBehavior href="/portfolio-details"><a>Marketing and Sales Consulting</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="eg-card3 three">
                    <div className="card-img">
                      <img src="assets/img/inner-pages/portfolio-img4.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <Link legacyBehavior href="/portfolio-details">
                      <a className="view-btn">
                        <img src="assets/img/inner-pages/right-arrow2.png" alt="" />
                      </a>
                      </Link>
                      <div className="catgory-and-title">
                        <Link legacyBehavior href="/portfolio-two-column"><a>Resources</a></Link>
                        <h5><Link legacyBehavior href="/portfolio-details"><a>Compliance Consulting</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="eg-card3 three">
                    <div className="card-img">
                      <img src="assets/img/inner-pages/portfolio-img5.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <Link legacyBehavior href="/portfolio-details">
                      <a className="view-btn">
                        <img src="assets/img/inner-pages/right-arrow2.png" alt="" />
                      </a>
                      </Link>
                      <div className="catgory-and-title">
                        <Link legacyBehavior href="/portfolio-two-column"><a>Fintech</a></Link>
                        <h5><Link legacyBehavior href="/portfolio-details"><a>Financial Consulting</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                  <a className="primary-btn1 btn-hover" href="#">
                    Load More
                    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="technology2" role="tabpanel" aria-labelledby="technology2-tab">
              <div className="row g-lg-4 gy-5 mb-60">
                <div className="col-lg-4 col-md-6">
                  <div className="eg-card3 three">
                    <div className="card-img">
                      <img src="assets/img/home4/portfolio-img-01.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <Link legacyBehavior href="/portfolio-details">
                      <a className="view-btn">
                        <img src="assets/img/inner-pages/right-arrow2.png" alt="" />
                      </a>
                      </Link>
                      <div className="catgory-and-title">
                        <Link legacyBehavior href="/portfolio-two-column"><a>Technology</a></Link>
                        <h5><Link legacyBehavior href="/portfolio-details"><a>Management Consulting</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="eg-card3 three">
                    <div className="card-img">
                      <img src="assets/img/home4/portfolio-img-02.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <Link legacyBehavior href="/portfolio-details">
                      <a className="view-btn">
                        <img src="assets/img/inner-pages/right-arrow2.png" alt="" />
                      </a>
                      </Link>
                      <div className="catgory-and-title">
                        <Link legacyBehavior href="/portfolio-two-column"><a>Technology</a></Link>
                        <h5><Link legacyBehavior href="/portfolio-details"><a>Human Resources Consulting</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="eg-card3 three">
                    <div className="card-img">
                      <img src="assets/img/home4/portfolio-img-03.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <Link legacyBehavior href="/portfolio-details">
                      <a className="view-btn">
                        <img src="assets/img/inner-pages/right-arrow2.png" alt="" />
                      </a>
                      </Link>
                      <div className="catgory-and-title">
                        <Link legacyBehavior href="/portfolio-two-column"><a>Marketing</a></Link>
                        <h5><Link legacyBehavior href="/portfolio-details"><a>IT Consulting</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="eg-card3 three">
                    <div className="card-img">
                      <img src="assets/img/inner-pages/portfolio-img1.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <Link legacyBehavior href="/portfolio-details">
                      <a className="view-btn">
                        <img src="assets/img/inner-pages/right-arrow2.png" alt="" />
                      </a>
                      </Link>
                      <div className="catgory-and-title">
                        <Link legacyBehavior href="/portfolio-two-column"><a>Marketing</a></Link>
                        <h5><Link legacyBehavior href="/portfolio-details"><a>Marketing and Sales Consulting</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="eg-card3 three">
                    <div className="card-img">
                      <img src="assets/img/inner-pages/portfolio-img4.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <Link legacyBehavior href="/portfolio-details">
                      <a className="view-btn">
                        <img src="assets/img/inner-pages/right-arrow2.png" alt="" />
                      </a>
                      </Link>
                      <div className="catgory-and-title">
                        <Link legacyBehavior href="/portfolio-two-column"><a>Resources</a></Link>
                        <h5><Link legacyBehavior href="/portfolio-details"><a>Compliance Consulting</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="eg-card3 three">
                    <div className="card-img">
                      <img src="assets/img/inner-pages/portfolio-img5.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <Link legacyBehavior href="/portfolio-details">
                      <a className="view-btn">
                        <img src="assets/img/inner-pages/right-arrow2.png" alt="" />
                      </a>
                      </Link>
                      <div className="catgory-and-title">
                        <Link legacyBehavior href="/portfolio-two-column"><a>Fintech</a></Link>
                        <h5><Link legacyBehavior href="/portfolio-details"><a>Financial Consulting</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                  <a className="primary-btn1 btn-hover" href="#">
                    Load More
                    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="marketing2" role="tabpanel" aria-labelledby="marketing2-tab">
              <div className="row g-lg-4 gy-5 mb-60">
                <div className="col-lg-4 col-md-6">
                  <div className="eg-card3 three">
                    <div className="card-img">
                      <img src="assets/img/home4/portfolio-img-01.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <Link legacyBehavior href="/portfolio-details">
                      <a className="view-btn">
                        <img src="assets/img/inner-pages/right-arrow2.png" alt="" />
                      </a>
                      </Link>
                      <div className="catgory-and-title">
                        <Link legacyBehavior href="/portfolio-two-column"><a>Technology</a></Link>
                        <h5><Link legacyBehavior href="/portfolio-details"><a>Management Consulting</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="eg-card3 three">
                    <div className="card-img">
                      <img src="assets/img/home4/portfolio-img-02.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <Link legacyBehavior href="/portfolio-details">
                      <a className="view-btn">
                        <img src="assets/img/inner-pages/right-arrow2.png" alt="" />
                      </a>
                      </Link>
                      <div className="catgory-and-title">
                        <Link legacyBehavior href="/portfolio-two-column"><a>Technology</a></Link>
                        <h5><Link legacyBehavior href="/portfolio-details"><a>Human Resources Consulting</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="eg-card3 three">
                    <div className="card-img">
                      <img src="assets/img/home4/portfolio-img-03.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <Link legacyBehavior href="/portfolio-details">
                      <a className="view-btn">
                        <img src="assets/img/inner-pages/right-arrow2.png" alt="" />
                      </a>
                      </Link>
                      <div className="catgory-and-title">
                        <Link legacyBehavior href="/portfolio-two-column"><a>Marketing</a></Link>
                        <h5><Link legacyBehavior href="/portfolio-details"><a>IT Consulting</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="eg-card3 three">
                    <div className="card-img">
                      <img src="assets/img/inner-pages/portfolio-img1.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <Link legacyBehavior href="/portfolio-details">
                      <a className="view-btn">
                        <img src="assets/img/inner-pages/right-arrow2.png" alt="" />
                      </a>
                      </Link>
                      <div className="catgory-and-title">
                        <Link legacyBehavior href="/portfolio-two-column"><a>Marketing</a></Link>
                        <h5><Link legacyBehavior href="/portfolio-details"><a>Marketing and Sales Consulting</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="eg-card3 three">
                    <div className="card-img">
                      <img src="assets/img/inner-pages/portfolio-img4.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <Link legacyBehavior href="/portfolio-details">
                      <a className="view-btn">
                        <img src="assets/img/inner-pages/right-arrow2.png" alt="" />
                      </a>
                      </Link>
                      <div className="catgory-and-title">
                        <Link legacyBehavior href="/portfolio-two-column"><a>Resources</a></Link>
                        <h5><Link legacyBehavior href="/portfolio-details"><a>Compliance Consulting</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="eg-card3 three">
                    <div className="card-img">
                      <img src="assets/img/inner-pages/portfolio-img5.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <Link legacyBehavior href="/portfolio-details">
                      <a className="view-btn">
                        <img src="assets/img/inner-pages/right-arrow2.png" alt="" />
                      </a>
                      </Link>
                      <div className="catgory-and-title">
                        <Link legacyBehavior href="/portfolio-two-column"><a>Fintech</a></Link>
                        <h5><Link legacyBehavior href="/portfolio-details"><a>Financial Consulting</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                  <a className="primary-btn1 btn-hover" href="#">
                    Load More
                    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="finance2" role="tabpanel" aria-labelledby="finance2-tab">
              <div className="row g-lg-4 gy-5 mb-60">
                <div className="col-lg-4 col-md-6">
                  <div className="eg-card3 three">
                    <div className="card-img">
                      <img src="assets/img/home4/portfolio-img-01.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <Link legacyBehavior href="/portfolio-details">
                      <a className="view-btn">
                        <img src="assets/img/inner-pages/right-arrow2.png" alt="" />
                      </a>
                      </Link>
                      <div className="catgory-and-title">
                        <Link legacyBehavior href="/portfolio-two-column"><a>Technology</a></Link>
                        <h5><Link legacyBehavior href="/portfolio-details"><a>Management Consulting</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="eg-card3 three">
                    <div className="card-img">
                      <img src="assets/img/home4/portfolio-img-02.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <Link legacyBehavior href="/portfolio-details">
                      <a className="view-btn">
                        <img src="assets/img/inner-pages/right-arrow2.png" alt="" />
                      </a>
                      </Link>
                      <div className="catgory-and-title">
                        <Link legacyBehavior href="/portfolio-two-column"><a>Technology</a></Link>
                        <h5><Link legacyBehavior href="/portfolio-details"><a>Human Resources Consulting</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="eg-card3 three">
                    <div className="card-img">
                      <img src="assets/img/home4/portfolio-img-03.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <Link legacyBehavior href="/portfolio-details">
                      <a className="view-btn">
                        <img src="assets/img/inner-pages/right-arrow2.png" alt="" />
                      </a>
                      </Link>
                      <div className="catgory-and-title">
                        <Link legacyBehavior href="/portfolio-two-column"><a>Marketing</a></Link>
                        <h5><Link legacyBehavior href="/portfolio-details"><a>IT Consulting</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="eg-card3 three">
                    <div className="card-img">
                      <img src="assets/img/inner-pages/portfolio-img1.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <Link legacyBehavior href="/portfolio-details">
                      <a className="view-btn">
                        <img src="assets/img/inner-pages/right-arrow2.png" alt="" />
                      </a>
                      </Link>
                      <div className="catgory-and-title">
                        <Link legacyBehavior href="/portfolio-two-column"><a>Marketing</a></Link>
                        <h5><Link legacyBehavior href="/portfolio-details"><a>Marketing and Sales Consulting</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="eg-card3 three">
                    <div className="card-img">
                      <img src="assets/img/inner-pages/portfolio-img4.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <Link legacyBehavior href="/portfolio-details">
                      <a className="view-btn">
                        <img src="assets/img/inner-pages/right-arrow2.png" alt="" />
                      </a>
                      </Link>
                      <div className="catgory-and-title">
                        <Link legacyBehavior href="/portfolio-two-column"><a>Resources</a></Link>
                        <h5><Link legacyBehavior href="/portfolio-details"><a>Compliance Consulting</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="eg-card3 three">
                    <div className="card-img">
                      <img src="assets/img/inner-pages/portfolio-img5.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <Link legacyBehavior href="/portfolio-details">
                      <a className="view-btn">
                        <img src="assets/img/inner-pages/right-arrow2.png" alt="" />
                      </a>
                      </Link>
                      <div className="catgory-and-title">
                        <Link legacyBehavior href="/portfolio-two-column"><a>Fintech</a></Link>
                        <h5><Link legacyBehavior href="/portfolio-details"><a>Financial Consulting</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                  <a className="primary-btn1 btn-hover" href="#">
                    Load More
                    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="management2" role="tabpanel" aria-labelledby="management2-tab">
              <div className="row g-lg-4 gy-5 mb-60">
                <div className="col-lg-4 col-md-6">
                  <div className="eg-card3 three">
                    <div className="card-img">
                      <img src="assets/img/home4/portfolio-img-01.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <Link legacyBehavior href="/portfolio-details">
                      <a className="view-btn">
                        <img src="assets/img/inner-pages/right-arrow2.png" alt="" />
                      </a>
                      </Link>
                      <div className="catgory-and-title">
                        <Link legacyBehavior href="/portfolio-two-column"><a>Technology</a></Link>
                        <h5><Link legacyBehavior href="/portfolio-details"><a>Management Consulting</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="eg-card3 three">
                    <div className="card-img">
                      <img src="assets/img/home4/portfolio-img-02.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <Link legacyBehavior href="/portfolio-details">
                      <a className="view-btn">
                        <img src="assets/img/inner-pages/right-arrow2.png" alt="" />
                      </a>
                      </Link>
                      <div className="catgory-and-title">
                        <Link legacyBehavior href="/portfolio-two-column"><a>Technology</a></Link>
                        <h5><Link legacyBehavior href="/portfolio-details"><a>Human Resources Consulting</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="eg-card3 three">
                    <div className="card-img">
                      <img src="assets/img/home4/portfolio-img-03.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <Link legacyBehavior href="/portfolio-details">
                      <a className="view-btn">
                        <img src="assets/img/inner-pages/right-arrow2.png" alt="" />
                      </a>
                      </Link>
                      <div className="catgory-and-title">
                        <Link legacyBehavior href="/portfolio-two-column"><a>Marketing</a></Link>
                        <h5><Link legacyBehavior href="/portfolio-details"><a>IT Consulting</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="eg-card3 three">
                    <div className="card-img">
                      <img src="assets/img/inner-pages/portfolio-img1.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <Link legacyBehavior href="/portfolio-details">
                      <a className="view-btn">
                      <img src="assets/img/inner-pages/right-arrow2.png" alt="" />
                    </a>
                      </Link>
                      <div className="catgory-and-title">
                        <Link legacyBehavior href="/portfolio-two-column"><a>Marketing</a></Link>
                        <h5><Link legacyBehavior href="/portfolio-details"><a>Marketing and Sales Consulting</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="eg-card3 three">
                    <div className="card-img">
                      <img src="assets/img/inner-pages/portfolio-img4.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <Link legacyBehavior href="/portfolio-details">
                      <a className="view-btn">
                      <img src="assets/img/inner-pages/right-arrow2.png" alt="" />
                    </a>
                      </Link>
                      <div className="catgory-and-title">
                        <Link legacyBehavior href="/portfolio-two-column"><a>Resources</a></Link>
                        <h5><Link legacyBehavior href="/portfolio-details"><a>Compliance Consulting</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="eg-card3 three">
                    <div className="card-img">
                      <img src="assets/img/inner-pages/portfolio-img5.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <Link legacyBehavior href="/portfolio-details">
                      <a className="view-btn">
                      <img src="assets/img/inner-pages/right-arrow2.png" alt="" />
                    </a>
                      </Link>
                      <div className="catgory-and-title">
                        <Link legacyBehavior href="/portfolio-two-column"><a>Fintech</a></Link>
                        <h5><Link legacyBehavior href="/portfolio-details"><a>Financial Consulting</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                  <a className="primary-btn1 btn-hover" href="#">
                    Load More
                    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="international2" role="tabpanel" aria-labelledby="international2-tab">
              <div className="row g-lg-4 gy-5 mb-60">
                <div className="col-lg-4 col-md-6">
                  <div className="eg-card3 three">
                    <div className="card-img">
                      <img src="assets/img/home4/portfolio-img-01.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <Link legacyBehavior href="/portfolio-details">
                      <a className="view-btn">
                      <img src="assets/img/inner-pages/right-arrow2.png" alt="" />
                    </a>
                      </Link>
                      <div className="catgory-and-title">
                        <Link legacyBehavior href="/portfolio-two-column"><a>Technology</a></Link>
                        <h5><Link legacyBehavior href="/portfolio-details"><a>Management Consulting</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="eg-card3 three">
                    <div className="card-img">
                      <img src="assets/img/home4/portfolio-img-02.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <Link legacyBehavior href="/portfolio-details">
                      <a className="view-btn">
                      <img src="assets/img/inner-pages/right-arrow2.png" alt="" />
                    </a>
                      </Link>
                      <div className="catgory-and-title">
                        <Link legacyBehavior href="/portfolio-two-column"><a>Technology</a></Link>
                        <h5><Link legacyBehavior href="/portfolio-details"><a>Human Resources Consulting</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="eg-card3 three">
                    <div className="card-img">
                      <img src="assets/img/home4/portfolio-img-03.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <Link legacyBehavior href="/portfolio-details">
                      <a className="view-btn">
                      <img src="assets/img/inner-pages/right-arrow2.png" alt="" />
                    </a>
                      </Link>
                      <div className="catgory-and-title">
                        <Link legacyBehavior href="/portfolio-two-column"><a>Marketing</a></Link>
                        <h5><Link legacyBehavior href="/portfolio-details"><a>IT Consulting</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="eg-card3 three">
                    <div className="card-img">
                      <img src="assets/img/inner-pages/portfolio-img1.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <Link legacyBehavior href="/portfolio-details">
                      <a className="view-btn">
                      <img src="assets/img/inner-pages/right-arrow2.png" alt="" />
                    </a>
                      </Link>
                      <div className="catgory-and-title">
                        <Link legacyBehavior href="/portfolio-two-column"><a>Marketing</a></Link>
                        <h5><Link legacyBehavior href="/portfolio-details"><a>Marketing and Sales Consulting</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="eg-card3 three">
                    <div className="card-img">
                      <img src="assets/img/inner-pages/portfolio-img4.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <Link legacyBehavior href="/portfolio-details">
                      <a className="view-btn">
                      <img src="assets/img/inner-pages/right-arrow2.png" alt="" />
                    </a>
                      </Link>
                      <div className="catgory-and-title">
                        <Link legacyBehavior href="/portfolio-two-column"><a>Resources</a></Link>
                        <h5><Link legacyBehavior href="/portfolio-details"><a>Compliance Consulting</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="eg-card3 three">
                    <div className="card-img">
                      <img src="assets/img/inner-pages/portfolio-img5.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      <Link legacyBehavior href="/portfolio-details">
                      <a className="view-btn">
                      <img src="assets/img/inner-pages/right-arrow2.png" alt="" />
                    </a>
                      </Link>
                      <div className="catgory-and-title">
                        <Link legacyBehavior href="/portfolio-two-column"><a>Fintech</a></Link>
                        <h5><Link legacyBehavior href="/portfolio-details"><a>Financial Consulting</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                  <a className="primary-btn1 btn-hover" href="#">
                    Load More
                    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </MainLayout>
  )
}

export default PortfolioThreeColumnTabPage
