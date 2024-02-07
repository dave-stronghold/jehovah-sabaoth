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

const CoverArea = () => {
   const slideSetting = useMemo(()=>{
    return{
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
			el: ".progress-pagination2",
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
				slidesPerView: 4
			},
		}
    }
  },[])
  return (
    <div className="home6-cover-area pt-130 mb-130 ">
    <div className="container-fluid one">
      <div className="row">
        <div className="col-lg-12 pl--95 gap-lg-5 gap-4 d-flex flex-lg-nowrap flex-wrap align-items-end justify-content-between mb-60">
          <div className="section-title1 two">
            <span>Our Cover Area</span>
            <h2>Conduct market research to understand industry trends, competition, and customer behavior.</h2>
          </div>
          <Link legacyBehavior href="/services1">
            <a className="explore-btn">
            Explore Area
            <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
            </svg>
            </a>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <Swiper {...slideSetting} className="swiper cover-slider-with-progress">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="eg-card4">
                  <div className="card-img">
                    <img src="assets/img/home6/services-01.jpg" alt="" />
                  </div>
                  <div className="card-content">
                    <Link legacyBehavior href="/services1"><a>Marketing</a></Link>
                    <div className="title-and-btn">
                      <h4><Link legacyBehavior href="/service-details"><a>Marketing Research</a></Link></h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="eg-card4">
                  <div className="card-img">
                    <img src="assets/img/home6/services-02.jpg" alt="" />
                  </div>
                  <div className="card-content">
                    <Link legacyBehavior href="/services1"><a>Finance</a></Link>
                    <div className="title-and-btn">
                      <h4><Link legacyBehavior href="/service-details"><a>Finance Consulting</a></Link></h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="eg-card4">
                  <div className="card-img">
                    <img src="assets/img/home6/services-03.jpg" alt="" />
                  </div>
                  <div className="card-content">
                    <Link legacyBehavior href="/services1"><a>Finance</a></Link>
                    <div className="title-and-btn">
                      <h4><Link legacyBehavior href="/service-details"><a>Management Consulting</a></Link></h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="eg-card4">
                  <div className="card-img">
                    <img src="assets/img/home6/services-04.jpg" alt="" />
                  </div>
                  <div className="card-content">
                    <Link legacyBehavior href="/services1"><a>Business</a></Link>
                    <div className="title-and-btn">
                      <h4><Link legacyBehavior href="/service-details"><a>International Business</a></Link></h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="eg-card4">
                  <div className="card-img">
                    <img src="assets/img/home6/services-01.jpg" alt="" />
                  </div>
                  <div className="card-content">
                    <Link legacyBehavior href="/services1"><a>Marketing</a></Link>
                    <div className="title-and-btn">
                      <h4><Link legacyBehavior href="/service-details"><a>Marketing Research</a></Link></h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="eg-card4">
                  <div className="card-img">
                    <img src="assets/img/home6/services-02.jpg" alt="" />
                  </div>
                  <div className="card-content">
                    <Link legacyBehavior href="/services1"><a>Finance</a></Link>
                    <div className="title-and-btn">
                      <h4><Link legacyBehavior href="/service-details"><a>Finance Consulting</a></Link></h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="eg-card4">
                  <div className="card-img">
                    <img src="assets/img/home6/services-03.jpg" alt="" />
                  </div>
                  <div className="card-content">
                    <Link legacyBehavior href="/services1"><a>Finance</a></Link>
                    <div className="title-and-btn">
                      <h4><Link legacyBehavior href="/service-details"><a>Management Consulting</a></Link></h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="eg-card4">
                  <div className="card-img">
                    <img src="assets/img/home6/services-04.jpg" alt="" />
                  </div>
                  <div className="card-content">
                    <Link legacyBehavior href="/services1"><a>Business</a></Link>
                    <div className="title-and-btn">
                      <h4><Link legacyBehavior href="/service-details"><a>International Business</a></Link></h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
        <div className="col-lg-12">
          <div className="scrollbar-and-slider-btn d-flex align-items-center justify-content-between">
            <div className="progress-pagination2" />
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
  
  )
}

export default CoverArea
