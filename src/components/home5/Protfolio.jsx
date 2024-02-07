import Link from 'next/link'
import React from 'react'

const Protfolio = () => {
  return (
    <div className="home5-protfolio-section mb-130">
  <div className="container-fluid one">
    <div className="row g-lg-4 gy-5">
      <div className="col-lg-5 pl--95 pr--95">
        <div className="section-title1 two">
          <span>Our Portfolio</span>
          <h2>Conduct market research to understand industry.</h2>
          <Link legacyBehavior href="/portfolio-two-column">
            <a className="primary-btn1 btn-hover" >
            Explore Portfolio
            <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
            </svg>
            <span />
            </a>
          </Link>
        </div>
      </div>
      <div className="col-lg-7 ">
        <div className="eg-card4 border-bottom mb-40">
          <div className="card-img">
            <img src="assets/img/home5/portfolio-01.jpg" alt="" />
          </div>
          <div className="card-content">
            <Link legacyBehavior href="/portfolio-two-column"><a>Technology</a></Link>
            <div className="title-and-btn">
              <h4><Link legacyBehavior href="/portfolio-details"><a>Technology Assessment</a></Link></h4>
              <Link legacyBehavior  href="/portfolio-details">
                <a className="explore-btn">
                Explore More
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
                </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="eg-card4 border-bottom mb-40">
          <div className="card-img">
            <img src="assets/img/home5/portfolio-02.jpg" alt="" />
          </div>
          <div className="card-content">
            <Link legacyBehavior href="/portfolio-two-column"><a>Management</a></Link>
            <div className="title-and-btn">
              <h4><Link legacyBehavior href="/portfolio-details"><a>To Change Management</a></Link></h4>
              <Link legacyBehavior href="/people-details">
                <a className="explore-btn">
                Explore More
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
                </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="eg-card4 border-bottom mb-40">
          <div className="card-img">
            <img src="assets/img/home5/portfolio-03.jpg" alt="" />
          </div>
          <div className="card-content">
            <Link legacyBehavior href="/portfolio-two-column"><a>Finance</a></Link>
            <div className="title-and-btn">
              <h4><Link legacyBehavior href="/portfolio-details"><a>Financial Consulting</a></Link></h4>
              <Link legacyBehavior  href="/portfolio-details">
                <a className="explore-btn">
                Explore More
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
                </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="eg-card4 last">
          <div className="card-img">
            <img src="assets/img/home5/portfolio-04.jpg" alt="" />
          </div>
          <div className="card-content">
            <Link legacyBehavior href="/portfolio-two-column"><a>Marketing</a></Link>
            <div className="title-and-btn">
              <h4><Link legacyBehavior href="/portfolio-details"><a>Marketing and Sales Consulting</a></Link></h4>
              <Link legacyBehavior href="/people-details">
                <a className="explore-btn">
                Explore More
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
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
  )
}

export default Protfolio
