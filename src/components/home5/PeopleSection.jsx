import Link from 'next/link'
import React from 'react'

const PeopleSection = () => {
  return (
    <div className="people-section5 mb-90">
    <div className="container-fluid one">
      <div className="row">
        <div className="col-lg-12 pl--95 gap-lg-5 gap-4 d-flex flex-lg-nowrap flex-wrap align-items-end justify-content-between mb-60">
          <div className="section-title1 two">
            <span>Our Consultant</span>
            <h2>Conduct market research to understand industry competition.</h2>
          </div>
          <Link legacyBehavior href="/our-people1">
            <a className="primary-btn1 btn-hover">
            Explore People
            <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
            </svg>
            <span />
            </a>
          </Link>
        </div>
      </div>
      <div className="row g-4">
        <div className="col-xl-4 col-sm-6">
          <div className="people-card-5">
            <div className="people-img">
              <img src="assets/img/home5/people-01.png" alt="" />
            </div>
            <div className="people-content">
              <div className="name-and-social">
                <div className="name-deg">
                  <h5><Link legacyBehavior href="/people-details"><a>Mr. Olivia Ava</a></Link></h5>
                  <span>Health Consultant</span>
                </div>
                <ul className="social-icon">
                  <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                  <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                </ul>
              </div>
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
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-sm-6">
          <div className="people-card-5">
            <div className="people-img">
              <img src="assets/img/home5/people-02.png" alt="" />
            </div>
            <div className="people-content">
              <div className="name-and-social">
                <div className="name-deg">
                  <h5><Link legacyBehavior href="/people-details"><a>Mr. Daniel Scoot</a></Link></h5>
                  <span>Health Consultant</span>
                </div>
                <ul className="social-icon">
                  <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                  <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                </ul>
              </div>
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
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-sm-6">
          <div className="people-card-5">
            <div className="people-img">
              <img src="assets/img/home5/people-03.png" alt="" />
            </div>
            <div className="people-content">
              <div className="name-and-social">
                <div className="name-deg">
                  <h5><Link legacyBehavior href="/people-details"><a>Mrs. Nhushi Yehara</a></Link></h5>
                  <span>Real Esate Consultant </span>
                </div>
                <ul className="social-icon">
                  <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                  <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                </ul>
              </div>
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
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-sm-6">
          <div className="people-card-5">
            <div className="people-img">
              <img src="assets/img/home5/people-04.png" alt="" />
            </div>
            <div className="people-content">
              <div className="name-and-social">
                <div className="name-deg">
                  <h5><Link legacyBehavior href="/people-details"><a>Mrs. Lily Grace</a></Link></h5>
                  <span>Senior Consultant</span>
                </div>
                <ul className="social-icon">
                  <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                  <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                </ul>
              </div>
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
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-sm-6">
          <div className="people-card-5">
            <div className="people-img">
              <img src="assets/img/home5/people-05.png" alt="" />
            </div>
            <div className="people-content">
              <div className="name-and-social">
                <div className="name-deg">
                  <h5><Link legacyBehavior href="/people-details"><a>Mrs. Flurance Miyagi</a></Link></h5>
                  <span>Senior Consultant</span>
                </div>
                <ul className="social-icon">
                  <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                  <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                </ul>
              </div>
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
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-sm-6">
          <div className="people-card-5">
            <div className="people-img">
              <img src="assets/img/home5/people-06.png" alt="" />
            </div>
            <div className="people-content">
              <div className="name-and-social">
                <div className="name-deg">
                  <h5><Link legacyBehavior href="/people-details"><a>Mr. Rakhab Uddin</a></Link></h5>
                  <span>Low Firm Consultant</span>
                </div>
                <ul className="social-icon">
                  <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                  <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                </ul>
              </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PeopleSection
