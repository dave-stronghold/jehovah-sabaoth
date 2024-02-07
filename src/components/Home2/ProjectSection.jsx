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

const ProjectSection = () => {
  const slideSetting = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 2000,
      spaceBetween: 24,
      loop: true,
      autoplay: {
        delay: 3500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
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
          slidesPerView: 4,
        },
      },
    };
  }, []);
  return (
    <div className="project-section mb-130">
      <div className="container-fluid one">
        <div className="row g-4">
          <div className="col-lg-12 pl--95 gap-lg-5 gap-4 d-flex flex-lg-nowrap flex-wrap align-items-start justify-content-between mb-60">
            <div className="section-title1 one">
              <span>Cover Portfolio </span>
              <h2>
                Conduct market research to understand industry competition.
              </h2>
            </div>
            <Link legacyBehavior href="/portfolio-three-column-tab">
              <a className="explore-btn">
                Explore Portfolio
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                  />
                </svg>
              </a>
            </Link>
          </div>
          <div className="col-lg-12">
            <Swiper {...slideSetting} className="swiper project-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="project-card">
                    <div className="project-img">
                      <img src="assets/img/home2/project-01.jpg" alt="" />
                    </div>
                    <div className="project-content">
                      <div className="category-title">
                        <div className="category">
                          <Link legacyBehavior href="/portfolio-two-column">
                            <a>Technology</a>
                          </Link>
                        </div>
                        <h4>
                          <Link legacyBehavior href="/portfolio-details">
                            <a>Information Technology (IT)</a>
                          </Link>
                        </h4>
                      </div>
                      <Link legacyBehavior href="/portfolio-details">
                        <a className="explore-btn">
                          Explore More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={12}
                            height={12}
                            viewBox="0 0 12 12"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                            />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="project-card">
                    <div className="project-img">
                      <img src="assets/img/home2/project-02.jpg" alt="" />
                    </div>
                    <div className="project-content">
                      <div className="category-title">
                        <div className="category">
                          <Link legacyBehavior href="/portfolio-two-column">
                            <a>Business</a>
                          </Link>
                        </div>
                        <h4>
                          <Link legacyBehavior href="/portfolio-details">
                            <a>International Business</a>
                          </Link>
                        </h4>
                      </div>
                      <Link legacyBehavior href="/portfolio-details">
                        <a className="explore-btn">
                          Explore More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={12}
                            height={12}
                            viewBox="0 0 12 12"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                            />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="project-card">
                    <div className="project-img">
                      <img src="assets/img/home2/project-03.jpg" alt="" />
                    </div>
                    <div className="project-content">
                      <div className="category-title">
                        <div className="category">
                          <Link legacyBehavior href="/portfolio-two-column">
                            <a>Marketing</a>
                          </Link>
                        </div>
                        <h4>
                          <Link legacyBehavior href="/portfolio-details">
                            <a>Marketing Research</a>
                          </Link>
                        </h4>
                      </div>
                      <Link legacyBehavior href="/portfolio-details">
                        <a className="explore-btn">
                          Explore More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={12}
                            height={12}
                            viewBox="0 0 12 12"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                            />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="project-card">
                    <div className="project-img">
                      <img src="assets/img/home2/project-04.jpg" alt="" />
                    </div>
                    <div className="project-content">
                      <div className="category-title">
                        <div className="category">
                          <Link legacyBehavior href="/portfolio-two-column">
                            <a>Business</a>
                          </Link>
                        </div>
                        <h4>
                          <Link legacyBehavior href="/portfolio-details">
                            <a>Human Resources</a>
                          </Link>
                        </h4>
                      </div>
                      <Link legacyBehavior href="/portfolio-details">
                        <a className="explore-btn">
                          Explore More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={12}
                            height={12}
                            viewBox="0 0 12 12"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                            />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="project-card">
                    <div className="project-img">
                      <img src="assets/img/home2/project-05.jpg" alt="" />
                    </div>
                    <div className="project-content">
                      <div className="category-title">
                        <div className="category">
                          <Link legacyBehavior href="/portfolio-two-column">
                            <a>Consulting</a>
                          </Link>
                        </div>
                        <h4>
                          <Link legacyBehavior href="/portfolio-details">
                            <a>Finance Consulting</a>
                          </Link>
                        </h4>
                      </div>
                      <Link legacyBehavior href="/portfolio-details">
                        <a className="explore-btn">
                          Explore More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={12}
                            height={12}
                            viewBox="0 0 12 12"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                            />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="project-card">
                    <div className="project-img">
                      <img src="assets/img/home2/project-01.jpg" alt="" />
                    </div>
                    <div className="project-content">
                      <div className="category-title">
                        <div className="category">
                          <Link legacyBehavior href="/portfolio-two-column">
                            <a>Technology</a>
                          </Link>
                        </div>
                        <h4>
                          <Link legacyBehavior href="/portfolio-details">
                            <a>Information Technology (IT)</a>
                          </Link>
                        </h4>
                      </div>
                      <Link legacyBehavior href="/portfolio-details">
                        <a className="explore-btn">
                          Explore More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={12}
                            height={12}
                            viewBox="0 0 12 12"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                            />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="project-card">
                    <div className="project-img">
                      <img src="assets/img/home2/project-02.jpg" alt="" />
                    </div>
                    <div className="project-content">
                      <div className="category-title">
                        <div className="category">
                          <Link legacyBehavior href="/portfolio-two-column">
                            <a>Business</a>
                          </Link>
                        </div>
                        <h4>
                          <Link legacyBehavior href="/portfolio-details">
                            <a>International Business</a>
                          </Link>
                        </h4>
                      </div>
                      <Link legacyBehavior href="/portfolio-details">
                        <a className="explore-btn">
                          Explore More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={12}
                            height={12}
                            viewBox="0 0 12 12"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                            />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="project-card">
                    <div className="project-img">
                      <img src="assets/img/home2/project-03.jpg" alt="" />
                    </div>
                    <div className="project-content">
                      <div className="category-title">
                        <div className="category">
                          <Link legacyBehavior href="/portfolio-two-column">
                            <a>Marketing</a>
                          </Link>
                        </div>
                        <h4>
                          <Link legacyBehavior href="/portfolio-details">
                            <a>Marketing Research</a>
                          </Link>
                        </h4>
                      </div>
                      <Link legacyBehavior href="/portfolio-details">
                        <a className="explore-btn">
                          Explore More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={12}
                            height={12}
                            viewBox="0 0 12 12"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                            />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="project-card">
                    <div className="project-img">
                      <img src="assets/img/home2/project-04.jpg" alt="" />
                    </div>
                    <div className="project-content">
                      <div className="category-title">
                        <div className="category">
                          <Link legacyBehavior href="/portfolio-two-column">
                            <a>Business</a>
                          </Link>
                        </div>
                        <h4>
                          <Link legacyBehavior href="/portfolio-details">
                            <a>Human Resources</a>
                          </Link>
                        </h4>
                      </div>
                      <Link legacyBehavior href="/portfolio-details">
                        <a className="explore-btn">
                          Explore More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={12}
                            height={12}
                            viewBox="0 0 12 12"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                            />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="project-card">
                    <div className="project-img">
                      <img src="assets/img/home2/project-05.jpg" alt="" />
                    </div>
                    <div className="project-content">
                      <div className="category-title">
                        <div className="category">
                          <Link legacyBehavior href="/portfolio-two-column">
                            <a>Consulting</a>
                          </Link>
                        </div>
                        <h4>
                          <Link legacyBehavior href="/portfolio-details">
                            <a>Finance Consulting</a>
                          </Link>
                        </h4>
                      </div>
                      <Link legacyBehavior href="/portfolio-details">
                        <a className="explore-btn">
                          Explore More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={12}
                            height={12}
                            viewBox="0 0 12 12"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                            />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
