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
import MainLayout from '../components/layout/MainLayout'


const EventDetailsPage = () => {
  const slideSetting = useMemo(() => {
    return {
      speed: 1500,
      spaceBetween: 30,
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      effect: 'fade',             // Use the fade effect
          fadeEffect: {
              crossFade: true           // Enable cross-fade transition
          },	
          pagination: {
        el: ".event-pagination",
        clickable: 'true',
        },
    };
  }, []);
  const slideSetting2 = useMemo(() => {
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
         delay: 4000, // Autoplay duration in milliseconds
         disableOnInteraction: false,
        },
        pagination: {
            el: '.event-fractional-pagination',
            type: "fraction",
        },
        navigation: {
			nextEl: ".next-4",
			prevEl: ".prev-4",
		},
    }
  }, []);
  return (
    <MainLayout>
      <div className="event-details-page pt-130 mb-130">
  <div className="container">
    <div className="row g-lg-4 gy-5">
      <div className="col-lg-8">
        <div className="section-title1">
          <h2>By providing comprehensive event details, you can enhance attendees.</h2>
        </div>
        <ul className="event-info mb-60">
          <li><strong>Date:</strong>(02-05) December, 2023</li>
          <li><strong>Time :</strong>2:00 pm to 4:pm (4 Days)</li>
          <li><strong>Vanue:</strong>Convention Hall, House no-343/244, Block-H, Syden, Australia</li>
        </ul>
        <Swiper {...slideSetting}  className="swiper event-img-slider mb-20">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="event-img">
                <a data-fancybox="gallery2" href="assets/img/inner-pages/event-thumb.jpg">
                  <img src="assets/img/inner-pages/career-img-01.jpg" alt="" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="event-img">
                <a data-fancybox="gallery2" href="assets/img/inner-pages/event-thumb.jpg">
                  <img src="assets/img/inner-pages/career-img-02.jpg" alt="" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="event-img">
                <a data-fancybox="gallery2" href="assets/img/inner-pages/event-thumb.jpg">
                  <img src="assets/img/inner-pages/career-img-03.jpg" alt="" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="event-img">
                <a data-fancybox="gallery2" href="assets/img/inner-pages/event-thumb.jpg">
                  <img src="assets/img/inner-pages/career-img-04.jpg" alt="" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="event-img">
                <a data-fancybox="gallery2" href="assets/img/inner-pages/event-thumb.jpg">
                  <img src="assets/img/inner-pages/career-img-05.jpg" alt="" />
                </a>
              </div>
            </SwiperSlide>
          </div>
          <div className="event-pagination" />
        </Swiper>
        <div className="pic-cap-and-sicial">
          <div className="pic-cap">
            <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
            </svg>
            P.C Event Gallery
          </div>
          <ul className="social-link d-flex align-items-center">
            <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
            <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
            <li><a href="https://www.pinterest.com/"><i className="bx bxl-linkedin" /></a></li>
          </ul>
        </div>
        <h3>Agenda &amp; Schedule</h3>
        <p>By providing comprehensive event details, you can enhance attendees' experience and ensure that they have all the information they need to participate in and enjoy your event or conference. Keep the information up-to-date and easily accessible through your event website or promotional materials.</p>
        <div className="event-fetures mt-30 mb-40">
          <h6><span>Day-01 :</span>Event Opening and Keynote Sessions</h6>
          <p>Creating a schedule for a business consulting event involves addressing a wide range of topics to cater to the diverse needs and interests of attendees. Here's a comprehensive list of potential schedule topics for a business consulting event:</p>
          <ul className="feature-list">
            <li>Event Introduction and Welcome</li>
            <li>Keynote Address: Current Business Landscape and Trends</li>
            <li>The Role of Consulting in Modern Business</li>
            <li>Industry Insights and Opportunities</li>
            <li>Successful Consulting Case Studies</li>
          </ul>
        </div>
        <div className="event-fetures mb-40">
          <h6><span>Day-02 :</span> Core Consulting Strategies and Skills</h6>
          <p>Creating a schedule for a business consulting event involves addressing a wide range of topics to cater to the diverse needs and interests of attendees. Here's a comprehensive list of potential schedule topics for a business consulting event:</p>
          <ul className="feature-list">
            <li>Effective Problem-Solving Techniques</li>
            <li>Data Analysis and Analytics in Consulting</li>
            <li>Effective Communication Strategies for Consultants</li>
            <li>Workshop: Case Study Analysis and Solutions</li>
          </ul>
        </div>
        <div className="event-fetures mb-40">
          <h6><span>Day-03 :</span> Specialized Consulting Tracks</h6>
          <p>Creating a schedule for a business consulting event involves addressing a wide range of topics to cater to the diverse needs and interests of attendees. Here's a comprehensive list of potential schedule topics for a business consulting event:</p>
          <ul className="feature-list">
            <li>HR and Talent Management Consulting Best Practices</li>
            <li>Technology and IT Consulting Trends</li>
            <li>Marketing and Sales Consulting Strategies</li>
            <li>Operations and Process Improvement Consulting</li>
          </ul>
        </div>
        <div className="event-fetures mb-40">
          <h6><span>Day-04 :</span> Specialized Consulting Tracks</h6>
          <p>Creating a schedule for a business consulting event involves addressing a wide range of topics to cater to the diverse needs and interests of attendees. Here's a comprehensive list of potential schedule topics for a business consulting event:</p>
          <ul className="feature-list">
            <li>HR and Talent Management Consulting Best Practices</li>
            <li>Technology and IT Consulting Trends</li>
            <li>Marketing and Sales Consulting Strategies</li>
            <li>Operations and Process Improvement Consulting</li>
          </ul>
        </div>
        <div className="event-fetures two">
          <h6>Meals &amp; Refreshmnets <span>(04 Days Included)</span></h6>
          <ul className="meal-list">
            <li>Launch <i className="bi bi-exclamation-circle" /></li>
            <li>Snacks <i className="bi bi-exclamation-circle" /></li>
          </ul>
        </div>
        <div className="section-title1 two">
          <h2>Frequently Asked &amp; Question</h2>
        </div>
        <p>By providing comprehensive event details, you can enhance attendees' experience and ensure that they have all the information they need to participate in and enjoy your event or conference. Keep the information up-to-date and easily accessible through your event website or promotional materials.</p>
        <div className="faq-wrap pt-50">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  What is health and care consulting?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Health and care consulting is a specialized service that provides advisory and support to healthcare organizations and stakeholders to improve operations, patient care.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Why do healthcare organizations need consulting services?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Health and care consulting is a specialized service that provides advisory and support to healthcare organizations and stakeholders to improve operations, patient care.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  What types of consulting services do you offer?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Health and care consulting is a specialized service that provides advisory and support to healthcare organizations and stakeholders to improve operations, patient care.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  How do you measure the success of a consulting project?
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Health and care consulting is a specialized service that provides advisory and support to healthcare organizations and stakeholders to improve operations, patient care.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  What is the process of selling a home?
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Health and care consulting is a specialized service that provides advisory and support to healthcare organizations and stakeholders to improve operations, patient care.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="event-sidebar">
          <div className="event-speakers-area mb-40">
            <Swiper  {...slideSetting2}className="swiper event-speakers-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="single-speakers">
                    <div className="speaker-img">
                      <img src="assets/img/inner-pages/event-author2.jpg" alt="" />
                    </div>
                    <div className="speakers-content text-center">
                      <h5><Link legacyBehavior href="/people-details"><a>Mrs. Abigail Grace</a></Link></h5>
                      <span>Human Researcher</span>
                      <ul className="social-link d-flex align-items-center">
                        <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                        <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                        <li><a href="https://www.pinterest.com/"><i className="bx bxl-linkedin" /></a></li>
                        <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="single-speakers">
                    <div className="speaker-img">
                      <img src="assets/img/inner-pages/event-author.jpg" alt="" />
                    </div>
                    <div className="speakers-content text-center">
                      <h5><Link legacyBehavior href="/people-details"><a>Mr. Grablion Jack</a></Link></h5>
                      <span>Human Researcher</span>
                      <ul className="social-link d-flex align-items-center">
                        <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                        <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                        <li><a href="https://www.pinterest.com/"><i className="bx bxl-linkedin" /></a></li>
                        <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="single-speakers">
                    <div className="speaker-img">
                      <img src="assets/img/inner-pages/event-author3.jpg" alt="" />
                    </div>
                    <div className="speakers-content text-center">
                      <h5><Link legacyBehavior href="/people-details"><a>Mrs. Emily Sophia</a></Link></h5>
                      <span>Human Researcher</span>
                      <ul className="social-link d-flex align-items-center">
                        <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                        <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                        <li><a href="https://www.pinterest.com/"><i className="bx bxl-linkedin" /></a></li>
                        <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
              <div className="slider-btn-group">
                <div className="slider-btn prev-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width={15} height={11} viewBox="0 0 15 11">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.416666 5.9668H15V4.7168H0.416666V5.9668Z" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.04115 4.7168C3.98115 4.7168 6.38281 7.3018 6.38281 10.0585V10.6835H5.13281V10.0585C5.13281 7.96596 3.26448 5.9668 1.04115 5.9668H0.416979V4.7168H1.04115Z" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.04115 5.96667C3.98115 5.96667 6.38281 3.38167 6.38281 0.625V0H5.13281V0.625C5.13281 2.71833 3.26448 4.71667 1.04115 4.71667H0.416979V5.96667H1.04115Z" />
                  </svg>
                </div>
                <div className="event-fractional-pagination" />
                <div className="slider-btn next-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width={15} height={11} viewBox="0 0 15 11">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.5833 5.9668H0V4.7168H14.5833V5.9668Z" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.9589 4.7168C11.0189 4.7168 8.61719 7.3018 8.61719 10.0585V10.6835H9.86719V10.0585C9.86719 7.96596 11.7355 5.9668 13.9589 5.9668H14.583V4.7168H13.9589Z" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.9589 5.96667C11.0189 5.96667 8.61719 3.38167 8.61719 0.625V0H9.86719V0.625C9.86719 2.71833 11.7355 4.71667 13.9589 4.71667H14.583V5.96667H13.9589Z" />
                  </svg>
                </div>
              </div>
            </Swiper>
          </div>
          <div className="register-btn mb-40">
            <a className="primary-btn1 btn-hover" href="#">
              Registation Now
              <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
              </svg>
              <span />
            </a>
          </div>
          <div className="event-location-map mb-40">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.5647631857846!2d90.36311167605997!3d23.83407118555764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c14c8682a473%3A0xa6c74743d52adb88!2sEgens%20Lab!5e0!3m2!1sen!2sbd!4v1700047470262!5m2!1sen!2sbd" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <div className="single-widgets widget_egns_recent_post mb-40">
            <div className="widget-title">
              <h4>Another Events</h4>
            </div>
            <div className="recent-post-wraper">
              <div className="widget-cnt">
                <div className="wi">
                  <Link legacyBehavior href="/event-details"><a><img src="assets/img/inner-pages/blog-sidebar-1.jpg" alt="image" /></a></Link>
                </div>
                <div className="wc">
                  <Link legacyBehavior href="/event-details"><a>07 January, 2023</a></Link>
                  <h5><Link legacyBehavior href="/event-details"><a>Bootcamp; Change To Impressive Marketing Policy.</a></Link></h5>
                </div>
              </div>
              <div className="widget-cnt">
                <div className="wi">
                  <Link legacyBehavior href="/event-details"><a><img src="assets/img/inner-pages/blog-sidebar-2.jpg" alt="image" /></a></Link>
                </div>
                <div className="wc">
                  <Link legacyBehavior href="/event-details"><a>02 March, 2023</a></Link>
                  <h5><Link legacyBehavior href="/event-details"><a>Become A Expert Any Business Field.</a></Link></h5>
                </div>
              </div>
              <div className="widget-cnt">
                <div className="wi">
                  <Link legacyBehavior href="/event-details"><a><img src="assets/img/inner-pages/blog-sidebar-2.jpg" alt="image" /></a></Link>
                </div>
                <div className="wc">
                  <Link legacyBehavior href="/event-details"><a>06 March, 2023</a></Link>
                  <h5><Link legacyBehavior href="/event-details"><a>Discussion Always Be Fast To Change Marketing Strategy.</a></Link></h5>
                </div>
              </div>
            </div>
          </div>
          <div className="sponsore-section">
            <div className="widget-title">
              <h4>Our Sponsors</h4>
            </div>
            <div className="sponser-category mb-40">
              <h6><strong>Platinum</strong> Sponsors</h6>
              <div className="sponser-list">
                <div className="row g-3">
                  <div className="col-6">
                    <a href="#"><img src="assets/img/inner-pages/sponser-01.png" alt="" /></a>
                  </div>
                  <div className="col-6">
                    <a href="#"><img src="assets/img/inner-pages/sponser-02.png" alt="" /></a>
                  </div>
                  <div className="col-6">
                    <a href="#"><img src="assets/img/inner-pages/sponser-03.png" alt="" /></a>
                  </div>
                  <div className="col-6">
                    <a href="#"><img src="assets/img/inner-pages/sponser-04.png" alt="" /></a>
                  </div>
                  <div className="col-6">
                    <a href="#"><img src="assets/img/inner-pages/sponser-05.png" alt="" /></a>
                  </div>
                  <div className="col-6">
                    <a href="#"><img src="assets/img/inner-pages/sponser-06.png" alt="" /></a>
                  </div>
                  <div className="col-6">
                    <a href="#"><img src="assets/img/inner-pages/sponser-07.png" alt="" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="sponser-category">
              <h6><strong>Silver</strong> Sponsors</h6>
              <div className="sponser-list">
                <div className="row g-3">
                  <div className="col-6">
                    <a href="#"><img src="assets/img/inner-pages/sponser-08.png" alt="" /></a>
                  </div>
                  <div className="col-6">
                    <a href="#"><img src="assets/img/inner-pages/sponser-09.png" alt="" /></a>
                  </div>
                  <div className="col-6">
                    <a href="#"><img src="assets/img/inner-pages/sponser-10.png" alt="" /></a>
                  </div>
                  <div className="col-6">
                    <a href="#"><img src="assets/img/inner-pages/sponser-11.png" alt="" /></a>
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

    </MainLayout>
  )
}

export default EventDetailsPage
