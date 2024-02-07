import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div className="home4-about-section">
  <div className="container-fluid one pl--95">
    <div className="row g-lg-4 gy-5">
      <div className="col-xxl-7 col-lg-6 pr--95">
        <div className="about-content">
          <div className="section-title1 two mb-50">
            <span>About Us</span>
            <h2>A business consulting approach involves providing expert advice and guidance to organizations seeking to <span>solve specific problems, improve performance, or achieve their strategic goals.</span></h2>
          </div>
          <div className="btn-and-review">
            <Link legacyBehavior href="/about">
              <a className="primary-btn1 btn-hover">
              About More
              <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
              </svg>
              <span />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-xxl-5 col-lg-6">
        <div className="row">
          <div className="col-xl-7">
            <div className="company-information">
              <div className="information-content">
                <h5>Establish Year</h5>
                <p>This year is significant because it provides insight into the history and experience of the consulting firm.</p>
                <ul className="btn-group">
                  <li className="success-rate">Annual Growth  <span>90%</span></li>
                  <li><span>250+ </span> Team</li>
                </ul>
              </div>
              <div className="establish-year">
                <h2>1990<span>YR</span></h2>
              </div>
            </div>
          </div>
          <div className="col-xl-5 d-xl-flex d-none">
            <div className="about-img">
              <img src="assets/img/home4/about-img.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default About
