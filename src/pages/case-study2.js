import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import MainLayout from '../components/layout/MainLayout'


const CaseStudy2Page = () => {
  const settings = {
		centerMode: true,
		infinite: true,
		centerPadding: '0',
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 2000,
		variableWidth: true,
		responsive: [{
			breakpoint: 1200,
			settings: {
				arrows: false,
				slidesToShow: 5

			}
		}, {
			breakpoint: 991,
			settings: {
				arrows: false,
				variableWidth: false,
			}
		}, {
			breakpoint: 768,
			settings: {
				arrows: false,
				variableWidth: false,
				slidesToShow: 1
			}
		}, {
			breakpoint: 576,
			settings: {
				arrows: false,
				variableWidth: false,
				slidesToShow: 1,
			}
		}, {
			breakpoint: 480,
			settings: {
				arrows: false,
				variableWidth: false,
				slidesToShow: 1
			}
		}, {
			breakpoint: 350,
			settings: {
				arrows: false,
				variableWidth: false,
				slidesToShow: 1
			}
		}]
	}
  return (
    <MainLayout>
      <div className="case-study-section pt-130 mb-130">
  <div className="container-fluid one">
    <div className="row">
      <div className="col-lg-12">
        <Slider {...settings}  className="casestudy-slider overflow-hidden">
          <div className="slide-item">
            <div className="case-study-card">
              <div className="case-study-img">
                <img src="assets/img/home3/case-study-01.jpg" alt="" />
              </div>
              <div className="case-study-content">
                <div className="catgory-and-title">
                  <Link legacyBehavior href="/case-study1"><a>Marketing</a></Link>
                  <h3><Link legacyBehavior href="/case-study-details"><a>A Business Consulting to Increase Marketing Analaytic on Markio Logistics</a></Link></h3>
                </div>
                <p>Business consultants are typically hired by organizations of all sizes, from small startups.</p>
              </div>
            </div>
          </div>
          <div className="slide-item">
            <div className="case-study-card">
              <div className="case-study-img">
                <img src="assets/img/home3/case-study-02.jpg" alt="" />
              </div>
              <div className="case-study-content">
                <div className="catgory-and-title">
                  <Link legacyBehavior href="/case-study1"><a>Health Care</a></Link>
                  <h3><Link legacyBehavior href="/case-study-details"><a>Leading the Market: A Business Consulting Case Study with Healthcare</a></Link></h3>
                </div>
                <p>Business consultants are typically hired by organizations of all sizes, from small startups.</p>
              </div>
            </div>
          </div>
          <div className="slide-item">
            <div className="case-study-card">
              <div className="case-study-img">
                <img src="assets/img/home3/case-study-03.jpg" alt="" />
              </div>
              <div className="case-study-content">
                <div className="catgory-and-title">
                  <Link legacyBehavior href="/case-study1"><a>Real Estate</a></Link>
                  <h3><Link legacyBehavior href="/case-study-details"><a>Sustainability in Business: Strategies for a Greener Future</a></Link></h3>
                </div>
                <p>Business consultants are typically hired by organizations of all sizes, from small startups.</p>
              </div>
            </div>
          </div>
          <div className="slide-item">
            <div className="case-study-card">
              <div className="case-study-img">
                <img src="assets/img/home3/case-study-01.jpg" alt="" />
              </div>
              <div className="case-study-content">
                <div className="catgory-and-title">
                  <Link legacyBehavior href="/case-study1"><a>Marketing</a></Link>
                  <h3><Link legacyBehavior href="/case-study-details"><a>A Business Consulting to Increase Marketing Analaytic on Markio Logistics</a></Link></h3>
                </div>
                <p>Business consultants are typically hired by organizations of all sizes, from small startups.</p>
              </div>
            </div>
          </div>
          <div className="slide-item">
            <div className="case-study-card">
              <div className="case-study-img">
                <img src="assets/img/home3/case-study-02.jpg" alt="" />
              </div>
              <div className="case-study-content">
                <div className="catgory-and-title">
                  <Link legacyBehavior href="/case-study1"><a>Health Care</a></Link>
                  <h3><Link legacyBehavior href="/case-study-details"><a>Leading the Market: A Business Consulting Case Study with Healthcare</a></Link></h3>
                </div>
                <p>Business consultants are typically hired by organizations of all sizes, from small startups.</p>
              </div>
            </div>
          </div>
          <div className="slide-item">
            <div className="case-study-card">
              <div className="case-study-img">
                <img src="assets/img/home3/case-study-03.jpg" alt="" />
              </div>
              <div className="case-study-content">
                <div className="catgory-and-title">
                  <Link legacyBehavior href="/case-study1"><a>Real Estate</a></Link>
                  <h3><Link legacyBehavior href="/case-study-details"><a>Sustainability in Business: Strategies for a Greener Future</a></Link></h3>
                </div>
                <p>Business consultants are typically hired by organizations of all sizes, from small startups.</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  </div>
</div>
<div className="people-section2 two">
  <div className="container-fluid one">
    <div className="row">
      <div className="col-lg-12 pl--95 gap-lg-5 gap-4 d-flex flex-lg-nowrap flex-wrap align-items-end justify-content-between mb-60">
        <div className="section-title1 two">
          <span>Our People</span>
          <h2>Excellent Service Provided by Our Superb Consultant.</h2>
        </div>
        <Link legacyBehavior  href="//people-details">
          <a className="primary-btn1 btn-hover">
          Explore People
          <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
          </svg>
          <span />
          </a>
        </Link>
      </div>
      <div className="col-lg-12">
        <div className="row g-4">
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="people-card2 magnetic-item">
              <div className="people-img">
                <img src="assets/img/home2/people-01.png" alt="" />
              </div>
              <div className="people-content">
                <div className="name-deg">
                  <h5><Link legacyBehavior href="/people-details"><a>Mr. Daniel Scoot</a></Link></h5>
                  <span>Health Consultant</span>
                </div>
                <div className="contact-area">
                  <div className="contact-number">
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
                        <path d="M14.7156 10.5021C13.7361 10.5021 12.7742 10.3489 11.8628 10.0477C11.4084 9.89277 10.891 10.013 10.5945 10.3151L8.79549 11.6732C6.70912 10.5595 5.42396 9.27473 4.32546 7.20402L5.64358 5.45186C5.98604 5.10986 6.10887 4.61028 5.9617 4.14153C5.65921 3.22528 5.50554 2.26391 5.50554 1.28391C5.50558 0.575957 4.92962 0 4.22171 0H1.28334C0.575469 0 -0.000488281 0.575957 -0.000488281 1.28383C-0.000488281 9.39843 6.60108 16 14.7156 16C15.4236 16 15.9995 15.424 15.9995 14.7161V11.786C15.9995 11.0781 15.4235 10.5021 14.7156 10.5021ZM15.1106 14.7161C15.1106 14.934 14.9335 15.1111 14.7156 15.1111C7.09108 15.1111 0.888426 8.90839 0.888426 1.28387C0.888426 1.066 1.06551 0.888914 1.28338 0.888914H4.22175C4.43962 0.888914 4.61671 1.066 4.61671 1.28387C4.61671 2.35895 4.78554 3.41407 5.11583 4.41366C5.16183 4.56124 5.1245 4.71399 4.97521 4.8694L3.44742 6.89277C3.39725 6.95923 3.36675 7.03844 3.35938 7.12139C3.35201 7.20433 3.36808 7.28768 3.40575 7.36194C4.65271 9.81289 6.16791 11.3281 8.6362 12.5928C8.78636 12.6714 8.9704 12.6549 9.1067 12.5521L11.1766 10.9839C11.2283 10.9323 11.2934 10.8962 11.3646 10.8797C11.4358 10.8631 11.5101 10.8667 11.5794 10.8902C12.5859 11.2226 13.641 11.3911 14.7156 11.3911C14.9335 11.3911 15.1106 11.5681 15.1106 11.786V14.7161Z" />
                      </svg>
                    </div>
                    <div className="content">
                      <a href="tel:+9165678653">+91 656 786 53</a>
                    </div>
                  </div>
                  <ul className="social-icon">
                    <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                    <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="people-card2 magnetic-item">
              <div className="people-img">
                <img src="assets/img/home2/people-02.png" alt="" />
              </div>
              <div className="people-content">
                <div className="name-deg">
                  <h5><Link legacyBehavior href="/people-details"><a>Mrs. Emily Sophia</a></Link></h5>
                  <span>Senior Consultant</span>
                </div>
                <div className="contact-area">
                  <div className="contact-number">
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
                        <path d="M14.7156 10.5021C13.7361 10.5021 12.7742 10.3489 11.8628 10.0477C11.4084 9.89277 10.891 10.013 10.5945 10.3151L8.79549 11.6732C6.70912 10.5595 5.42396 9.27473 4.32546 7.20402L5.64358 5.45186C5.98604 5.10986 6.10887 4.61028 5.9617 4.14153C5.65921 3.22528 5.50554 2.26391 5.50554 1.28391C5.50558 0.575957 4.92962 0 4.22171 0H1.28334C0.575469 0 -0.000488281 0.575957 -0.000488281 1.28383C-0.000488281 9.39843 6.60108 16 14.7156 16C15.4236 16 15.9995 15.424 15.9995 14.7161V11.786C15.9995 11.0781 15.4235 10.5021 14.7156 10.5021ZM15.1106 14.7161C15.1106 14.934 14.9335 15.1111 14.7156 15.1111C7.09108 15.1111 0.888426 8.90839 0.888426 1.28387C0.888426 1.066 1.06551 0.888914 1.28338 0.888914H4.22175C4.43962 0.888914 4.61671 1.066 4.61671 1.28387C4.61671 2.35895 4.78554 3.41407 5.11583 4.41366C5.16183 4.56124 5.1245 4.71399 4.97521 4.8694L3.44742 6.89277C3.39725 6.95923 3.36675 7.03844 3.35938 7.12139C3.35201 7.20433 3.36808 7.28768 3.40575 7.36194C4.65271 9.81289 6.16791 11.3281 8.6362 12.5928C8.78636 12.6714 8.9704 12.6549 9.1067 12.5521L11.1766 10.9839C11.2283 10.9323 11.2934 10.8962 11.3646 10.8797C11.4358 10.8631 11.5101 10.8667 11.5794 10.8902C12.5859 11.2226 13.641 11.3911 14.7156 11.3911C14.9335 11.3911 15.1106 11.5681 15.1106 11.786V14.7161Z" />
                      </svg>
                    </div>
                    <div className="content">
                      <a href="tel:+9165678653">+91 656 786 53</a>
                    </div>
                  </div>
                  <ul className="social-icon">
                    <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                    <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="people-card2 magnetic-item">
              <div className="people-img">
                <img src="assets/img/home2/people-03.png" alt="" />
              </div>
              <div className="people-content">
                <div className="name-deg">
                  <h5><Link legacyBehavior href="/people-details"><a>Mrs. Abigail Grace</a></Link></h5>
                  <span>Senior Consultant </span>
                </div>
                <div className="contact-area">
                  <div className="contact-number">
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
                        <path d="M14.7156 10.5021C13.7361 10.5021 12.7742 10.3489 11.8628 10.0477C11.4084 9.89277 10.891 10.013 10.5945 10.3151L8.79549 11.6732C6.70912 10.5595 5.42396 9.27473 4.32546 7.20402L5.64358 5.45186C5.98604 5.10986 6.10887 4.61028 5.9617 4.14153C5.65921 3.22528 5.50554 2.26391 5.50554 1.28391C5.50558 0.575957 4.92962 0 4.22171 0H1.28334C0.575469 0 -0.000488281 0.575957 -0.000488281 1.28383C-0.000488281 9.39843 6.60108 16 14.7156 16C15.4236 16 15.9995 15.424 15.9995 14.7161V11.786C15.9995 11.0781 15.4235 10.5021 14.7156 10.5021ZM15.1106 14.7161C15.1106 14.934 14.9335 15.1111 14.7156 15.1111C7.09108 15.1111 0.888426 8.90839 0.888426 1.28387C0.888426 1.066 1.06551 0.888914 1.28338 0.888914H4.22175C4.43962 0.888914 4.61671 1.066 4.61671 1.28387C4.61671 2.35895 4.78554 3.41407 5.11583 4.41366C5.16183 4.56124 5.1245 4.71399 4.97521 4.8694L3.44742 6.89277C3.39725 6.95923 3.36675 7.03844 3.35938 7.12139C3.35201 7.20433 3.36808 7.28768 3.40575 7.36194C4.65271 9.81289 6.16791 11.3281 8.6362 12.5928C8.78636 12.6714 8.9704 12.6549 9.1067 12.5521L11.1766 10.9839C11.2283 10.9323 11.2934 10.8962 11.3646 10.8797C11.4358 10.8631 11.5101 10.8667 11.5794 10.8902C12.5859 11.2226 13.641 11.3911 14.7156 11.3911C14.9335 11.3911 15.1106 11.5681 15.1106 11.786V14.7161Z" />
                      </svg>
                    </div>
                    <div className="content">
                      <a href="tel:+9165678653">+91 656 786 53</a>
                    </div>
                  </div>
                  <ul className="social-icon">
                    <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                    <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="people-card2 magnetic-item">
              <div className="people-img">
                <img src="assets/img/home2/people-04.png" alt="" />
              </div>
              <div className="people-content">
                <div className="name-deg">
                  <h5><Link legacyBehavior href="/people-details"><a>Mr. Michael David</a></Link></h5>
                  <span>Health Consultant</span>
                </div>
                <div className="contact-area">
                  <div className="contact-number">
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
                        <path d="M14.7156 10.5021C13.7361 10.5021 12.7742 10.3489 11.8628 10.0477C11.4084 9.89277 10.891 10.013 10.5945 10.3151L8.79549 11.6732C6.70912 10.5595 5.42396 9.27473 4.32546 7.20402L5.64358 5.45186C5.98604 5.10986 6.10887 4.61028 5.9617 4.14153C5.65921 3.22528 5.50554 2.26391 5.50554 1.28391C5.50558 0.575957 4.92962 0 4.22171 0H1.28334C0.575469 0 -0.000488281 0.575957 -0.000488281 1.28383C-0.000488281 9.39843 6.60108 16 14.7156 16C15.4236 16 15.9995 15.424 15.9995 14.7161V11.786C15.9995 11.0781 15.4235 10.5021 14.7156 10.5021ZM15.1106 14.7161C15.1106 14.934 14.9335 15.1111 14.7156 15.1111C7.09108 15.1111 0.888426 8.90839 0.888426 1.28387C0.888426 1.066 1.06551 0.888914 1.28338 0.888914H4.22175C4.43962 0.888914 4.61671 1.066 4.61671 1.28387C4.61671 2.35895 4.78554 3.41407 5.11583 4.41366C5.16183 4.56124 5.1245 4.71399 4.97521 4.8694L3.44742 6.89277C3.39725 6.95923 3.36675 7.03844 3.35938 7.12139C3.35201 7.20433 3.36808 7.28768 3.40575 7.36194C4.65271 9.81289 6.16791 11.3281 8.6362 12.5928C8.78636 12.6714 8.9704 12.6549 9.1067 12.5521L11.1766 10.9839C11.2283 10.9323 11.2934 10.8962 11.3646 10.8797C11.4358 10.8631 11.5101 10.8667 11.5794 10.8902C12.5859 11.2226 13.641 11.3911 14.7156 11.3911C14.9335 11.3911 15.1106 11.5681 15.1106 11.786V14.7161Z" />
                      </svg>
                    </div>
                    <div className="content">
                      <a href="tel:+9165678653">+91 656 786 53</a>
                    </div>
                  </div>
                  <ul className="social-icon">
                    <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                    <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                  </ul>
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

export default CaseStudy2Page
