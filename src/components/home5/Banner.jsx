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

const Banner = () => {
  const slideSetting = useMemo(() => {
    return {
      slidesPerView: 1,
      speed: 1500,
      spaceBetween: 25,
      effect: "fade", // Use the fade effect
      fadeEffect: {
        crossFade: true, // Enable cross-fade transition
      },
      navigation: {
        nextEl: ".next-10",
        prevEl: ".prev-10",
      },
    };
  });
  return (
    <div className="banner5-section">
      <Swiper {...slideSetting} className="swiper home5-banner-slider">
        <div className="slider-btn-group2">
          <div className="slider-btn prev-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={34}
              height={34}
              viewBox="0 0 34 34"
            >
              <g>
                <path d="M13.6198 4.1573C13.4139 3.95144 13.4139 3.61277 13.6198 3.40691L16.8737 0.153006C17.0795 -0.0528534 17.4182 -0.0528534 17.6241 0.153006C17.8299 0.358865 17.8299 0.697537 17.6241 0.903397L15.2799 3.24754H24.8026C25.0948 3.24754 25.3338 3.4866 25.3338 3.77879C25.3338 4.07097 25.0948 4.31004 24.8026 4.31004H15.2799L17.6241 6.65418C17.8299 6.86004 17.8299 7.19871 17.6241 7.40457C17.5178 7.51082 17.385 7.5573 17.2455 7.5573C17.1061 7.5573 16.9733 7.50418 16.867 7.40457L13.6198 4.1573ZM30.5534 28.4221L21.0108 33.9272C20.9244 33.9737 20.8381 34.0003 20.7451 34.0003C20.5592 34.0003 20.3799 33.9073 20.2869 33.7346L18.1686 30.069C17.9229 29.9163 16.9866 29.4116 14.908 29.1593C11.3221 28.7276 7.96195 24.9557 7.35101 21.8745C7.02562 20.2276 7.47054 18.9128 8.61273 18.1292L3.53929 9.35027C3.1807 8.72605 3.08109 7.99558 3.27366 7.29168C3.4596 6.59441 3.91116 6.01004 4.53538 5.65144C5.05335 5.35262 5.65101 5.23308 6.24202 5.31277C5.52484 4.02449 5.96976 2.38426 7.2514 1.64715C8.54632 0.903397 10.2065 1.34168 10.9502 2.6366L15.3397 10.2401C15.5655 9.68894 15.9639 9.23074 16.4819 8.93191C17.7768 8.18816 19.4303 8.63308 20.1807 9.92136L20.4065 10.3132C20.6323 9.76199 21.0307 9.30379 21.5487 9.00496C22.1729 8.64637 22.9034 8.54676 23.6006 8.73933C24.3045 8.92527 24.8889 9.37683 25.2475 10.0011C26.9541 12.9561 28.6143 16.1835 28.5944 20.3007C28.5944 20.978 28.5811 21.5358 28.5744 21.9874C28.5412 24.0925 28.5412 24.0925 29.451 25.5468C29.7631 26.0448 30.1948 26.7288 30.7459 27.6983C30.8987 27.9507 30.8123 28.2761 30.5534 28.4221ZM29.5639 27.7647C29.1455 27.0542 28.8069 26.5163 28.5545 26.1112C27.5053 24.4311 27.4721 24.3182 27.5119 21.9675C27.5186 21.5225 27.5319 20.9647 27.5319 20.294C27.5518 16.4425 25.958 13.3612 24.3244 10.5323C24.1053 10.1538 23.7534 9.88152 23.3217 9.76863C22.8967 9.65574 22.4518 9.71551 22.0733 9.92801C21.6948 10.1471 21.4225 10.4991 21.3096 10.9307C21.1967 11.3557 21.2498 11.794 21.469 12.1659L22.7639 14.4038C22.91 14.6561 22.8237 14.9815 22.5713 15.1276C22.485 15.1741 22.3987 15.2007 22.3057 15.2007C22.1198 15.2007 21.9405 15.1077 21.8475 14.935L20.5659 12.7104V12.7038L20.5592 12.6971L19.2577 10.4526C18.8061 9.66902 17.7967 9.39676 17.0131 9.84832C16.6346 10.0675 16.3623 10.4194 16.2494 10.8511C16.1366 11.2761 16.1897 11.7143 16.4022 12.0862L18.992 16.5753C19.1381 16.8276 19.0518 17.153 18.7994 17.2991C18.5471 17.4452 18.2217 17.3589 18.0756 17.1065L15.4924 12.6374V12.6307C15.4924 12.6241 15.4858 12.6241 15.4858 12.6175L10.0205 3.16785C9.56898 2.38426 8.5596 2.11199 7.77601 2.56355C6.99241 3.01512 6.72015 4.02449 7.17171 4.80808L15.2201 18.7534C15.3662 19.0057 15.2799 19.3311 15.0276 19.4772C14.9412 19.5237 14.8549 19.5503 14.7619 19.5503C14.576 19.5503 14.3967 19.4573 14.3037 19.2846L7.3178 7.19207C7.31116 7.18543 7.31116 7.17879 7.30452 7.17215C7.08538 6.79363 6.73343 6.52137 6.30843 6.40847C5.88343 6.29558 5.43851 6.34871 5.05999 6.56785C4.68148 6.78699 4.40921 7.13894 4.29632 7.56394C4.18343 7.98894 4.23655 8.43386 4.4557 8.81238L12.1522 22.1401C12.2983 22.3925 12.2119 22.7178 11.9596 22.8639C11.7073 23.01 11.3819 22.9237 11.2358 22.6714L9.15062 19.0589C8.24085 19.7428 8.23421 20.8386 8.40023 21.6686C8.93148 24.3382 11.9463 27.7315 15.0475 28.1034C17.8233 28.4354 18.8127 29.1991 18.919 29.2854C18.9655 29.3253 19.0119 29.3718 19.0385 29.4315L20.951 32.7386L29.5639 27.7647Z" />
              </g>
            </svg>
          </div>
          <div className="slider-btn next-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={34}
              height={34}
              viewBox="0 0 34 34"
            >
              <path d="M20.3798 4.1573C20.5856 3.95144 20.5856 3.61277 20.3798 3.40691L17.1258 0.153006C16.92 -0.0528534 16.5813 -0.0528534 16.3755 0.153006C16.1696 0.358865 16.1696 0.697537 16.3755 0.903397L18.7196 3.24754H9.19694C8.90475 3.24754 8.66569 3.4866 8.66569 3.77879C8.66569 4.07098 8.90475 4.31004 9.19694 4.31004H18.7196L16.3755 6.65418C16.1696 6.86004 16.1696 7.19871 16.3755 7.40457C16.4817 7.51082 16.6145 7.5573 16.754 7.5573C16.8934 7.5573 17.0262 7.50418 17.1325 7.40457L20.3798 4.1573ZM3.44616 28.4221L12.9887 33.9272C13.0751 33.9737 13.1614 34.0003 13.2544 34.0003C13.4403 34.0003 13.6196 33.9073 13.7126 33.7346L15.8309 30.069C16.0766 29.9163 17.013 29.4116 19.0915 29.1593C22.6774 28.7276 26.0376 24.9557 26.6485 21.8745C26.9739 20.2276 26.529 18.9128 25.3868 18.1292L30.4602 9.35027C30.8188 8.72605 30.9184 7.99559 30.7258 7.29168C30.5399 6.59441 30.0883 6.01004 29.4641 5.65144C28.9462 5.35262 28.3485 5.23308 27.7575 5.31277C28.4747 4.02449 28.0298 2.38426 26.7481 1.64715C25.4532 0.903397 23.793 1.34168 23.0493 2.6366L18.6598 10.2401C18.434 9.68894 18.0356 9.23074 17.5176 8.93191C16.2227 8.18816 14.5692 8.63308 13.8188 9.92137L13.593 10.3132C13.3673 9.76199 12.9688 9.30379 12.4508 9.00496C11.8266 8.64637 11.0962 8.54676 10.3989 8.73934C9.69499 8.92527 9.11061 9.37683 8.75202 10.0011C7.04538 12.9561 5.38522 16.1835 5.40514 20.3007C5.40514 20.978 5.41842 21.5358 5.42506 21.9874C5.45827 24.0925 5.45827 24.0925 4.5485 25.5468C4.23639 26.0448 3.80475 26.7288 3.25358 27.6983C3.10084 27.9507 3.18717 28.2761 3.44616 28.4221ZM4.43561 27.7647C4.85397 27.0542 5.19264 26.5163 5.44498 26.1112C6.4942 24.4311 6.52741 24.3182 6.48756 21.9675C6.48092 21.5225 6.46764 20.9647 6.46764 20.294C6.44772 16.4425 8.04147 13.3612 9.67506 10.5323C9.89421 10.1538 10.2462 9.88152 10.6778 9.76863C11.1028 9.65574 11.5477 9.71551 11.9262 9.92801C12.3048 10.1471 12.577 10.4991 12.6899 10.9307C12.8028 11.3557 12.7497 11.794 12.5305 12.1659L11.2356 14.4038C11.0895 14.6561 11.1758 14.9815 11.4282 15.1276C11.5145 15.1741 11.6008 15.2007 11.6938 15.2007C11.8798 15.2007 12.059 15.1077 12.152 14.935L13.4337 12.7104V12.7038L13.4403 12.6971L14.7419 10.4526C15.1934 9.66902 16.2028 9.39676 16.9864 9.84832C17.3649 10.0675 17.6372 10.4194 17.7501 10.8511C17.863 11.2761 17.8098 11.7143 17.5973 12.0862L15.0075 16.5753C14.8614 16.8276 14.9477 17.153 15.2001 17.2991C15.4524 17.4452 15.7778 17.3589 15.9239 17.1065L18.5071 12.6374V12.6307C18.5071 12.6241 18.5137 12.6241 18.5137 12.6175L23.979 3.16785C24.4305 2.38426 25.4399 2.11199 26.2235 2.56355C27.0071 3.01512 27.2794 4.02449 26.8278 4.80808L18.7794 18.7534C18.6333 19.0057 18.7196 19.3311 18.9719 19.4772C19.0583 19.5237 19.1446 19.5503 19.2376 19.5503C19.4235 19.5503 19.6028 19.4573 19.6958 19.2846L26.6817 7.19207C26.6883 7.18543 26.6883 7.17879 26.695 7.17215C26.9141 6.79363 27.2661 6.52137 27.6911 6.40848C28.1161 6.29558 28.561 6.34871 28.9395 6.56785C29.318 6.78699 29.5903 7.13894 29.7032 7.56394C29.8161 7.98894 29.763 8.43387 29.5438 8.81238L21.8473 22.1401C21.7012 22.3925 21.7876 22.7179 22.0399 22.8639C22.2923 23.01 22.6176 22.9237 22.7637 22.6714L24.8489 19.0589C25.7587 19.7429 25.7653 20.8386 25.5993 21.6686C25.068 24.3382 22.0532 27.7315 18.952 28.1034C16.1762 28.4354 15.1868 29.1991 15.0805 29.2854C15.034 29.3253 14.9876 29.3718 14.961 29.4315L13.0485 32.7386L4.43561 27.7647Z" />
            </svg>
          </div>
        </div>
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div className="container-fluid one pl--95">
              <div className="row">
                <div className="col-lg-12">
                  <div className="banner-wrapper">
                    <div className="banner-left d-lg-flex d-none">
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={42}
                          height={42}
                          viewBox="0 0 42 42"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M35.6529 3.71829L0 39.3693L2.63069 42L38.2817 6.34713V30.9976H42V0H11.0024V3.71829H35.6529Z"
                          />
                        </svg>
                      </div>
                      <div className="content">
                        <p>
                          Current business operations, identify areas of
                          improvement, and develop strategies and solutions to
                          address.
                        </p>
                      </div>
                    </div>
                    <div className="banner-center">
                      <div className="banner-img magnetic-item">
                        <img src="assets/img/home5/piramid.png" alt="" />
                      </div>
                      <div className="banner-content text-center">
                        <Link legacyBehavior href="/services1">
                          <a>Consulting</a>
                        </Link>
                        <h1>
                          <Link legacyBehavior href="/service-details">
                            <a>Finance Consulting</a>
                          </Link>
                        </h1>
                      </div>
                      <ul className="btn-group">
                        <li className="success-rate">
                          Success Rate <span>90%</span>
                        </li>
                        <li>
                          <a href="#">Determine Problem</a>
                        </li>
                      </ul>
                    </div>
                    <div className="banner-right d-lg-flex d-none">
                      <div className="wrapper">
                        <div className="video-info">
                          <div className="video-intro">
                            <input
                              id="video_check1"
                              className="videoInput"
                              type="checkbox"
                            />
                            <div className="video">
                              <video
                                src="assets/video/video-bg2.mp4"
                                loop
                                muted
                                autoPlay
                                playsInline
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="container-fluid one pl--95">
              <div className="row">
                <div className="col-lg-12">
                  <div className="banner-wrapper">
                    <div className="banner-left d-lg-flex d-none">
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={42}
                          height={42}
                          viewBox="0 0 42 42"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M35.6529 3.71829L0 39.3693L2.63069 42L38.2817 6.34713V30.9976H42V0H11.0024V3.71829H35.6529Z"
                          />
                        </svg>
                      </div>
                      <div className="content">
                        <p>
                          Health and care consulting refers to the practice of
                          providing expert advice and guidance.
                        </p>
                      </div>
                    </div>
                    <div className="banner-center">
                      <div className="banner-img magnetic-item">
                        <img src="assets/img/home5/piramid2.png" alt="" />
                      </div>
                      <div className="banner-content text-center">
                        <Link legacyBehavior href="/services1">
                          <a>Health</a>
                        </Link>
                        <h1>
                          <Link legacyBehavior href="/service-details">
                            <a>Health Care</a>
                          </Link>
                        </h1>
                      </div>
                      <ul className="btn-group">
                        <li className="success-rate">
                          Success Rate <span>90%</span>
                        </li>
                        <li>
                          <a href="#">Determine Problem</a>
                        </li>
                      </ul>
                    </div>
                    <div className="banner-right d-lg-flex d-none">
                      <div className="wrapper">
                        <div className="video-info">
                          <div className="video-intro">
                            <input
                              id="video_check2"
                              className="videoInput"
                              type="checkbox"
                            />
                            <div className="video">
                              <video
                                src="assets/video/video-bg2.mp4"
                                loop
                                muted
                                autoPlay
                                playsInline
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="container-fluid one pl--95">
              <div className="row">
                <div className="col-lg-12">
                  <div className="banner-wrapper">
                    <div className="banner-left d-lg-flex d-none">
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={42}
                          height={42}
                          viewBox="0 0 42 42"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M35.6529 3.71829L0 39.3693L2.63069 42L38.2817 6.34713V30.9976H42V0H11.0024V3.71829H35.6529Z"
                          />
                        </svg>
                      </div>
                      <div className="content">
                        <p>
                          Helping clients improve their marketing and sales
                          strategies to increase revenue and market share.
                        </p>
                      </div>
                    </div>
                    <div className="banner-center">
                      <div className="banner-img magnetic-item">
                        <img src="assets/img/home5/piramid3.png" alt="" />
                      </div>
                      <div className="banner-content text-center">
                        <Link legacyBehavior href="/services1">
                          <a>Marketing</a>
                        </Link>
                        <h1>
                          <Link legacyBehavior href="/service-details">
                            <a>Marketing Research</a>
                          </Link>
                        </h1>
                      </div>
                      <ul className="btn-group">
                        <li className="success-rate">
                          Success Rate <span>90%</span>
                        </li>
                        <li>
                          <a href="#">Determine Problem</a>
                        </li>
                      </ul>
                    </div>
                    <div className="banner-right d-lg-flex d-none">
                      <div className="wrapper">
                        <div className="video-info">
                          <div className="video-intro">
                            <input
                              id="video_check3"
                              className="videoInput"
                              type="checkbox"
                            />
                            <div className="video">
                              <video
                                src="assets/video/video-bg2.mp4"
                                loop
                                muted
                                autoPlay
                                playsInline
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
