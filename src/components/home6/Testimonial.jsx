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

const Testimonial = () => {
    const slideSetting = useMemo(()=>{
    return{
      slidesPerView: 1,
        speed: 1500,
        spaceBetween: 25,
        loop: true,
        effect: 'fade',             // Use the fade effect
		fadeEffect: {
		  crossFade: true           // Enable cross-fade transition
		},
        autoplay: {
         delay: 4000, // Autoplay duration in milliseconds
         disableOnInteraction: false,
        },
        pagination: {
            el: '.franctional-pagi1',
            type: "fraction",
        },
        navigation: {
			nextEl: ".next-2",
			prevEl: ".prev-2",
		},
    }
  },[])
  return (
    <div className="testimonial-section mb-130">
  <div className="container-fluid one">
    <div className="row g-4">
      <div className="col-lg-4">
        <div className="testimonial-img-with-logo two">
          <img src="assets/img/home6/testi-left-01.jpg" alt="" />
          <div className="logo">
            <img src="assets/img/home1/white-logo.svg" alt="" />
          </div>
          <div className="review-area">
            <a href="#" className="review-area white">
              <div className="review-name">
                <span>Review On</span>
                <img src="assets/img/home1/clutch-logo.svg" alt="" />
              </div>
              <div className="review">
                <ul>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-half" /></li>
                </ul>
                <span>(50 reviews)</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="testimonial-wrap two">
          <Swiper {...slideSetting} className="swiper testimonial-slider">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-card">
                  <span>Great Consulting!</span>
                  <p>Consultants can help organizations navigate change, optimize their operations, and stay competitive in a rapidly evolving business environment.</p>
                  <div className="author-area">
                    <div className="author-img">
                      <img src="assets/img/home1/testi-oth-01.png" alt="" />
                    </div>
                    <div className="content">
                      <h6>Mr. Daniel Scoot</h6>
                      <span>Froxio, CEO</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-card">
                  <span>Great Consulting!</span>
                  <p>You can adjust the length and style of the line to match the overall design and formatting of your document. Some other divider options include dashes, stars, or even a graphical element.</p>
                  <div className="author-area">
                    <div className="author-img">
                      <img src="assets/img/home1/testi-oth-02.png" alt="" />
                    </div>
                    <div className="content">
                      <h6>Mr. Rakhab Uddin</h6>
                      <span>Nurio, CEO</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-card">
                  <span>Great Consulting!</span>
                  <p>The information you might include in a Managing Director's profile or information list typically consists of the individual's background, experience, and responsibilities within a company.</p>
                  <div className="author-area">
                    <div className="author-img">
                      <img src="assets/img/home1/testi-oth-03.png" alt="" />
                    </div>
                    <div className="content">
                      <h6>Mrs. Flurance Miyagi</h6>
                      <span>Froxio, CEO</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <dSwiperSlideiv className="swiper-slide">
                <div className="testimonial-card">
                  <span>Great Consulting!</span>
                  <p>The specific services offered by business consultants can vary widely depending on the consultant's expertise and the needs of the client. Consultants typically work closely with their clients.</p>
                  <div className="author-area">
                    <div className="author-img">
                      <img src="assets/img/home1/testi-oth-04.png" alt="" />
                    </div>
                    <div className="content">
                      <h6>Mr. Thomas Robert</h6>
                      <span>Maxcrio, HR</span>
                    </div>
                  </div>
                </div>
              </dSwiperSlideiv>
            </div>
          </Swiper>
          <div className="slider-btn-area">
            <div className="franctional-pagi1" />
            <div className="slider-btn-group w-100">
              <div className="slider-btn prev-2">
                <svg xmlns="http://www.w3.org/2000/svg" width={15} height={11} viewBox="0 0 15 11">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.416666 5.9668H15V4.7168H0.416666V5.9668Z" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.04115 4.7168C3.98115 4.7168 6.38281 7.3018 6.38281 10.0585V10.6835H5.13281V10.0585C5.13281 7.96596 3.26448 5.9668 1.04115 5.9668H0.416979V4.7168H1.04115Z" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.04115 5.96667C3.98115 5.96667 6.38281 3.38167 6.38281 0.625V0H5.13281V0.625C5.13281 2.71833 3.26448 4.71667 1.04115 4.71667H0.416979V5.96667H1.04115Z" />
                </svg>
              </div>
              <div className="slider-btn next-2">
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

export default Testimonial
