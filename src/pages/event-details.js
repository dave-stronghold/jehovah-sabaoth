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
import MainLayout from "../components/layout/MainLayout";

const EventDetailsPage = () => {
  const slideSetting = useMemo(() => {
    return {
      speed: 1500,
      spaceBetween: 30,
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      effect: "fade", // Use the fade effect
      fadeEffect: {
        crossFade: true, // Enable cross-fade transition
      },
      pagination: {
        el: ".event-pagination",
        clickable: "true",
      },
    };
  }, []);
  const slideSetting2 = useMemo(() => {
    return {
      slidesPerView: 1,
      speed: 1500,
      spaceBetween: 25,
      loop: true,
      effect: "fade", // Use the fade effect
      fadeEffect: {
        crossFade: true, // Enable cross-fade transition
      },
      autoplay: {
        delay: 4000, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      pagination: {
        el: ".event-fractional-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".next-4",
        prevEl: ".prev-4",
      },
    };
  }, []);
  return (
    <MainLayout>
      <div className="event-details-page pt-130 mb-130">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-8">
              <div className="section-title1">
                <h2>
                  Firewings Youth Camp April 2024
                </h2>
              </div>
              <ul className="event-info mb-60">
                <li>
                  <strong>Date:</strong>(11-13) April, 2024
                </li>
                <li>
                  <strong>Time :</strong>10:00 am to 4:00 pm (3 Days)
                </li>
                <li>
                  <strong>Venue:</strong>Mowbray College Camp Site, Rajaphilla
                  Mawatha, Kandy
                </li>
              </ul>
              <Swiper
                {...slideSetting}
                className="swiper event-img-slider mb-20"
              >
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="event-img">
                      <img
                        src="assets/img/inner-pages/gallery-img-01.jpg"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="event-img">
                      <img
                        src="assets/img/inner-pages/gallery-img-02.jpg"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="event-img">
                      <img
                        src="assets/img/inner-pages/gallery-img-03.jpg"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                </div>
                <div className="event-pagination" />
              </Swiper>
              <div className="pic-cap-and-sicial">
                <div className="pic-cap">
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
                  P.C Event Gallery
                </div>
                <ul className="social-link d-flex align-items-center">
                  <li>
                    <a href="https://www.facebook.com/">
                      <i className="bx bxl-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/">
                      <i className="bx bxl-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/">
                      <i className="bx bxl-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
              <h3>Agenda &amp; Schedule</h3>
              <p>
                Prepare for an enriching experience at our Youth Camp, where
                we'll dive into inspiring topics and activities designed to
                strengthen faith and foster community
              </p>
              <div class="event-fetures mt-30 mb-40">
                <h6>
                  <span>Day-01 :</span> Opening Ceremony and Inspirational
                  Sessions
                </h6>
                <p>
                  Join us as we kick off our event with an uplifting opening
                  ceremony and keynote sessions that set the spiritual tone for
                  the days ahead.
                </p>
                <ul className="feature-list">
                  <li>Event Introduction and Welcome</li>
                  <li>Inspirational Keynote Address</li>
                  <li>Exploring Faith in Modern Times</li>
                  <li>Understanding the Role of Faith in Everyday Life</li>
                  <li>Testimonials of Spiritual Journeys</li>
                </ul>
              </div>
              <div class="event-fetures mb-40">
                <h6>
                  <span>Day-02 :</span> Deepening Faith and Spiritual Growth
                </h6>
                <p>
                  Delve deeper into your spiritual journey with sessions focused
                  on enhancing faith and fostering spiritual growth.
                </p>
                <ul className="feature-list">
                  <li>Bible Study and Reflection</li>
                  <li>Prayer and Meditation</li>
                  <li>Discovering Your Spiritual Gifts</li>
                  <li>Workshops: Strengthening Your Relationship with God</li>
                </ul>
              </div>
              <div class="event-fetures mb-40">
                <h6>
                  <span>Day-03 :</span> Specialized Spiritual Tracks
                </h6>
                <p>
                  Explore specialized topics to deepen your understanding of
                  faith and connect with like-minded individuals on your
                  spiritual journey.
                </p>
                <ul className="feature-list">
                  <li>Christian Living and Ethics</li>
                  <li>Understanding Biblical Prophecy</li>
                  <li>Building Strong Christian Relationships</li>
                  <li>Serving Others: The Christian Mission</li>
                </ul>
              </div>
              <div class="event-fetures mb-40">
                <h6>
                  <span>Day-04 :</span> Family Day and Fellowship
                </h6>
                <p>
                  Conclude our event with a joyous family gathering, celebrating
                  the bonds of faith and fellowship as we share testimonies and
                  enjoy quality time together.
                </p>
              </div>

              <div className="event-fetures two">
                <h6>
                  Meals &amp; Refreshmnets <span>(03 Days Included)</span>
                </h6>
                <ul className="meal-list">
                  <li>
                    Lunch <i className="bi bi-exclamation-circle" />
                  </li>
                  <li>
                    Snacks <i className="bi bi-exclamation-circle" />
                  </li>
                </ul>
              </div>
              <div className="section-title1 two">
                <h2>Frequently Asked &amp; Questions</h2>
              </div>
              <p>
                By providing comprehensive event details, you can enhance
                attendees' experience and ensure that they have all the
                information they need to participate in and enjoy your event or
                conference. Keep the information up-to-date and easily
                accessible through your event website or promotional materials.
              </p>
              <div className="faq-wrap pt-50">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        What can I expect from this Christian Youth camp?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Our Christian Youth camp offers a transformative
                        experience focused on spiritual growth, fellowship, and
                        empowerment in Christ.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        How will this camp enhance my relationship with God?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Our camp provides opportunities for deepening your faith
                        through Bible study, prayer, and engaging sessions
                        designed to strengthen your spiritual journey.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        What activities are available for youth participants?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Our camp offers a variety of engaging activities
                        including praise and worship sessions, group
                        discussions, outdoor games, and talent showcases.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        How can families participate in the final day of the
                        camp?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Families are invited to join us on the final day for a
                        special gathering filled with fellowship, testimonies,
                        and celebration of the bonds of faith and family.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="event-sidebar">
                <div className="event-speakers-area mb-40">
                  <Swiper
                    {...slideSetting2}
                    className="swiper event-speakers-slider"
                  >
                    <div className="swiper-wrapper">
                      <SwiperSlide className="swiper-slide">
                        <div className="single-speakers">
                          <div className="speaker-img">
                            <img
                              src="assets/img/inner-pages/anand.jpg"
                              alt=""
                            />
                          </div>
                          <div className="speakers-content text-center">
                            <h5>
                              <Link legacyBehavior href="/people-details">
                                <a>Bro. Anand</a>
                              </Link>
                            </h5>
                            <span>Prophet and Speaker</span>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="single-speakers">
                          <div className="speaker-img">
                            <img src="assets/img/inner-pages/roy.jpg" alt="" />
                          </div>
                          <div className="speakers-content text-center">
                            <h5>
                              <Link legacyBehavior href="/people-details">
                                <a>Bro. Roy</a>
                              </Link>
                            </h5>
                            <span>Prophet and Speaker</span>
                          </div>
                        </div>
                      </SwiperSlide>
                    </div>
                    <div className="slider-btn-group">
                      <div className="slider-btn prev-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={15}
                          height={11}
                          viewBox="0 0 15 11"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.416666 5.9668H15V4.7168H0.416666V5.9668Z"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.04115 4.7168C3.98115 4.7168 6.38281 7.3018 6.38281 10.0585V10.6835H5.13281V10.0585C5.13281 7.96596 3.26448 5.9668 1.04115 5.9668H0.416979V4.7168H1.04115Z"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.04115 5.96667C3.98115 5.96667 6.38281 3.38167 6.38281 0.625V0H5.13281V0.625C5.13281 2.71833 3.26448 4.71667 1.04115 4.71667H0.416979V5.96667H1.04115Z"
                          />
                        </svg>
                      </div>
                      <div className="event-fractional-pagination" />
                      <div className="slider-btn next-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={15}
                          height={11}
                          viewBox="0 0 15 11"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.5833 5.9668H0V4.7168H14.5833V5.9668Z"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.9589 4.7168C11.0189 4.7168 8.61719 7.3018 8.61719 10.0585V10.6835H9.86719V10.0585C9.86719 7.96596 11.7355 5.9668 13.9589 5.9668H14.583V4.7168H13.9589Z"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.9589 5.96667C11.0189 5.96667 8.61719 3.38167 8.61719 0.625V0H9.86719V0.625C9.86719 2.71833 11.7355 4.71667 13.9589 4.71667H14.583V5.96667H13.9589Z"
                          />
                        </svg>
                      </div>
                    </div>
                  </Swiper>
                </div>
                <div className="register-btn mb-40">
                  <a className="primary-btn1 btn-hover" href="#">
                    Register Now
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
                    <span />
                  </a>
                </div>
                <div className="event-location-map mb-40">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15830.37373304311!2d80.6412321!3d7.2870125!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae367a636bda50b%3A0x280e1e5804011da3!2sMowbray%20College%20Kandy!5e0!3m2!1sen!2sin!4v1714394444505!5m2!1sen!2sin"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default EventDetailsPage;
