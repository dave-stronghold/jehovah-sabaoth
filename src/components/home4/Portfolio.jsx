import React, { useMemo } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);

const Portfolio = () => {
  const settings =useMemo(()=>{
    return {
      speed: 1500,
		spaceBetween: 30,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-4",
			prevEl: ".prev-4",
		},
        pagination: {
			el: ".progress-pagination",
			type: "progressbar",
		  },

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 3
			},
		}
    }
  },[])
  return (
    <div className="portfolio-section mb-130">
  <div className="container-fluid one">
    <div className="row">
      <div className="col-lg-12 pl--95 mb-60">
        <div className="portfolio-tab-area">
          <div className="section-title1 two white">
            <span>Our Portfolio</span>
            <h2>Recently some projects 
              have been done!</h2>
          </div>
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
          <div className="tab-content mb-60" id="myTabContent">
            <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
              <div className="col-lg-12">
                <Swiper {...settings} className="swiper portfolio-slider">
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="eg-card3 three">
                        <div className="card-img">
                          <img src="assets/img/home4/portfolio-img-01.jpg" alt="" />
                        </div>
                        <div className="card-content">
                          <Link legacyBehavior href="/portfolio-details">
                            <a className="view-btn">
                            <img src="assets/img/home4/right-arrow.png" alt="" />
                            </a>
                          </Link>
                          <div className="catgory-and-title">
                            <Link legacyBehavior href="/portfolio-two-column"><a>Technology</a></Link>
                            <h5><Link legacyBehavior href="/portfolio-details"><a>Management Consulting</a></Link></h5>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="eg-card3 three">
                        <div className="card-img">
                          <img src="assets/img/home4/portfolio-img-02.jpg" alt="" />
                        </div>
                        <div className="card-content">
                          <Link legacyBehavior href="/portfolio-details">
                            <a className="view-btn">
                            <img src="assets/img/home4/right-arrow.png" alt="" />
                            </a>
                          </Link>
                          <div className="catgory-and-title">
                            <Link legacyBehavior href="/portfolio-two-column"><a>Technology</a></Link>
                            <h5><Link legacyBehavior href="/people-details"><a>Human Resources Consulting</a></Link></h5>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="eg-card3 three">
                        <div className="card-img">
                          <img src="assets/img/home4/portfolio-img-03.jpg" alt="" />
                        </div>
                        <div className="card-content">
                          <Link legacyBehavior href="/portfolio-details">
                            <a className="view-btn">
                            <img src="assets/img/home4/right-arrow.png" alt="" />
                            </a>
                          </Link>
                          <div className="catgory-and-title">
                            <Link legacyBehavior href="/portfolio-two-column"><a>Marketing</a></Link>
                            <h5><Link legacyBehavior href="/portfolio-details"><a>IT Consulting</a></Link></h5>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="eg-card3 three">
                        <div className="card-img">
                          <img src="assets/img/home4/portfolio-img-01.jpg" alt="" />
                        </div>
                        <div className="card-content">
                          <Link legacyBehavior href="/portfolio-details">
                            <a className="view-btn">
                            <img src="assets/img/home4/right-arrow.png" alt="" />
                            </a>
                          </Link>
                          <div className="catgory-and-title">
                            <Link legacyBehavior href="/portfolio-two-column"><a>Finance</a></Link>
                            <h5><Link legacyBehavior href="/portfolio-details"><a>Management Consulting</a></Link></h5>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="eg-card3 three">
                        <div className="card-img">
                          <img src="assets/img/home4/portfolio-img-02.jpg" alt="" />
                        </div>
                        <div className="card-content">
                          <Link legacyBehavior href="/portfolio-details">
                            <a className="view-btn">
                            <img src="assets/img/home4/right-arrow.png" alt="" />
                            </a>
                          </Link>
                          <div className="catgory-and-title">
                            <Link legacyBehavior href="/portfolio-two-column"><a>Management</a></Link>
                            <h5><Link legacyBehavior href="/portfolio-details"><a>Human Resources Consulting</a></Link></h5>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="eg-card3 three">
                        <div className="card-img">
                          <img src="assets/img/home4/portfolio-img-03.jpg" alt="" />
                        </div>
                        <div className="card-content">
                          <Link legacyBehavior  href="/people-details">
                            <a className="view-btn">
                            <img src="assets/img/home4/right-arrow.png" alt="" />
                            </a>
                          </Link>
                          <div className="catgory-and-title">
                            <Link legacyBehavior href="/portfolio-two-column"><a>International</a></Link>
                            <h5><Link legacyBehavior href="/portfolio-details"><a>IT Consulting</a></Link></h5>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </div>
            <div className="tab-pane fade" id="technology2" role="tabpanel" aria-labelledby="technology2-tab">
              <div className="col-lg-12">
                <Swiper {...settings} className="swiper portfolio-slider">
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="eg-card3 three">
                        <div className="card-img">
                          <img src="assets/img/home4/portfolio-img-02.jpg" alt="" />
                        </div>
                        <div className="card-content">
                          <Link legacyBehavior href="/portfolio-details">
                            <a className="view-btn">
                            <img src="assets/img/home4/right-arrow.png" alt="" />
                            </a>
                          </Link>
                          <div className="catgory-and-title">
                            <Link legacyBehavior href="/portfolio-two-column"><a>Technology</a></Link>
                            <h5><Link legacyBehavior href="/portfolio-details"><a>Human Resources Consulting</a></Link></h5>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="eg-card3 three">
                        <div className="card-img">
                          <img src="assets/img/home4/portfolio-img-01.jpg" alt="" />
                        </div>
                        <div className="card-content">
                          <Link legacyBehavior href="/portfolio-details">
                            <a className="view-btn">
                            <img src="assets/img/home4/right-arrow.png" alt="" />
                            </a>
                          </Link>
                          <div className="catgory-and-title">
                            <Link legacyBehavior href="/portfolio-two-column"><a>Technology</a></Link>
                            <h5><Link legacyBehavior href="/people-details"><a>Management Consulting</a></Link></h5>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="eg-card3 three">
                        <div className="card-img">
                          <img src="assets/img/home4/portfolio-img-03.jpg" alt="" />
                        </div>
                        <div className="card-content">
                          <Link legacyBehavior href="/portfolio-details">
                            <a className="view-btn">
                            <img src="assets/img/home4/right-arrow.png" alt="" />
                            </a>
                          </Link>
                          <div className="catgory-and-title">
                            <Link legacyBehavior href="/portfolio-two-column"><a>Technology</a></Link>
                            <h5><Link legacyBehavior href="/portfolio-details"><a>IT Consulting</a></Link></h5>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="eg-card3 three">
                        <div className="card-img">
                          <img src="assets/img/home4/portfolio-img-01.jpg" alt="" />
                        </div>
                        <div className="card-content">
                          <Link legacyBehavior href="/portfolio-details">
                            <a className="view-btn">
                            <img src="assets/img/home4/right-arrow.png" alt="" />
                            </a>
                          </Link>
                          <div className="catgory-and-title">
                            <Link legacyBehavior href="/portfolio-two-column"><a>Technology</a></Link>
                            <h5><Link legacyBehavior href="/portfolio-details"><a>Management Consulting</a></Link></h5>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="eg-card3 three">
                        <div className="card-img">
                          <img src="assets/img/home4/portfolio-img-02.jpg" alt="" />
                        </div>
                        <div className="card-content">
                          <Link legacyBehavior href="/portfolio-details">
                            <a className="view-btn">
                            <img src="assets/img/home4/right-arrow.png" alt="" />
                            </a>
                          </Link>
                          <div className="catgory-and-title">
                            <Link legacyBehavior href="/portfolio-two-column"><a>Technology</a></Link>
                            <h5><Link legacyBehavior href="/portfolio-details"><a>Human Resources Consulting</a></Link></h5>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="eg-card3 three">
                        <div className="card-img">
                          <img src="assets/img/home4/portfolio-img-03.jpg" alt="" />
                        </div>
                        <div className="card-content">
                          <Link legacyBehavior href="/portfolio-details">
                            <a className="view-btn">
                            <img src="assets/img/home4/right-arrow.png" alt="" />
                            </a>
                          </Link>
                          <div className="catgory-and-title">
                            <Link legacyBehavior href="/portfolio-two-column"><a>Technology</a></Link>
                            <h5><Link legacyBehavior href="/portfolio-details"><a>IT Consulting</a></Link></h5>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </div>
            <div className="tab-pane fade" id="marketing2" role="tabpanel" aria-labelledby="marketing2-tab">
              <div className="col-lg-12">
                <Swiper {...settings} className="swiper portfolio-slider">
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="eg-card3 three">
                        <div className="card-img">
                          <img src="assets/img/home4/portfolio-img-01.jpg" alt="" />
                        </div>
                        <div className="card-content">
                          <Link legacyBehavior href="/portfolio-details">
                            <a className="view-btn">
                            <img src="assets/img/home4/right-arrow.png" alt="" />
                            </a>
                          </Link>
                          <div className="catgory-and-title">
                            <Link legacyBehavior href="/portfolio-two-column"><a>Marketing</a></Link>
                            <h5><Link legacyBehavior href="/portfolio-details"><a>Management Consulting</a></Link></h5>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="eg-card3 three">
                        <div className="card-img">
                          <img src="assets/img/home4/portfolio-img-02.jpg" alt="" />
                        </div>
                        <div className="card-content">
                          <Link legacyBehavior href="/portfolio-details">
                            <a className="view-btn">
                            <img src="assets/img/home4/right-arrow.png" alt="" />
                            </a>
                          </Link>
                          <div className="catgory-and-title">
                            <Link legacyBehavior href="/portfolio-two-column"><a>Marketing</a></Link>
                            <h5><Link legacyBehavior href="/portfolio-details"><a>Human Resources Consulting</a></Link></h5>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="eg-card3 three">
                        <div className="card-img">
                          <img src="assets/img/home4/portfolio-img-03.jpg" alt="" />
                        </div>
                        <div className="card-content">
                          <Link legacyBehavior href="/portfolio-details">
                            <a className="view-btn">
                            <img src="assets/img/home4/right-arrow.png" alt="" />
                            </a>
                          </Link>
                          <div className="catgory-and-title">
                            <Link legacyBehavior href="/portfolio-two-column"><a>Marketing</a></Link>
                            <h5><Link legacyBehavior href="/people-details"><a>IT Consulting</a></Link></h5>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="eg-card3 three">
                        <div className="card-img">
                          <img src="assets/img/home4/portfolio-img-01.jpg" alt="" />
                        </div>
                        <div className="card-content">
                          <Link legacyBehavior href="/portfolio-details">
                            <a className="view-btn">
                            <img src="assets/img/home4/right-arrow.png" alt="" />
                            </a>
                          </Link>
                          <div className="catgory-and-title">
                            <Link legacyBehavior href="/portfolio-two-column"><a>Marketing</a></Link>
                            <h5><Link legacyBehavior href="/portfolio-details"><a>Management Consulting</a></Link></h5>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="eg-card3 three">
                        <div className="card-img">
                          <img src="assets/img/home4/portfolio-img-02.jpg" alt="" />
                        </div>
                        <div className="card-content">
                          <Link legacyBehavior href="/portfolio-details">
                            <a className="view-btn">
                            <img src="assets/img/home4/right-arrow.png" alt="" />
                            </a>
                          </Link>
                          <div className="catgory-and-title">
                            <Link legacyBehavior href="/portfolio-two-column"><a>Marketing</a></Link>
                            <h5><Link legacyBehavior href="/portfolio-details"><a>Human Resources Consulting</a></Link></h5>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="eg-card3 three">
                        <div className="card-img">
                          <img src="assets/img/home4/portfolio-img-03.jpg" alt="" />
                        </div>
                        <div className="card-content">
                          <Link legacyBehavior href="/portfolio-details">
                            <a className="view-btn">
                            <img src="assets/img/home4/right-arrow.png" alt="" />
                            </a>
                          </Link>
                          <div className="catgory-and-title">
                            <Link legacyBehavior href="/portfolio-two-column"><a>Marketing</a></Link>
                            <h5><Link legacyBehavior href="/portfolio-details"><a>IT Consulting</a></Link></h5>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </div>
            <div className="tab-pane fade" id="finance2" role="tabpanel" aria-labelledby="finance2-tab">
              <div className="col-lg-12">
                <Swiper {...settings} className="swiper portfolio-slider">
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="eg-card3 three">
                        <div className="card-img">
                          <img src="assets/img/home4/portfolio-img-01.jpg" alt="" />
                        </div>
                        <div className="card-content">
                          <Link legacyBehavior href="/portfolio-details">
                            <a className="view-btn">
                            <img src="assets/img/home4/right-arrow.png" alt="" />
                            </a>
                          </Link>
                          <div className="catgory-and-title">
                            <Link legacyBehavior href="/portfolio-two-column"><a>Finance</a></Link>
                            <h5><Link legacyBehavior href="/people-details"><a>Management Consulting</a></Link></h5>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="eg-card3 three">
                        <div className="card-img">
                          <img src="assets/img/home4/portfolio-img-02.jpg" alt="" />
                        </div>
                        <div className="card-content">
                          <Link legacyBehavior href="/portfolio-details">
                            <a className="view-btn">
                            <img src="assets/img/home4/right-arrow.png" alt="" />
                            </a>
                          </Link>
                          <div className="catgory-and-title">
                            <Link legacyBehavior href="/portfolio-two-column"><a>Finance</a></Link>
                            <h5><Link legacyBehavior href="/portfolio-details"><a>Human Resources Consulting</a></Link></h5>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="eg-card3 three">
                        <div className="card-img">
                          <img src="assets/img/home4/portfolio-img-03.jpg" alt="" />
                        </div>
                        <div className="card-content">
                          <Link legacyBehavior href="/portfolio-details">
                            <a className="view-btn">
                            <img src="assets/img/home4/right-arrow.png" alt="" />
                            </a>
                          </Link>
                          <div className="catgory-and-title">
                            <Link legacyBehavior href="/portfolio-two-column"><a>Finance</a></Link>
                            <h5><Link legacyBehavior href="/portfolio-details"><a>IT Consulting</a></Link></h5>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="eg-card3 three">
                        <div className="card-img">
                          <img src="assets/img/home4/portfolio-img-01.jpg" alt="" />
                        </div>
                        <div className="card-content">
                          <Link legacyBehavior href="/portfolio-details">
                            <a className="view-btn">
                            <img src="assets/img/home4/right-arrow.png" alt="" />
                            </a>
                          </Link>
                          <div className="catgory-and-title">
                            <Link legacyBehavior href="/portfolio-two-column"><a>Finance</a></Link>
                            <h5><Link legacyBehavior href="/people-details"><a>Management Consulting</a></Link></h5>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="eg-card3 three">
                        <div className="card-img">
                          <img src="assets/img/home4/portfolio-img-02.jpg" alt="" />
                        </div>
                        <div className="card-content">
                          <Link legacyBehavior href="/portfolio-details">
                            <a className="view-btn">
                            <img src="assets/img/home4/right-arrow.png" alt="" />
                            </a>
                          </Link>
                          <div className="catgory-and-title">
                            <Link legacyBehavior href="/portfolio-two-column"><a>Finance</a></Link>
                            <h5><Link legacyBehavior href="/portfolio-details"><a>Human Resources Consulting</a></Link></h5>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="eg-card3 three">
                        <div className="card-img">
                          <img src="assets/img/home4/portfolio-img-03.jpg" alt="" />
                        </div>
                        <div className="card-content">
                          <Link legacyBehavior href="/portfolio-details">
                            <a className="view-btn">
                            <img src="assets/img/home4/right-arrow.png" alt="" />
                            </a>
                          </Link>
                          <div className="catgory-and-title">
                            <Link legacyBehavior href="/portfolio-two-column"><a>Finance</a></Link>
                            <h5><Link legacyBehavior href="/portfolio-details"><a>IT Consulting</a></Link></h5>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </div>
            <div className="tab-pane fade" id="management2" role="tabpanel" aria-labelledby="management2-tab">
              <div className="col-lg-12">
                <Swiper {...settings} className="swiper portfolio-slider">
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="eg-card3 three">
                        <div className="card-img">
                          <img src="assets/img/home4/portfolio-img-01.jpg" alt="" />
                        </div>
                        <div className="card-content">
                          <Link legacyBehavior href="/portfolio-details">
                            <a className="view-btn">
                            <img src="assets/img/home4/right-arrow.png" alt="" />
                            </a>
                          </Link>
                          <div className="catgory-and-title">
                            <Link legacyBehavior href="/portfolio-two-column"><a>Management</a></Link>
                            <h5><Link legacyBehavior href="/people-details"><a>Management Consulting</a></Link></h5>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="eg-card3 three">
                        <div className="card-img">
                          <img src="assets/img/home4/portfolio-img-02.jpg" alt="" />
                        </div>
                        <div className="card-content">
                          <Link legacyBehavior href="/portfolio-details">
                            <a className="view-btn">
                            <img src="assets/img/home4/right-arrow.png" alt="" />
                            </a>
                          </Link>
                          <div className="catgory-and-title">
                            <Link legacyBehavior href="/portfolio-two-column"><a>Management</a></Link>
                            <h5><Link legacyBehavior href="/portfolio-details"><a>Human Resources Consulting</a></Link></h5>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="eg-card3 three">
                        <div className="card-img">
                          <img src="assets/img/home4/portfolio-img-03.jpg" alt="" />
                        </div>
                        <div className="card-content">
                          <Link legacyBehavior href="/portfolio-details">
                            <a className="view-btn">
                            <img src="assets/img/home4/right-arrow.png" alt="" />
                            </a>
                          </Link>
                          <div className="catgory-and-title">
                            <Link legacyBehavior href="/portfolio-two-column"><a>Management</a></Link>
                            <h5><Link legacyBehavior href="/portfolio-details"><a>IT Consulting</a></Link></h5>&gt;
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="eg-card3 three">
                        <div className="card-img">
                          <img src="assets/img/home4/portfolio-img-01.jpg" alt="" />
                        </div>
                        <div className="card-content">
                          <Link legacyBehavior href="/portfolio-details">
                            <a className="view-btn">
                            <img src="assets/img/home4/right-arrow.png" alt="" />
                            </a>
                          </Link>
                          <div className="catgory-and-title">
                            <Link legacyBehavior href="/portfolio-two-column"><a>Management</a></Link>
                            <h5><Link legacyBehavior href="/people-details"><a>Management Consulting</a></Link></h5>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="eg-card3 three">
                        <div className="card-img">
                          <img src="assets/img/home4/portfolio-img-02.jpg" alt="" />
                        </div>
                        <div className="card-content">
                          <Link legacyBehavior href="/portfolio-details">
                            <a className="view-btn">
                            <img src="assets/img/home4/right-arrow.png" alt="" />
                            </a>
                          </Link>
                          <div className="catgory-and-title">
                            <Link legacyBehavior href="/portfolio-two-column"><a>Management</a></Link>
                            <h5><Link legacyBehavior href="/portfolio-details"><a>Human Resources Consulting</a></Link></h5>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="eg-card3 three">
                        <div className="card-img">
                          <img src="assets/img/home4/portfolio-img-03.jpg" alt="" />
                        </div>
                        <div className="card-content">
                          <Link legacyBehavior href="/portfolio-details">
                            <a className="view-btn">
                            <img src="assets/img/home4/right-arrow.png" alt="" />
                            </a>
                          </Link>
                          <div className="catgory-and-title">
                            <Link legacyBehavior href="/portfolio-two-column"><a>Management</a></Link>
                            <h5><Link legacyBehavior href="/portfolio-details"><a>IT Consulting</a></Link></h5>&gt;
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </div>
            <div className="tab-pane fade" id="international2" role="tabpanel" aria-labelledby="international2-tab">
              <div className="col-lg-12">
                <Swiper {...settings} className="swiper portfolio-slider">
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="eg-card3 three">
                        <div className="card-img">
                          <img src="assets/img/home4/portfolio-img-01.jpg" alt="" />
                        </div>
                        <div className="card-content">
                          <Link legacyBehavior href="/portfolio-details">
                            <a className="view-btn">
                              
                            <img src="assets/img/home4/right-arrow.png" alt="" />
                            </a>
                          </Link>
                          <div className="catgory-and-title">
                            <Link legacyBehavior href="/portfolio-two-column"><a>International</a></Link>
                            <h5><Link legacyBehavior href="/people-details"><a>Management Consulting</a></Link></h5>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="eg-card3 three">
                        <div className="card-img">
                          <img src="assets/img/home4/portfolio-img-02.jpg" alt="" />
                        </div>
                        <div className="card-content">
                          <Link legacyBehavior href="/portfolio-details">
                            <a className="view-btn">
                            <img src="assets/img/home4/right-arrow.png" alt="" />
                            </a>
                          </Link>
                          <div className="catgory-and-title">
                            <Link legacyBehavior href="/portfolio-two-column"><a>International</a></Link>
                            <h5><Link legacyBehavior href="/portfolio-details"><a>Human Resources Consulting</a></Link></h5>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="eg-card3 three">
                        <div className="card-img">
                          <img src="assets/img/home4/portfolio-img-03.jpg" alt="" />
                        </div>
                        <div className="card-content">
                          <Link legacyBehavior href="/portfolio-details">
                            <a className="view-btn">
                            <img src="assets/img/home4/right-arrow.png" alt="" />
                            </a>
                          </Link>
                          <div className="catgory-and-title">
                            <Link legacyBehavior href="/portfolio-two-column"><a>International</a></Link>
                            <h5><Link legacyBehavior href="/portfolio-details"><a>IT Consulting</a></Link></h5>&gt;
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="eg-card3 three">
                        <div className="card-img">
                          <img src="assets/img/home4/portfolio-img-01.jpg" alt="" />
                        </div>
                        <div className="card-content">
                          <Link legacyBehavior href="/portfolio-details">
                            <a className="view-btn">
                            <img src="assets/img/home4/right-arrow.png" alt="" />
                            </a>
                          </Link>
                          <div className="catgory-and-title">
                            <Link legacyBehavior href="/portfolio-two-column"><a>International</a></Link>
                            <h5><Link legacyBehavior href="/people-details"><a>Management Consulting</a></Link></h5>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="eg-card3 three">
                        <div className="card-img">
                          <img src="assets/img/home4/portfolio-img-02.jpg" alt="" />
                        </div>
                        <div className="card-content">
                          <Link legacyBehavior href="/portfolio-details">
                            <a className="view-btn">
                            <img src="assets/img/home4/right-arrow.png" alt="" />
                            </a>
                          </Link>
                          <div className="catgory-and-title">
                            <Link legacyBehavior href="/portfolio-two-column"><a>International</a></Link>
                            <h5><Link legacyBehavior href="/portfolio-details"><a>Human Resources Consulting</a></Link></h5>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="eg-card3 three">
                        <div className="card-img">
                          <img src="assets/img/home4/portfolio-img-03.jpg" alt="" />
                        </div>
                        <div className="card-content">
                          <Link legacyBehavior href="/portfolio-details">
                            <a className="view-btn">
                            <img src="assets/img/home4/right-arrow.png" alt="" />
                            </a>
                          </Link>
                          <div className="catgory-and-title">
                            <Link legacyBehavior href="/portfolio-two-column"><a>International</a></Link>
                            <h5><Link legacyBehavior href="/portfolio-details"><a>IT Consulting</a></Link></h5>&gt;
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
          <div className="scrollbar-and-slider-btn d-flex align-items-center justify-content-between">
            <div className="progress-pagination" />
            <div className="slider-btn-group w-100">
              <div className="slider-btn prev-4">
                <svg xmlns="http://www.w3.org/2000/svg" width={15} height={11} viewBox="0 0 15 11">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.416666 5.9668H15V4.7168H0.416666V5.9668Z" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.04115 4.7168C3.98115 4.7168 6.38281 7.3018 6.38281 10.0585V10.6835H5.13281V10.0585C5.13281 7.96596 3.26448 5.9668 1.04115 5.9668H0.416979V4.7168H1.04115Z" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.04115 5.96667C3.98115 5.96667 6.38281 3.38167 6.38281 0.625V0H5.13281V0.625C5.13281 2.71833 3.26448 4.71667 1.04115 4.71667H0.416979V5.96667H1.04115Z" />
                </svg>
              </div>
              <div className="slider-btn next-4">
                <svg xmlns="http://www.w3.org/2000/svg" width={15} height={11} viewBox="0 0 15 11">
                  <path fillRule="evenodd" clipRule="evenodd" d="M14.5833 5.9668H0V4.7168H14.5833V5.9668Z" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M13.9589 4.7168C11.0189 4.7168 8.61719 7.3018 8.61719 10.0585V10.6835H9.86719V10.0585C9.86719 7.96596 11.7355 5.9668 13.9589 5.9668H14.583V4.7168H13.9589Z" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M13.9589 5.96667C11.0189 5.96667 8.61719 3.38167 8.61719 0.625V0H9.86719V0.625C9.86719 2.71833 11.7355 4.71667 13.9589 4.71667H14.583V5.96667H13.9589Z" />
                </svg>
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

export default Portfolio
