import Link from 'next/link'
import React, { useState } from 'react'

const Services = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handleHover = (index) => {
    setActiveItem(index);
  };
  return (
    <div className="home5-services-section mb-130">
    <div className="container-fluid one">
      <div className="row">
        <div className="col-lg-12 pl--95 gap-lg-5 gap-4 d-flex flex-lg-nowrap flex-wrap align-items-start justify-content-between mb-60">
          <div className="section-title1 white">
            <span>Our Cover Area</span>
            <h2>Conduct market research to understand industry trends, competition.</h2>
          </div>
          <Link legacyBehavior href="/services1">
            <a className="explore-btn white">
            Explore More
            <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
            </svg>
            </a>
          </Link>
        </div>
      </div>
      <div className="row g-lg-4 gy-5">
        <div className="col-lg-6">
          <div className="services-img">
            <ul>
              <li className={`single-img ${activeItem === 0 ? 'active' : ''} `} style={{backgroundImage: 'linear-gradient(246deg, rgba(21, 21, 21, 0.90) 0%, rgba(21, 21, 21, 0.00) 65.56%), url(assets/img/home5/services-01.jpg)'}} />
              <li className={`single-img ${activeItem === 1 ? 'active' : ''} `} style={{backgroundImage: 'linear-gradient(246deg, rgba(21, 21, 21, 0.90) 0%, rgba(21, 21, 21, 0.00) 65.56%), url(assets/img/home5/services-02.jpg)'}} />
              <li className={`single-img ${activeItem === 2 ? 'active' : ''} `} style={{backgroundImage: 'linear-gradient(246deg, rgba(21, 21, 21, 0.90) 0%, rgba(21, 21, 21, 0.00) 65.56%), url(assets/img/home5/services-03.jpg)'}} />
              <li className={`single-img ${activeItem === 3 ? 'active' : ''} `} style={{backgroundImage: 'linear-gradient(246deg, rgba(21, 21, 21, 0.90) 0%, rgba(21, 21, 21, 0.00) 65.56%), url(assets/img/home5/services-04.jpg)'}} />
              <li className={`single-img ${activeItem === 4 ? 'active' : ''} `} style={{backgroundImage: 'linear-gradient(246deg, rgba(21, 21, 21, 0.90) 0%, rgba(21, 21, 21, 0.00) 65.56%), url(assets/img/home5/services-05.jpg)'}} />
              <li className={`single-img ${activeItem === 5 ? 'active' : ''} `} style={{backgroundImage: 'linear-gradient(246deg, rgba(21, 21, 21, 0.90) 0%, rgba(21, 21, 21, 0.00) 65.56%), url(assets/img/home5/services-06.jpg)'}} />
            </ul>
          </div>
        </div>
        <div className="col-lg-6 pl--95">
          <div className="services-list">
            <ul>
              <li className={activeItem === 0 ? 'active' : ''}
                  onMouseEnter={() => handleHover(0)}
                  onMouseLeave={() => handleHover(-1)}>
                <div className="services-content">
                  <h6><Link legacyBehavior href="/services1"><a>Technology</a></Link></h6>
                  <p>Assisting with technology-related challenges, such as system implementations or digital transformation. Managed services can cover various IT areas</p>
                </div>
                <div className="details-btn">
                  <Link legacyBehavior href="/services1.htm">
                    <a>
                    <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z" />
                    </svg>
                    </a>
                  </Link>
                </div>
              </li>
              <li  className={activeItem === 5 ? 'active' : ''}
                  onMouseEnter={() => handleHover(5)}
                  onMouseLeave={() => handleHover(-1)}>
                <div className="services-content">
                  <h6><Link legacyBehavior href="/services1"><a>Finance Consulting</a></Link></h6>
                  <p>Assisting with technology-related challenges,Assisting with technology-related challenges,Assisting with technology-related challenges,</p>
                </div>
                <div className="details-btn">
                  <Link legacyBehavior href="/services1.htm">
                  <a>
                    <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z" />
                    </svg>
                  </a>
                  </Link>
                </div>
              </li>
              <li className={activeItem === 1 ? 'active' : ''}
                  onMouseEnter={() => handleHover(1)}
                  onMouseLeave={() => handleHover(-1)}>
                <div className="services-content">
                  <h6><Link legacyBehavior href="/services1"><a>Human Resources</a></Link></h6>
                  <p>Assisting with technology-related challenges, such as system implementations or digital transformation. Managed services can cover various IT areas</p>
                </div>
                <div className="details-btn">
                  <Link legacyBehavior href="/services1.htm">
                  <a>
                    <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z" />
                    </svg>
                  </a>
                  </Link>
                </div>
              </li>
              <li className={activeItem === 2 ? 'active' : ''}
                  onMouseEnter={() => handleHover(2)}
                  onMouseLeave={() => handleHover(-1)}>
                <div className="services-content">
                  <h6><Link legacyBehavior href="/services1"><a>Management</a></Link></h6>
                  <p>Assisting with technology-related challenges, such as system implementations or digital transformation. Managed services can cover various IT areas</p>
                </div>
                <div className="details-btn">
                  <Link legacyBehavior href="/services1.htm">
                  <a>
                    <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z" />
                    </svg>
                  </a>
                  </Link>
                </div>
              </li>
              <li className={activeItem === 3 ? 'active' : ''}
                  onMouseEnter={() => handleHover(3)}
                  onMouseLeave={() => handleHover(-1)}>
                <div className="services-content">
                  <h6><Link legacyBehavior href="/services1"><a>Marketing Research</a></Link></h6>
                  <p>Assisting with technology-related challenges, such as system implementations or digital transformation. Managed services can cover various IT areas</p>
                </div>
                <div className="details-btn">
                  <Link legacyBehavior href="/services1.htm">
                  <a>
                    <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z" />
                    </svg>
                  </a>
                  </Link>
                </div>
              </li>
              <li className={activeItem === 4 ? 'active' : ''}
                  onMouseEnter={() => handleHover(4)}
                  onMouseLeave={() => handleHover(-1)}>
                <div className="services-content">
                  <h6><Link legacyBehavior href="/services1"><a>International Business</a></Link></h6>
                  <p>Assisting with technology-related challenges, such as system implementations or digital transformation. Managed services can cover various IT areas</p>
                </div>
                <div className="details-btn">
                  <Link legacyBehavior href="/services1.htm">
                  <a>
                    <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z" />
                    </svg>
                  </a>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Services
