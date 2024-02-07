import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);

const Banner = () => {
  const [isLoading, setLoading] = useState(false);

  const handleMouseEnter = (event) => {
    setLoading(true);

    const value = event.target.getAttribute("data-src");
    const bannerBg = document.getElementById("home3-banner-bg");

    // Simulate loading delay
    setTimeout(() => {
      bannerBg.style.transition = "opacity 0.5s ease-in-out";
      bannerBg.style.opacity = 0;

      // Set a brief delay to ensure the opacity transition has time to start
      setTimeout(() => {
        bannerBg.style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url('${value}')`;
        bannerBg.style.opacity = 1;
        setLoading(false);
      }, 50);
    }, 100); // Simulate loading time, adjust as needed
  };

  useEffect(() => {
    const bannerHovers = document.querySelectorAll(".banner-hover");

    const handleMouseEnterEvent = (event) => {
      handleMouseEnter(event);
    };

    bannerHovers.forEach((bannerHover) => {
      bannerHover.addEventListener("mouseenter", handleMouseEnterEvent);
    });

    return () => {
      bannerHovers.forEach((bannerHover) => {
        bannerHover.removeEventListener("mouseenter", handleMouseEnterEvent);
      });
    };
  }, []); // Empty dependency array to run the effect only once on mount

  const slideSetting = useMemo(() => {
    return {
      slidesPerView: 1,
      speed: 1500,
      spaceBetween: 0,
      navigation: {
        nextEl: ".next-1",
        prevEl: ".prev-1",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    };
  }, []);
  return (
    <div className="banner3-section">
      <div id="home3-banner-bg" />
      <div className="banner-wrapper">
        <Swiper {...slideSetting} className="swiper banner3-slider">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div
                className="eg-card3 banner-hover"
                data-src="assets/img/home3/banner-img-02.jpg"
              >
                <div className="card-content">
                  <div className="catgory-and-title">
                    <Link legacyBehavior href="/services1">
                      <a>Business</a>
                    </Link>
                    <h5>
                      <Link legacyBehavior href="/service-details">
                        <a>Human Resources</a>
                      </Link>
                    </h5>
                  </div>
                  <p>
                    It’s helps businesses make informed decisions about their
                    products, services.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="eg-card3 banner-hover"
                data-src="assets/img/home3/banner-img-03.jpg"
              >
                <div className="card-content">
                  <div className="catgory-and-title">
                    <Link legacyBehavior href="/services1">
                      <a>Consulting</a>
                    </Link>
                    <h5>
                      <Link legacyBehavior href="/service-details">
                        <a>Finance Consulting</a>
                      </Link>
                    </h5>
                  </div>
                  <p>
                    It’s helps businesses make informed decisions about their
                    products, services.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="eg-card3 banner-hover"
                data-src="assets/img/home3/banner-img-04.jpg"
              >
                <div className="card-content">
                  <div className="catgory-and-title">
                    <Link legacyBehavior href="/services1">
                      <a>Tech</a>
                    </Link>
                    <h5>
                      <Link legacyBehavior href="/service-details">
                        <a>Technology</a>
                      </Link>
                    </h5>
                  </div>
                  <p>
                    Providing financial advice, including cost reduction
                    strategies, financial planning.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="eg-card3 banner-hover"
                data-src="assets/img/home2/banner-img-02.jpg"
              >
                <div className="card-content">
                  <div className="catgory-and-title">
                    <Link legacyBehavior href="/services1">
                      <a>Health</a>
                    </Link>
                    <h5>
                      <Link legacyBehavior href="/service-details">
                        <a>Health Care</a>
                      </Link>
                    </h5>
                  </div>
                  <p>
                    Health and care consulting refers to the practice of
                    providing expert advice.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="eg-card3 banner-hover"
                data-src="assets/img/home3/banner-img-01.png"
              >
                <div className="card-content">
                  <div className="catgory-and-title">
                    <Link legacyBehavior href="/services1">
                      <a>Business</a>
                    </Link>
                    <h5>
                      <Link legacyBehavior href="/service-details">
                        <a>International Business</a>
                      </Link>
                    </h5>
                  </div>
                  <p>
                    It’s helps businesses make informed decisions about their
                    products, services.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="eg-card3 banner-hover"
                data-src="assets/img/home2/banner-img-01.jpg"
              >
                <div className="card-content">
                  <div className="catgory-and-title">
                    <Link legacyBehavior href="/services1">
                      <a>Marketing</a>
                    </Link>
                    <h5>
                      <Link legacyBehavior href="/service-details">
                        <a>Marketing Research</a>
                      </Link>
                    </h5>
                  </div>
                  <p>
                    It’s helps businesses make informed decisions about their
                    products, services.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
