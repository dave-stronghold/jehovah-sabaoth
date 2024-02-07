import React, { useMemo, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);

const Gallary = () => {
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });
  const slideSetting = useMemo(() => {
    return {
      speed: 5000,
      spaceBetween: 30,
      autoplay: {
        delay: 100, 
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
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
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
    <div className="gallery-section overflow-hidden mb-130">
      <div className="row">
        <div className="col-lg-12">
          <Swiper {...slideSetting} className="swiper gallery-slider">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="gallery-wrap">
                  <div
                    data-fancybox="gallery2"
                    href="assets/img/home3/home3-gallery-img-01.jpg"
                    onClick={() =>
                      setOpenimg({ openingState: true, openingIndex: 0 })
                    }
                  >
                    <img
                      src="assets/img/home3/home3-gallery-img-01.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="gallery-wrap">
                  <div
                   onClick={() =>
                    setOpenimg({ openingState: true, openingIndex: 1 })
                  }
                    data-fancybox="gallery2"
                    href="assets/img/home3/home3-gallery-img-02.jpg"
                  >
                    <img
                      src="assets/img/home3/home3-gallery-img-02.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="gallery-wrap">
                  <div onClick={() =>
                      setOpenimg({ openingState: true, openingIndex: 2 })
                    }
                    data-fancybox="gallery2"
                    href="assets/img/home3/home3-gallery-img-03.jpg"
                  >
                    <img
                      src="assets/img/home3/home3-gallery-img-03.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="gallery-wrap">
                  <div
                   onClick={() =>
                    setOpenimg({ openingState: true, openingIndex: 3 })
                  }
                    data-fancybox="gallery2"
                    href="assets/img/home3/home3-gallery-img-01.jpg"
                  >
                    <img
                      src="assets/img/home3/home3-gallery-img-01.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="gallery-wrap">
                  <div
                   onClick={() =>
                    setOpenimg({ openingState: true, openingIndex: 4 })
                  }
                    data-fancybox="gallery2"
                    href="assets/img/home3/home3-gallery-img-02.jpg"
                  >
                    <img
                      src="assets/img/home3/home3-gallery-img-02.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="gallery-wrap">
                  <div
                   onClick={() =>
                    setOpenimg({ openingState: true, openingIndex: 5 })
                  }
                    data-fancybox="gallery2"
                    href="assets/img/home3/home3-gallery-img-03.jpg"
                  >
                    <img
                      src="assets/img/home3/home3-gallery-img-03.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
        <Lightbox
        className="img-fluid"
        open={isOpenimg.openingState}
        plugins={[Fullscreen]}
        index={isOpenimg.openingIndex}
        close={() => setOpenimg(false)}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
        slides={[
          { src: "assets/img/home3/home3-gallery-img-01.jpg" },
          { src: "assets/img/home3/home3-gallery-img-02.jpg" },
          { src: "assets/img/home3/home3-gallery-img-03.jpg" },
          { src: "assets/img/home3/home3-gallery-img-01.jpg" },
          { src: "assets/img/home3/home3-gallery-img-02.jpg" },
          { src: "assets/img/home3/home3-gallery-img-03.jpg" },
         
        ]}
      />
    </div>
  );
};

export default Gallary;
