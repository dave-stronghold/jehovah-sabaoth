import Link from "next/link"


const ServicesTabSection = () => {
  return (
    <div className="services-tab-section mt-130 mb-130">
  <div className="container-fluid one pl--95">
    <div className="row">
      <div className="col-lg-12 pl--95 gap-lg-5 gap-4 d-flex flex-lg-nowrap flex-wrap align-items-start justify-content-between mb-60">
        <div className="section-title1 one">
          <span>Consult Area</span>
          <h2>Conduct market research to understand industry trends, competition.</h2>
        </div>
        <Link legacyBehavior href="/services1">
          <a className="explore-btn">
          Explore More
          <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
          </svg>
          </a>
        </Link>
      </div>
      <div className="col-lg-12">
        <div className="services-wrap">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-3">
              <div className="selvices-tab">
                <h5>Provide Services</h5>
                <ul className="nav nav-tabs" id="myTab2" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="technology-tab" data-bs-toggle="tab" data-bs-target="#technology" type="button" role="tab" aria-controls="technology" aria-selected="true">Technology
                      <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
                      </svg>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="finance-tab" data-bs-toggle="tab" data-bs-target="#finance" type="button" role="tab" aria-controls="finance" aria-selected="false">Finance Consult
                      <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
                      </svg>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="human-tab" data-bs-toggle="tab" data-bs-target="#human" type="button" role="tab" aria-controls="human" aria-selected="false">Human Resources
                      <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
                      </svg>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="management-tab" data-bs-toggle="tab" data-bs-target="#management" type="button" role="tab" aria-controls="management" aria-selected="false">Management
                      <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
                      </svg>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="marketing-tab" data-bs-toggle="tab" data-bs-target="#marketing" type="button" role="tab" aria-controls="marketing" aria-selected="false">Marketing Research
                      <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
                      </svg>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="international-tab" data-bs-toggle="tab" data-bs-target="#international" type="button" role="tab" aria-controls="international" aria-selected="false">International Business
                      <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
                      </svg>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9 pl--95">
              <div className="selvices-centent">
                <div className="tab-content" id="myTabContent2">
                  <div className="tab-pane fade show active" id="technology" role="tabpanel" aria-labelledby="technology-tab">
                    <div className="eg-card3 two">
                      <div className="card-img">
                        <img src="assets/img/home4/services-img-01.jpg" alt="" />
                      </div>
                      <div className="card-content">
                        <Link legacyBehavior href="/service-details">
                          <a className="view-btn">
                          <img src="assets/img/home4/right-arrow.png" alt="" />
                          </a>
                        </Link>
                        <div className="catgory-and-title">
                          <Link legacyBehavior href="/services1"><a>Technology</a></Link>
                          <h5><Link legacyBehavior href="/service-details"><a>Technology Assessment</a></Link></h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="finance" role="tabpanel" aria-labelledby="finance-tab">
                    <div className="eg-card3 two">
                      <div className="card-img">
                        <img src="assets/img/home4/services-img-02.jpg" alt="" />
                      </div>
                      <div className="card-content">
                        <Link legacyBehavior href="/service-details">
                          <a className="view-btn">
                          <img src="assets/img/home4/right-arrow.png" alt="" />
                          </a>
                        </Link>
                        <div className="catgory-and-title">
                          <Link legacyBehavior href="/services1"><a>Finance</a></Link>
                          <h5><Link legacyBehavior href="/service-details"><a>Finance Consulting</a></Link></h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="human" role="tabpanel" aria-labelledby="human-tab">
                    <div className="eg-card3 two">
                      <div className="card-img">
                        <img src="assets/img/home4/services-img-03.jpg" alt="" />
                      </div>
                      <div className="card-content">
                        <Link legacyBehavior href="/service-details">
                          <a className="view-btn">
                          <img src="assets/img/home4/right-arrow.png" alt="" />
                          </a>
                        </Link>
                        <div className="catgory-and-title">
                          <Link legacyBehavior href="/services1"><a>Consulting</a></Link>
                          <h5><Link legacyBehavior href="/service-details"><a>Human Resources</a></Link></h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="management" role="tabpanel" aria-labelledby="management-tab">
                    <div className="eg-card3 two">
                      <div className="card-img">
                        <img src="assets/img/home4/services-img-04.jpg" alt="" />
                      </div>
                      <div className="card-content">
                        <Link legacyBehavior href="/service-details">
                          <a className="view-btn">
                          <img src="assets/img/home4/right-arrow.png" alt="" />
                          </a>
                        </Link>
                        <div className="catgory-and-title">
                          <Link legacyBehavior href="/services1"><a>Fintach</a></Link>
                          <h5><Link legacyBehavior href="/service-details"><a>Management Consulting</a></Link></h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="marketing" role="tabpanel" aria-labelledby="marketing-tab">
                    <div className="eg-card3 two">
                      <div className="card-img">
                        <img src="assets/img/home4/services-img-05.jpg" alt="" />
                      </div>
                      <div className="card-content">
                        <Link legacyBehavior href="/service-details">
                          <a className="view-btn">
                          <img src="assets/img/home4/right-arrow.png" alt="" />
                          </a>
                        </Link>
                        <div className="catgory-and-title">
                          <Link legacyBehavior href="/services1"><a>Marketing</a></Link>
                          <h5><Link legacyBehavior href="/service-details"><a>Marketing Consulting</a></Link></h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="international" role="tabpanel" aria-labelledby="international-tab">
                    <div className="eg-card3 two">
                      <div className="card-img">
                        <img src="assets/img/home4/services-img-06.jpg" alt="" />
                      </div>
                      <div className="card-content">
                        <Link legacyBehavior href="/service-details">
                          <a className="view-btn">
                          <img src="assets/img/home4/right-arrow.png" alt="" />
                          </a>
                        </Link>
                        <div className="catgory-and-title">
                          <Link legacyBehavior href="/services1"><a>Technology</a></Link>
                          <h5><Link legacyBehavior href="/service-details"><a>Technology Assessment</a></Link></h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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

export default ServicesTabSection
