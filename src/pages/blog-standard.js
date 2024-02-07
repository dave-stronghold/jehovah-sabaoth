import React from 'react'
import MainLayout from '../components/layout/MainLayout'
import Link from 'next/link'

const BlogStandardPage = () => {
  return (
    <MainLayout>
      <div className="blog-standard-page pt-130 mb-130">
  <div className="container">
    <div className="row g-lg-4 gy-5">
      <div className="col-lg-8">
        <div className="blog-st-card mb-50">
          <div className="blog-img">
            <img src="assets/img/inner-pages/blog-st-01.jpg" alt="" />
          </div>
          <div className="blog-content">
            <div className="tag-and-social-icon">
              <ul className="tags">
                <li>
                  <Link legacyBehavior href="/blog-standard">
                    <a>
                    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                      <path d="M7.58455 3.09152C7.58455 3.4429 7.72414 3.7799 7.9726 4.02837C8.22107 4.27684 8.55807 4.41643 8.90946 4.41643C9.26085 4.41643 9.59785 4.27684 9.84632 4.02837C10.0948 3.7799 10.2344 3.4429 10.2344 3.09152C10.2344 2.74013 10.0948 2.40313 9.84632 2.15466C9.59785 1.90619 9.26085 1.7666 8.90946 1.7666C8.55807 1.7666 8.22107 1.90619 7.9726 2.15466C7.72414 2.40313 7.58455 2.74013 7.58455 3.09152ZM8.46782 3.09152C8.46782 2.97439 8.51435 2.86205 8.59718 2.77923C8.68 2.69641 8.79233 2.64988 8.90946 2.64988C9.02659 2.64988 9.13892 2.69641 9.22175 2.77923C9.30457 2.86205 9.3511 2.97439 9.3511 3.09152C9.3511 3.20865 9.30457 3.32098 9.22175 3.4038C9.13892 3.48662 9.02659 3.53315 8.90946 3.53315C8.79233 3.53315 8.68 3.48662 8.59718 3.4038C8.51435 3.32098 8.46782 3.20865 8.46782 3.09152Z" />
                      <path d="M11.1167 0H7.06602C6.83178 5.00265e-05 6.60715 0.093142 6.44154 0.2588L0.258612 6.44173C0.0930223 6.60737 0 6.832 0 7.06621C0 7.30042 0.0930223 7.52505 0.258612 7.69068L4.30932 11.7414C4.47495 11.907 4.69958 12 4.93379 12C5.168 12 5.39263 11.907 5.55827 11.7414L11.7412 5.55846C11.9069 5.39285 11.9999 5.16822 12 4.93398V0.883276C12 0.649017 11.9069 0.424352 11.7413 0.258706C11.5756 0.0930591 11.351 0 11.1167 0ZM11.1167 4.93398L4.93379 11.1169L0.883087 7.06621L7.06602 0.883276H11.1167V4.93398Z" />
                    </svg>Consulting
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/blog-standard">
                    <a>
                    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                      <g>
                        <path d="M6 5.25C6.09946 5.25 6.19484 5.28951 6.26517 5.35984C6.33549 5.43016 6.375 5.52554 6.375 5.625V6.75H7.5C7.59946 6.75 7.69484 6.78951 7.76517 6.85983C7.83549 6.93016 7.875 7.02554 7.875 7.125C7.875 7.22446 7.83549 7.31984 7.76517 7.39017C7.69484 7.46049 7.59946 7.5 7.5 7.5H6.375V8.625C6.375 8.72446 6.33549 8.81984 6.26517 8.89017C6.19484 8.96049 6.09946 9 6 9C5.90054 9 5.80516 8.96049 5.73484 8.89017C5.66451 8.81984 5.625 8.72446 5.625 8.625V7.5H4.5C4.40054 7.5 4.30516 7.46049 4.23484 7.39017C4.16451 7.31984 4.125 7.22446 4.125 7.125C4.125 7.02554 4.16451 6.93016 4.23484 6.85983C4.30516 6.78951 4.40054 6.75 4.5 6.75H5.625V5.625C5.625 5.52554 5.66451 5.43016 5.73484 5.35984C5.80516 5.28951 5.90054 5.25 6 5.25Z" />
                        <path d="M2.625 0C2.72446 0 2.81984 0.0395088 2.89016 0.109835C2.96049 0.180161 3 0.275544 3 0.375V0.75H9V0.375C9 0.275544 9.03951 0.180161 9.10983 0.109835C9.18016 0.0395088 9.27554 0 9.375 0C9.47446 0 9.56984 0.0395088 9.64017 0.109835C9.71049 0.180161 9.75 0.275544 9.75 0.375V0.75H10.5C10.8978 0.75 11.2794 0.908035 11.5607 1.18934C11.842 1.47064 12 1.85218 12 2.25V10.5C12 10.8978 11.842 11.2794 11.5607 11.5607C11.2794 11.842 10.8978 12 10.5 12H1.5C1.10218 12 0.720644 11.842 0.43934 11.5607C0.158035 11.2794 0 10.8978 0 10.5V2.25C0 1.85218 0.158035 1.47064 0.43934 1.18934C0.720644 0.908035 1.10218 0.75 1.5 0.75H2.25V0.375C2.25 0.275544 2.28951 0.180161 2.35984 0.109835C2.43016 0.0395088 2.52554 0 2.625 0ZM0.75 3V10.5C0.75 10.6989 0.829018 10.8897 0.96967 11.0303C1.11032 11.171 1.30109 11.25 1.5 11.25H10.5C10.6989 11.25 10.8897 11.171 11.0303 11.0303C11.171 10.8897 11.25 10.6989 11.25 10.5V3H0.75Z" />
                      </g>
                    </svg> 03 April, 2023
                    </a>
                  </Link>
                </li>
              </ul>
              <div className="social-area">
                <ul>
                  <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                  <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                  <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a></li>
                  <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
                </ul>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
                    <g>
                      <path d="M8.24971 1.87499C8.24966 1.43507 8.40429 1.00913 8.68656 0.6717C8.96883 0.334271 9.36076 0.106839 9.79378 0.0291942C10.2268 -0.0484506 10.6733 0.0286364 11.0553 0.246968C11.4372 0.4653 11.7302 0.810973 11.883 1.22351C12.0358 1.63605 12.0387 2.08918 11.8911 2.50362C11.7436 2.91807 11.455 3.26743 11.0759 3.4906C10.6967 3.71376 10.2512 3.79652 9.81725 3.72438C9.38328 3.65224 8.98849 3.42981 8.70196 3.09599L3.66346 5.43599C3.77929 5.80307 3.77929 6.19691 3.66346 6.56399L8.70196 8.90399C9.00484 8.55174 9.42771 8.32447 9.88861 8.26623C10.3495 8.20799 10.8156 8.32292 11.1966 8.58876C11.5776 8.8546 11.8463 9.2524 11.9507 9.70508C12.0551 10.1578 11.9877 10.6331 11.7617 11.0389C11.5356 11.4448 11.1669 11.7522 10.727 11.9017C10.2872 12.0512 9.80748 12.0321 9.38092 11.8481C8.95436 11.664 8.61131 11.3282 8.41825 10.9056C8.22518 10.4831 8.19586 10.0039 8.33596 9.56099L3.29746 7.22099C3.04804 7.51167 2.71557 7.71899 2.34479 7.81506C1.97402 7.91112 1.58271 7.89134 1.22351 7.75835C0.864319 7.62537 0.554467 7.38556 0.335641 7.07121C0.116815 6.75685 -0.000488281 6.38301 -0.000488281 5.99999C-0.000488281 5.61697 0.116815 5.24313 0.335641 4.92878C0.554467 4.61442 0.864319 4.37462 1.22351 4.24163C1.58271 4.10865 1.97402 4.08886 2.34479 4.18493C2.71557 4.281 3.04804 4.48831 3.29746 4.77899L8.33596 2.43899C8.27861 2.25649 8.24952 2.06629 8.24971 1.87499Z" fill="#0D1720" />
                    </g>
                  </svg>
                </span>
              </div>
            </div>
            <h3><Link legacyBehavior href="/blog-details"><a>Consulting Industry Adapts to the Changing Business.</a></Link></h3>   
            <p>These advantages can help improve the quality of healthcare services, enhance operational efficiency, and address complex challenges within the healthcare industry.</p>
            <Link legacyBehavior href="/blog-details">
              <a className="explore-btn">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
              </svg>
              </a>
            </Link>
          </div>
        </div>
        <div className="blog-st-card mb-50">
          <div className="blog-img">
            <img src="assets/img/inner-pages/blog-st-02.jpg" alt="" />
          </div>
          <div className="blog-content">
            <div className="tag-and-social-icon">
              <ul className="tags">
                <li>
                  <Link legacyBehavior href="/blog-standard">
                    <a>
                    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                      <path d="M7.58455 3.09152C7.58455 3.4429 7.72414 3.7799 7.9726 4.02837C8.22107 4.27684 8.55807 4.41643 8.90946 4.41643C9.26085 4.41643 9.59785 4.27684 9.84632 4.02837C10.0948 3.7799 10.2344 3.4429 10.2344 3.09152C10.2344 2.74013 10.0948 2.40313 9.84632 2.15466C9.59785 1.90619 9.26085 1.7666 8.90946 1.7666C8.55807 1.7666 8.22107 1.90619 7.9726 2.15466C7.72414 2.40313 7.58455 2.74013 7.58455 3.09152ZM8.46782 3.09152C8.46782 2.97439 8.51435 2.86205 8.59718 2.77923C8.68 2.69641 8.79233 2.64988 8.90946 2.64988C9.02659 2.64988 9.13892 2.69641 9.22175 2.77923C9.30457 2.86205 9.3511 2.97439 9.3511 3.09152C9.3511 3.20865 9.30457 3.32098 9.22175 3.4038C9.13892 3.48662 9.02659 3.53315 8.90946 3.53315C8.79233 3.53315 8.68 3.48662 8.59718 3.4038C8.51435 3.32098 8.46782 3.20865 8.46782 3.09152Z" />
                      <path d="M11.1167 0H7.06602C6.83178 5.00265e-05 6.60715 0.093142 6.44154 0.2588L0.258612 6.44173C0.0930223 6.60737 0 6.832 0 7.06621C0 7.30042 0.0930223 7.52505 0.258612 7.69068L4.30932 11.7414C4.47495 11.907 4.69958 12 4.93379 12C5.168 12 5.39263 11.907 5.55827 11.7414L11.7412 5.55846C11.9069 5.39285 11.9999 5.16822 12 4.93398V0.883276C12 0.649017 11.9069 0.424352 11.7413 0.258706C11.5756 0.0930591 11.351 0 11.1167 0ZM11.1167 4.93398L4.93379 11.1169L0.883087 7.06621L7.06602 0.883276H11.1167V4.93398Z" />
                    </svg>Consulting
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/blog-standard">
                    <a>
                    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                      <g>
                        <path d="M6 5.25C6.09946 5.25 6.19484 5.28951 6.26517 5.35984C6.33549 5.43016 6.375 5.52554 6.375 5.625V6.75H7.5C7.59946 6.75 7.69484 6.78951 7.76517 6.85983C7.83549 6.93016 7.875 7.02554 7.875 7.125C7.875 7.22446 7.83549 7.31984 7.76517 7.39017C7.69484 7.46049 7.59946 7.5 7.5 7.5H6.375V8.625C6.375 8.72446 6.33549 8.81984 6.26517 8.89017C6.19484 8.96049 6.09946 9 6 9C5.90054 9 5.80516 8.96049 5.73484 8.89017C5.66451 8.81984 5.625 8.72446 5.625 8.625V7.5H4.5C4.40054 7.5 4.30516 7.46049 4.23484 7.39017C4.16451 7.31984 4.125 7.22446 4.125 7.125C4.125 7.02554 4.16451 6.93016 4.23484 6.85983C4.30516 6.78951 4.40054 6.75 4.5 6.75H5.625V5.625C5.625 5.52554 5.66451 5.43016 5.73484 5.35984C5.80516 5.28951 5.90054 5.25 6 5.25Z" />
                        <path d="M2.625 0C2.72446 0 2.81984 0.0395088 2.89016 0.109835C2.96049 0.180161 3 0.275544 3 0.375V0.75H9V0.375C9 0.275544 9.03951 0.180161 9.10983 0.109835C9.18016 0.0395088 9.27554 0 9.375 0C9.47446 0 9.56984 0.0395088 9.64017 0.109835C9.71049 0.180161 9.75 0.275544 9.75 0.375V0.75H10.5C10.8978 0.75 11.2794 0.908035 11.5607 1.18934C11.842 1.47064 12 1.85218 12 2.25V10.5C12 10.8978 11.842 11.2794 11.5607 11.5607C11.2794 11.842 10.8978 12 10.5 12H1.5C1.10218 12 0.720644 11.842 0.43934 11.5607C0.158035 11.2794 0 10.8978 0 10.5V2.25C0 1.85218 0.158035 1.47064 0.43934 1.18934C0.720644 0.908035 1.10218 0.75 1.5 0.75H2.25V0.375C2.25 0.275544 2.28951 0.180161 2.35984 0.109835C2.43016 0.0395088 2.52554 0 2.625 0ZM0.75 3V10.5C0.75 10.6989 0.829018 10.8897 0.96967 11.0303C1.11032 11.171 1.30109 11.25 1.5 11.25H10.5C10.6989 11.25 10.8897 11.171 11.0303 11.0303C11.171 10.8897 11.25 10.6989 11.25 10.5V3H0.75Z" />
                      </g>
                    </svg> 03 April, 2023
                    </a>
                  </Link>
                </li>
              </ul>
              <div className="social-area">
                <ul>
                  <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                  <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                  <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a></li>
                  <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
                </ul>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
                    <g>
                      <path d="M8.24971 1.87499C8.24966 1.43507 8.40429 1.00913 8.68656 0.6717C8.96883 0.334271 9.36076 0.106839 9.79378 0.0291942C10.2268 -0.0484506 10.6733 0.0286364 11.0553 0.246968C11.4372 0.4653 11.7302 0.810973 11.883 1.22351C12.0358 1.63605 12.0387 2.08918 11.8911 2.50362C11.7436 2.91807 11.455 3.26743 11.0759 3.4906C10.6967 3.71376 10.2512 3.79652 9.81725 3.72438C9.38328 3.65224 8.98849 3.42981 8.70196 3.09599L3.66346 5.43599C3.77929 5.80307 3.77929 6.19691 3.66346 6.56399L8.70196 8.90399C9.00484 8.55174 9.42771 8.32447 9.88861 8.26623C10.3495 8.20799 10.8156 8.32292 11.1966 8.58876C11.5776 8.8546 11.8463 9.2524 11.9507 9.70508C12.0551 10.1578 11.9877 10.6331 11.7617 11.0389C11.5356 11.4448 11.1669 11.7522 10.727 11.9017C10.2872 12.0512 9.80748 12.0321 9.38092 11.8481C8.95436 11.664 8.61131 11.3282 8.41825 10.9056C8.22518 10.4831 8.19586 10.0039 8.33596 9.56099L3.29746 7.22099C3.04804 7.51167 2.71557 7.71899 2.34479 7.81506C1.97402 7.91112 1.58271 7.89134 1.22351 7.75835C0.864319 7.62537 0.554467 7.38556 0.335641 7.07121C0.116815 6.75685 -0.000488281 6.38301 -0.000488281 5.99999C-0.000488281 5.61697 0.116815 5.24313 0.335641 4.92878C0.554467 4.61442 0.864319 4.37462 1.22351 4.24163C1.58271 4.10865 1.97402 4.08886 2.34479 4.18493C2.71557 4.281 3.04804 4.48831 3.29746 4.77899L8.33596 2.43899C8.27861 2.25649 8.24952 2.06629 8.24971 1.87499Z" fill="#0D1720" />
                    </g>
                  </svg>
                </span>
              </div>
            </div>
            <h3><Link legacyBehavior href="/blog-details"><a>Sustainability Consulting: Addressing Environmental and Social Concerns.</a></Link></h3>    
            <p>These advantages can help improve the quality of healthcare services, enhance operational efficiency, and address complex challenges within the healthcare industry.</p>
            <Link legacyBehavior href="/blog-details">
              <a className="explore-btn">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
              </svg>
              </a>
            </Link>
          </div>
        </div>
        <div className="blog-st-card mb-50">
          <div className="blog-img">
            <img src="assets/img/inner-pages/blog-st-03.jpg" alt="" />
          </div>
          <div className="blog-content">
            <div className="tag-and-social-icon">
              <ul className="tags">
                <li>
                  <Link legacyBehavior href="/blog-standard">
                    <a>
                    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                      <path d="M7.58455 3.09152C7.58455 3.4429 7.72414 3.7799 7.9726 4.02837C8.22107 4.27684 8.55807 4.41643 8.90946 4.41643C9.26085 4.41643 9.59785 4.27684 9.84632 4.02837C10.0948 3.7799 10.2344 3.4429 10.2344 3.09152C10.2344 2.74013 10.0948 2.40313 9.84632 2.15466C9.59785 1.90619 9.26085 1.7666 8.90946 1.7666C8.55807 1.7666 8.22107 1.90619 7.9726 2.15466C7.72414 2.40313 7.58455 2.74013 7.58455 3.09152ZM8.46782 3.09152C8.46782 2.97439 8.51435 2.86205 8.59718 2.77923C8.68 2.69641 8.79233 2.64988 8.90946 2.64988C9.02659 2.64988 9.13892 2.69641 9.22175 2.77923C9.30457 2.86205 9.3511 2.97439 9.3511 3.09152C9.3511 3.20865 9.30457 3.32098 9.22175 3.4038C9.13892 3.48662 9.02659 3.53315 8.90946 3.53315C8.79233 3.53315 8.68 3.48662 8.59718 3.4038C8.51435 3.32098 8.46782 3.20865 8.46782 3.09152Z" />
                      <path d="M11.1167 0H7.06602C6.83178 5.00265e-05 6.60715 0.093142 6.44154 0.2588L0.258612 6.44173C0.0930223 6.60737 0 6.832 0 7.06621C0 7.30042 0.0930223 7.52505 0.258612 7.69068L4.30932 11.7414C4.47495 11.907 4.69958 12 4.93379 12C5.168 12 5.39263 11.907 5.55827 11.7414L11.7412 5.55846C11.9069 5.39285 11.9999 5.16822 12 4.93398V0.883276C12 0.649017 11.9069 0.424352 11.7413 0.258706C11.5756 0.0930591 11.351 0 11.1167 0ZM11.1167 4.93398L4.93379 11.1169L0.883087 7.06621L7.06602 0.883276H11.1167V4.93398Z" />
                    </svg>Consulting
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/blog-standard">
                  <a>
                    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                      <g>
                        <path d="M6 5.25C6.09946 5.25 6.19484 5.28951 6.26517 5.35984C6.33549 5.43016 6.375 5.52554 6.375 5.625V6.75H7.5C7.59946 6.75 7.69484 6.78951 7.76517 6.85983C7.83549 6.93016 7.875 7.02554 7.875 7.125C7.875 7.22446 7.83549 7.31984 7.76517 7.39017C7.69484 7.46049 7.59946 7.5 7.5 7.5H6.375V8.625C6.375 8.72446 6.33549 8.81984 6.26517 8.89017C6.19484 8.96049 6.09946 9 6 9C5.90054 9 5.80516 8.96049 5.73484 8.89017C5.66451 8.81984 5.625 8.72446 5.625 8.625V7.5H4.5C4.40054 7.5 4.30516 7.46049 4.23484 7.39017C4.16451 7.31984 4.125 7.22446 4.125 7.125C4.125 7.02554 4.16451 6.93016 4.23484 6.85983C4.30516 6.78951 4.40054 6.75 4.5 6.75H5.625V5.625C5.625 5.52554 5.66451 5.43016 5.73484 5.35984C5.80516 5.28951 5.90054 5.25 6 5.25Z" />
                        <path d="M2.625 0C2.72446 0 2.81984 0.0395088 2.89016 0.109835C2.96049 0.180161 3 0.275544 3 0.375V0.75H9V0.375C9 0.275544 9.03951 0.180161 9.10983 0.109835C9.18016 0.0395088 9.27554 0 9.375 0C9.47446 0 9.56984 0.0395088 9.64017 0.109835C9.71049 0.180161 9.75 0.275544 9.75 0.375V0.75H10.5C10.8978 0.75 11.2794 0.908035 11.5607 1.18934C11.842 1.47064 12 1.85218 12 2.25V10.5C12 10.8978 11.842 11.2794 11.5607 11.5607C11.2794 11.842 10.8978 12 10.5 12H1.5C1.10218 12 0.720644 11.842 0.43934 11.5607C0.158035 11.2794 0 10.8978 0 10.5V2.25C0 1.85218 0.158035 1.47064 0.43934 1.18934C0.720644 0.908035 1.10218 0.75 1.5 0.75H2.25V0.375C2.25 0.275544 2.28951 0.180161 2.35984 0.109835C2.43016 0.0395088 2.52554 0 2.625 0ZM0.75 3V10.5C0.75 10.6989 0.829018 10.8897 0.96967 11.0303C1.11032 11.171 1.30109 11.25 1.5 11.25H10.5C10.6989 11.25 10.8897 11.171 11.0303 11.0303C11.171 10.8897 11.25 10.6989 11.25 10.5V3H0.75Z" />
                      </g>
                    </svg> 03 April, 2023
                  </a>
                  </Link>
                </li>
              </ul>
              <div className="social-area">
                <ul>
                  <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                  <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                  <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a></li>
                  <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
                </ul>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
                    <g>
                      <path d="M8.24971 1.87499C8.24966 1.43507 8.40429 1.00913 8.68656 0.6717C8.96883 0.334271 9.36076 0.106839 9.79378 0.0291942C10.2268 -0.0484506 10.6733 0.0286364 11.0553 0.246968C11.4372 0.4653 11.7302 0.810973 11.883 1.22351C12.0358 1.63605 12.0387 2.08918 11.8911 2.50362C11.7436 2.91807 11.455 3.26743 11.0759 3.4906C10.6967 3.71376 10.2512 3.79652 9.81725 3.72438C9.38328 3.65224 8.98849 3.42981 8.70196 3.09599L3.66346 5.43599C3.77929 5.80307 3.77929 6.19691 3.66346 6.56399L8.70196 8.90399C9.00484 8.55174 9.42771 8.32447 9.88861 8.26623C10.3495 8.20799 10.8156 8.32292 11.1966 8.58876C11.5776 8.8546 11.8463 9.2524 11.9507 9.70508C12.0551 10.1578 11.9877 10.6331 11.7617 11.0389C11.5356 11.4448 11.1669 11.7522 10.727 11.9017C10.2872 12.0512 9.80748 12.0321 9.38092 11.8481C8.95436 11.664 8.61131 11.3282 8.41825 10.9056C8.22518 10.4831 8.19586 10.0039 8.33596 9.56099L3.29746 7.22099C3.04804 7.51167 2.71557 7.71899 2.34479 7.81506C1.97402 7.91112 1.58271 7.89134 1.22351 7.75835C0.864319 7.62537 0.554467 7.38556 0.335641 7.07121C0.116815 6.75685 -0.000488281 6.38301 -0.000488281 5.99999C-0.000488281 5.61697 0.116815 5.24313 0.335641 4.92878C0.554467 4.61442 0.864319 4.37462 1.22351 4.24163C1.58271 4.10865 1.97402 4.08886 2.34479 4.18493C2.71557 4.281 3.04804 4.48831 3.29746 4.77899L8.33596 2.43899C8.27861 2.25649 8.24952 2.06629 8.24971 1.87499Z" fill="#0D1720" />
                    </g>
                  </svg>
                </span>
              </div>
            </div>
            <h3><Link legacyBehavior href="/blog-details"><a>Consulting Industry Adapts to the Changing Business.</a></Link></h3>    
            <p>These advantages can help improve the quality of healthcare services, enhance operational efficiency, and address complex challenges within the healthcare industry.</p>
            <Link legacyBehavior href="/blog-details">
              <a className="explore-btn">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
              </svg>
              </a>
            </Link>
          </div>
        </div>
        <div className="pagination-area">
          <ul className="paginations">
            <li className="page-item active">
              <a href="#">01</a>
            </li>
            <li className="page-item">
              <a href="#">02</a>
            </li>
            <li className="page-item">
              <a href="#">03</a>
            </li>
            <li className="page-item">
              <a href="#">04</a>
            </li>
            <li className="page-item">
              <a href="#">05</a>
            </li>
          </ul>
          <div className="paginations-button">
            <a href="#">
              Next
              <svg xmlns="http://www.w3.org/2000/svg" width={7} height={14} viewBox="0 0 7 14">
                <path d="M7 7.00008L0 0L4.45455 7.00008L0 14L7 7.00008Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="blog-sidebar">
          <div className="single-widgets widget_search mb-40">
            <form>
              <div className="wp-block-search__inside-wrapper ">
                <input type="search" id="wp-block-search__input-1" className="wp-block-search__input" name="s"  placeholder="Search..." required />
                <button type="submit" className="wp-block-search__button primary-btn3">
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
                    <path d="M11.7425 10.3418C12.7107 9.0205 13.1444 7.38236 12.9567 5.75508C12.769 4.1278 11.9739 2.63139 10.7303 1.56522C9.48666 0.49905 7.88635 -0.0582469 6.2495 0.0048239C4.61265 0.0678947 3.05997 0.746681 1.90209 1.90538C0.744221 3.06409 0.0665459 4.61725 0.00464636 6.25415C-0.0572531 7.89104 0.501188 9.49095 1.56825 10.7338C2.63531 11.9766 4.13229 12.7707 5.7597 12.9572C7.38711 13.1438 9.02494 12.7089 10.3455 11.7397H10.3445C10.3745 11.7797 10.4065 11.8177 10.4425 11.8547L14.2924 15.7046C14.4799 15.8922 14.7342 15.9977 14.9995 15.9977C15.2647 15.9978 15.5192 15.8926 15.7068 15.7051C15.8944 15.5176 15.9999 15.2632 16 14.9979C16.0001 14.7327 15.8948 14.4782 15.7073 14.2906L11.8575 10.4408C11.8217 10.4046 11.7833 10.3711 11.7425 10.3408V10.3418ZM12.0004 6.4979C12.0004 7.22015 11.8582 7.93532 11.5818 8.60258C11.3054 9.26985 10.9003 9.87614 10.3896 10.3868C9.87889 10.8975 9.2726 11.3027 8.60533 11.5791C7.93807 11.8554 7.2229 11.9977 6.50065 11.9977C5.77841 11.9977 5.06324 11.8554 4.39597 11.5791C3.72871 11.3027 3.12242 10.8975 2.61171 10.3868C2.10101 9.87614 1.6959 9.26985 1.41951 8.60258C1.14312 7.93532 1.00086 7.22015 1.00086 6.4979C1.00086 5.03927 1.5803 3.64037 2.61171 2.60896C3.64312 1.57755 5.04202 0.99811 6.50065 0.99811C7.95929 0.99811 9.35818 1.57755 10.3896 2.60896C11.421 3.64037 12.0004 5.03927 12.0004 6.4979Z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
          <div className="single-widgets widget_egns_categoris mb-40">
            <div className="widget-title">
              <h4>Category:</h4>
            </div>
            <ul className="wp-block-categoris-cloud">
              <li><Link legacyBehavior href="/blog-standard"><a><span>Technology</span> <span>(02)</span></a></Link></li>
              <li><Link legacyBehavior href="/blog-standard"><a><span>Marketing</span> <span>(04)</span> </a></Link></li>
              <li><Link legacyBehavior href="/blog-standard"><a><span>Fintech</span> <span>(06)</span></a></Link></li>
              <li><Link legacyBehavior href="/blog-standard"><a><span>Health &amp; Care</span> <span>(02)</span></a></Link></li>
              <li><Link legacyBehavior href="/blog-standard"><a><span>Human Resource</span> <span>(03)</span></a></Link></li>
              <li><Link legacyBehavior href="/blog-standard"><a><span>Corporate</span> <span>(04)</span></a></Link></li>
              <li><Link legacyBehavior href="/blog-standard"><a><span>Mobile Banking</span> <span>(03)</span></a></Link></li>
            </ul>
          </div>
          <div className="single-widgets widget_egns_recent_post mb-40">
            <div className="widget-title">
              <h4>Recent Article:</h4>
            </div>
            <div className="recent-post-wraper">
              <div className="widget-cnt">
                <div className="wi">
                  <Link legacyBehavior href="/blog-details"><a><img src="assets/img/inner-pages/blog-sidebar-1.jpg" alt="image" /></a></Link>
                </div>
                <div className="wc">
                  <Link legacyBehavior href="/blog-standard"><a>07 January, 2023 / Marko</a></Link>
                  <h5><Link legacyBehavior href="/blog-details"><a>Bootcamp; Change To Impressive Marketing Policy.</a></Link></h5>
                </div>
              </div>
              <div className="widget-cnt">
                <div className="wi">
                  <Link legacyBehavior href="/blog-details"><a><img src="assets/img/inner-pages/blog-sidebar-2.jpg" alt="image" /></a></Link>
                </div>
                <div className="wc">
                  <Link legacyBehavior href="/blog-standard"><a>02 March, 2023 / Mike</a></Link>
                  <h5><Link legacyBehavior href="/blog-details"><a>Become A Expert Any Business Field.</a></Link></h5>
                </div>
              </div>
              <div className="widget-cnt">
                <div className="wi">
                  <Link legacyBehavior href="/blog-details"><a><img src="assets/img/inner-pages/blog-sidebar-2.jpg" alt="image" /></a></Link>
                </div>
                <div className="wc">
                  <Link legacyBehavior href="/blog-standard"><a>06 March, 2023 / Barlow</a></Link>
                  <h5><Link legacyBehavior href="/blog-details"><a>Discussion Always Be Fast To Change Marketing Strategy.</a></Link></h5>
                </div>
              </div>
            </div>
          </div>
          <div className="single-widgets widget_egns_tag">
            <div className="widget-title">
              <h4>Tag:</h4>
            </div>
            <p className="wp-block-tag-cloud">
              <Link legacyBehavior href="/blog-standard"><a>Technology,</a></Link>
              <Link legacyBehavior href="/blog-standard"><a>Marketing,</a></Link>
              <Link legacyBehavior href="/blog-standard"><a>Fintech,</a></Link>
              <Link legacyBehavior href="/blog-standard"><a>Health,</a></Link>
              <Link legacyBehavior href="/blog-standard"><a>SEO Marketing,</a></Link>
              <Link legacyBehavior href="/blog-standard"><a>Development,</a></Link>
              <Link legacyBehavior href="/blog-standard"><a>Corporate,</a></Link>
              <Link legacyBehavior href="/blog-standard"><a>Human,</a></Link>
              <Link legacyBehavior href="/blog-standard"><a>Agency,</a></Link>
              <Link legacyBehavior href="/blog-standard"><a>Resources,</a></Link>
              <Link legacyBehavior href="/blog-standard"><a>Tech.</a></Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </MainLayout>
  )
}

export default BlogStandardPage
