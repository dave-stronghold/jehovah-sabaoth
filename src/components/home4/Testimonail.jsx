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

const Testimonail = () => {
    const setting = useMemo(()=>{
        return {
            slidesPerView: 1,
        speed: 1500,
        spaceBetween: 25,
        loop: true,
        effect: 'fade',             // Use the fade effect
		fadeEffect: {
		  crossFade: true           // Enable cross-fade transition
		},
        autoplay: {
         delay: 2500, // Autoplay duration in milliseconds
         disableOnInteraction: false,
        },
        pagination: {
            el: '.pagination-3',
            clickable: true,
        },
        navigation: {
			nextEl: ".next-3",
			prevEl: ".prev-3",
		},
        }
    },[])
  return (
    <div className="testimonial-section2 three mb-130">
  <div className="container-fluid one pl--95">
    <div className="row">
      <div className="col-lg-12">
        <div className="tastimonial-wrap2 two three">
          <Swiper {...setting} className="swiper testimonial-slider3">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-card two">
                  <div className="testimonial-img magnetic-item">
                    <span className="sharp1" />
                    <img src="assets/img/home2/testimonial-img.jpg" alt="" />
                  </div>
                  <div className="testimonal-content">
                    <span>Great Consulting!</span>
                    <p>The consulting engagement begins with the consultant or consulting team
                      working closely with the client to understand the client's business,
                      goals, challenges, and objectives.</p>
                    <div className="author-area">
                      <div className="content">
                        <h6>Mrs. Emily Sophia</h6>
                        <span>Froxio, CEO</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-card two">
                  <div className="testimonial-img magnetic-item">
                    <span className="sharp1" />
                    <img src="assets/img/home2/testimonial-img2.jpg" alt="" />
                  </div>
                  <div className="testimonal-content">
                    <span>Friendly Consulting!</span>
                    <p>The specific services offered by business consultants can vary widely depending on the consultant's expertise and the needs of the client. Consultants typically work closely with their clients.</p>
                    <div className="author-area">
                      <div className="content">
                        <h6>Mr. Thomas Robert</h6>
                        <span>Maxcrio, HR</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-card two">
                  <div className="testimonial-img magnetic-item">
                    <span className="sharp1" />
                    <img src="assets/img/home2/testimonial-img3.jpg" alt="" />
                  </div>
                  <div className="testimonal-content">
                    <span>Super Consulting!</span>
                    <p>The information you might include in a Managing Director's profile or information list typically consists of the individual's background, experience, and responsibilities within a company.</p>
                    <div className="author-area">
                      <div className="content">
                        <h6>Mrs. Flurance Miyagi</h6>
                        <span>Nurio, CEO</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
          <div className="pagination-wrap">
            <div className="pagination-3" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Testimonail
