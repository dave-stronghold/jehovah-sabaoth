import Link from 'next/link'
import React from 'react'

const AboutSuccess = () => {
  return (
    <div className="about-section mb-130">
    <div className="container-fluid one pl--95">
      <div className="row g-xl-4 gy-5">
        <div className="col-xl-6">
          <div className="about-content pr--95">
            <div className="section-title1 two mb-50">
              <span>Client Succes Story</span>
              <h2>Conduct market research to understand industry trends, competition, and customer behavior.</h2>
            </div>
            <Link legacyBehavior href="/case-study1">
              <a className="primary-btn1 btn-hover">
              Explore Story
              <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
              </svg>
              <span />
              </a>
            </Link>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="row g-4">
            <div className="col-sm-5">
              <div className="team-card two">
                <div className="content">
                  <h4>Industry Benchmarking</h4>
                  <p>Begin by having an in-depth discussion with the .</p>
                </div>
                <Link legacyBehavior href="/industry-details">
                  <a className="explore-btn">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
                  </svg>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-sm-7">
              <div className="team-card">
                <div className="content">
                  <h4>Market trends and analysis</h4>
                  <p>Begin by having an in-depth discussion with the client to understand their business.</p>
                </div>
                <Link legacyBehavior href="/case-study1">
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

export default AboutSuccess
