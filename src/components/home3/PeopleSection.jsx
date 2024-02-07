import Link from 'next/link'
import React from 'react'

const PeopleSection = () => {
  return (
    <div className="people-section mb-130 mt-130">
    <div className="container-fluid one pl--95">
      <div className="row">
        <div className="col-lg-5">
          <div className="people-left-content pr--95">
            <div className="section-title1 two">
              <span>Our People</span>
              <h2>Excellent Service Provided by Our Superb Consultant.</h2>
              <div className="explore-btn-and-hire-btn">
                <Link legacyBehavior href="/our-people1">
                  <a className="primary-btn1 btn-hover">
                  Explore People
                  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
                  </svg>
                  </a>
                </Link>
                <div className="hire-btn">
                  <Link legacyBehavior href="/career"><a><span>New</span>Hiring</a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="people-card3 magnetic-item">
                <div className="people-img">
                  <img src="assets/img/home3/people-01.png" alt="" />
                </div>
                <div className="people-content">
                  <div className="name-degi">
                    <h5><Link legacyBehavior href="/people-details"><a>Mr. Harbard Mack</a></Link></h5>
                    <span>Senior Consultant</span>
                  </div>
                  <ul className="social-icon">
                    <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                    <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                  </ul> 
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="people-card3 magnetic-item">
                <div className="people-img">
                  <img src="assets/img/home3/people-02.png" alt="" />
                </div>
                <div className="people-content">
                  <div className="name-degi">
                    <h5><Link legacyBehavior href="/people-details"><a>Mr. DF Daniel Scoot</a></Link></h5>
                    <span>Senior Consultant</span>
                  </div>
                  <ul className="social-icon">
                    <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                    <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                  </ul> 
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="people-card3 magnetic-item">
                <div className="people-img">
                  <img src="assets/img/home3/people-03.png" alt="" />
                </div>
                <div className="people-content">
                  <div className="name-degi">
                    <h5><Link legacyBehavior href="/people-details"><a>Mrs. Hanrry Ghust</a></Link></h5>
                    <span>Senior Consultant</span>
                  </div>
                  <ul className="social-icon">
                    <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                    <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                  </ul> 
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="people-card3 magnetic-item">
                <div className="people-img">
                  <img src="assets/img/home3/people-04.png" alt="" />
                </div>
                <div className="people-content">
                  <div className="name-degi">
                    <h5><Link legacyBehavior href="/people-details"><a>Mr. Dr Richard Joseph</a></Link></h5>
                    <span>Senior Consultant</span>
                  </div>
                  <ul className="social-icon">
                    <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                    <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                  </ul> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  

  )
}

export default PeopleSection
