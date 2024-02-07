import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
const CaseStudy = () => {
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
    <div classname="case-study-section mb-130">
      <div classname="container-fluid one">
        <div classname="row">
          <div classname="col-lg-12">
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
  );
};

export default CaseStudy;
