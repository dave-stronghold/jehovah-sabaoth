import Link from 'next/link'
import React from 'react'

const People = () => {
  return (
    <div className="home6-people-section mb-90">
  <div className="container-fluid one">
    <div className="row">
      <div className="col-lg-12 pl--95 gap-lg-5 gap-4 d-flex flex-lg-nowrap flex-wrap align-items-end justify-content-between mb-60">
        <div className="section-title1 two">
          <span>Our People</span>
          <h2>Conduct market research to understand industry trends, competition.</h2>
        </div>
        <Link legacyBehavior href="/our-people1">
          <a className="primary-btn1 btn-hover">
          Explore People
          <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
          </svg>
          <span />
          </a>
        </Link>
      </div>
    </div>
    <div className="row g-lg-4 gy-5">
      <div className="col-lg-3 col-sm-6">
        <div className="people-card6">
          <div className="people-img">
            <img src="assets/img/home6/people-01.png" alt="" />
            <div className="explore-btn">
              <Link legacyBehavior href="/people-details">
                <a>
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
                  <path fillRule="evenodd" clipRule="evenodd" d="M13.582 1.41649L0 14.9978L1.00217 16L14.5835 2.41795V11.8086H16V0H4.1914V1.41649H13.582Z" />
                </svg>
                </a>
              </Link>
            </div>
            <ul className="social-icon">
              <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
              <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
              <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
            </ul>
          </div>
          <div className="people-content">
            <h5><Link legacyBehavior href="/people-details"><a>Mr. Daniel Scoot</a></Link></h5>
            <span>Senior Consultant</span>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="people-card6">
          <div className="people-img">
            <img src="assets/img/home6/people-02.png" alt="" />
            <div className="explore-btn">
              <Link legacyBehavior href="/people-details">
                <a>
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
                  <path fillRule="evenodd" clipRule="evenodd" d="M13.582 1.41649L0 14.9978L1.00217 16L14.5835 2.41795V11.8086H16V0H4.1914V1.41649H13.582Z" />
                </svg>
                </a>
              </Link>
            </div>
            <ul className="social-icon">
              <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
              <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
              <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
            </ul>
          </div>
          <div className="people-content">
            <h5><Link legacyBehavior href="/people-details"><a>Mr. Rakhab Uddin</a></Link></h5>
            <span>Senior Consultant</span>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="people-card6">
          <div className="people-img">
            <img src="assets/img/home6/people-03.png" alt="" />
            <div className="explore-btn">
              <Link legacyBehavior href="/people-details">
                <a>
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
                  <path fillRule="evenodd" clipRule="evenodd" d="M13.582 1.41649L0 14.9978L1.00217 16L14.5835 2.41795V11.8086H16V0H4.1914V1.41649H13.582Z" />
                </svg>
                </a>
              </Link>
            </div>
            <ul className="social-icon">
              <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
              <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
              <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
            </ul>
          </div>
          <div className="people-content">
            <h5><Link legacyBehavior href="/people-details"><a>Mrs. Flurance Miyagi</a></Link></h5>
            <span>Junior Consultant</span>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="people-card6">
          <div className="people-img">
            <img src="assets/img/home6/people-04.png" alt="" />
            <div className="explore-btn">
              <Link legacyBehavior href="/people-details">
                <a>
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
                  <path fillRule="evenodd" clipRule="evenodd" d="M13.582 1.41649L0 14.9978L1.00217 16L14.5835 2.41795V11.8086H16V0H4.1914V1.41649H13.582Z" />
                </svg>
                </a>
              </Link>
            </div>
            <ul className="social-icon">
              <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
              <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
              <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
            </ul>
          </div>
          <div className="people-content">
            <h5><Link legacyBehavior href="/people-details"><a>Mrs. Nhushi Yehara</a></Link></h5>
            <span>Junior Consultant</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default People
