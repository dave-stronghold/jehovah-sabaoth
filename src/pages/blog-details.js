import React from 'react'
import MainLayout from '../components/layout/MainLayout'
import Link from 'next/link'

const BlogDetailsPage = () => {
  return (
    <MainLayout>
      <div className="blog-details-page pt-130 mb-130">
  <div className="container">
    <div className="row g-lg-4 gy-5">
      <div className="col-lg-8">
        <div className="post-thumb mb-25">
          <img src="assets/img/inner-pages/blog-dt-big.jpg" alt="" />
        </div>
        <div className="post-tag-and-title">
          <ul className="tags">
            <li>
              <Link legacyBehavior href="/blog-standard">
                <a>
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                  <path d="M7.58455 3.09152C7.58455 3.4429 7.72414 3.7799 7.9726 4.02837C8.22107 4.27684 8.55807 4.41643 8.90946 4.41643C9.26085 4.41643 9.59785 4.27684 9.84632 4.02837C10.0948 3.7799 10.2344 3.4429 10.2344 3.09152C10.2344 2.74013 10.0948 2.40313 9.84632 2.15466C9.59785 1.90619 9.26085 1.7666 8.90946 1.7666C8.55807 1.7666 8.22107 1.90619 7.9726 2.15466C7.72414 2.40313 7.58455 2.74013 7.58455 3.09152ZM8.46782 3.09152C8.46782 2.97439 8.51435 2.86205 8.59718 2.77923C8.68 2.69641 8.79233 2.64988 8.90946 2.64988C9.02659 2.64988 9.13892 2.69641 9.22175 2.77923C9.30457 2.86205 9.3511 2.97439 9.3511 3.09152C9.3511 3.20865 9.30457 3.32098 9.22175 3.4038C9.13892 3.48662 9.02659 3.53315 8.90946 3.53315C8.79233 3.53315 8.68 3.48662 8.59718 3.4038C8.51435 3.32098 8.46782 3.20865 8.46782 3.09152Z" />
                  <path d="M11.1167 0H7.06602C6.83178 5.00265e-05 6.60715 0.093142 6.44154 0.2588L0.258612 6.44173C0.0930223 6.60737 0 6.832 0 7.06621C0 7.30042 0.0930223 7.52505 0.258612 7.69068L4.30932 11.7414C4.47495 11.907 4.69958 12 4.93379 12C5.168 12 5.39263 11.907 5.55827 11.7414L11.7412 5.55846C11.9069 5.39285 11.9999 5.16822 12 4.93398V0.883276C12 0.649017 11.9069 0.424352 11.7413 0.258706C11.5756 0.0930591 11.351 0 11.1167 0ZM11.1167 4.93398L4.93379 11.1169L0.883087 7.06621L7.06602 0.883276H11.1167V4.93398Z" />
                </svg> Consulting
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
          <h2>Consulting Ethics: Navigating Moral Dilemmas in Client Relationships.</h2>
        </div>
        <p>In an era where environmental consciousness is becoming increasingly important, sustainable living has taken center stage. This blog post delves into the world of eco-friendly homes and green building, showcasing how these practices contribute to a greener future. Discover the latest trends and innovations in sustainable real estate, from energy-efficient designs to renewable materials. Explore the benefits of eco-friendly homes, such as reduced carbon footprint, lower utility costs, and improved indoor air quality. Gain insights into green building techniques, including passive design, solar panels, rainwater harvesting, and smart home technologies.</p>
        <p>The business consulting process involves a series of steps that consultants follow when working with clients to address specific challenges, improve operations, or achieve organizational goals. While the exact process may vary depending on the consulting firm and the nature of the engagemen.</p>
        <blockquote> 
          <div className="quoat-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width={26} height={18} viewBox="0 0 26 18">
              <path d="M20.6832 6.05443L20.4534 6.62147L21.0549 6.73371C23.6453 7.21714 25.5 9.46982 25.5 12.0337C25.5 13.573 24.8343 15.0529 23.6667 16.09C22.4982 17.1192 20.9207 17.6286 19.3329 17.4722C16.4907 17.1844 14.2846 14.6588 14.3404 11.7032C14.4201 7.67759 15.8945 5.07458 17.6289 3.38578C19.3761 1.68459 21.4158 0.884497 22.6452 0.531618L22.6591 0.527628L22.6728 0.52284C22.7152 0.507954 22.7704 0.5 22.8713 0.5C23.1425 0.5 23.3799 0.624329 23.5265 0.85037L23.5277 0.852289C23.7128 1.13485 23.6857 1.4981 23.4524 1.75822L23.4523 1.75827C22.2163 3.13698 21.2806 4.57999 20.6832 6.05443Z" stroke="white" />
              <path d="M6.84136 6.05442L6.61159 6.62147L7.21303 6.73371C9.80353 7.21714 11.6582 9.46983 11.6582 12.0337C11.6582 13.573 10.9925 15.0529 9.82487 16.09C8.65615 17.1194 7.07865 17.6285 5.50008 17.4722C2.67976 17.1842 0.498651 14.7207 0.498651 11.8126V11.6985C0.579458 7.67556 2.05336 5.07393 3.7871 3.38579C5.53424 1.6846 7.574 0.884504 8.8034 0.531628L8.81731 0.527636L8.83096 0.522848C8.8734 0.507959 8.92859 0.500008 9.02944 0.500008C9.3007 0.500008 9.53807 0.624359 9.68459 0.850338L9.6859 0.852327C9.87103 1.13488 9.84386 1.49811 9.61059 1.75823L9.61054 1.75828C8.37446 3.13698 7.43881 4.57999 6.84136 6.05442Z" stroke="white" />
            </svg>
          </div>
          <p>The business consulting process involves a series of steps that consultants follow when working with clients to address specific challenges, improve operations, or achieve organizational goals.</p>
          <cite>Rakhab Uddin</cite>
        </blockquote>
        <div className="row g-4 mb-20">
          <div className="col-sm-6">
            <div className="blog-dt-img">
              <img className="img-fluid" src="assets/img/inner-pages/blog-dt-sm1.jpg" alt="" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="blog-dt-img">
              <img className="img-fluid" src="assets/img/inner-pages/blog-dt-sm2.jpg" alt="" />
            </div>
          </div>
        </div>
        <p>Whether you're a lifelong car lover or simply intrigued by the world of cars, this exploration will leave you with a deepened understanding and appreciation for the artistry, innovation, and joy that cars and driving bring to our lives.</p>
        <div className="blog-tag-social-area">
          <div className="bolg-tag">
            <h6>Tag:</h6>
            <ul>
              <li><a href="blog-standard">Industry,</a></li>
              <li><a href="blog-standard">Marketing,</a></li>
              <li><a href="blog-standard">Technology,</a></li>
              <li><a href="blog-standard">Health Care</a></li>
            </ul>
          </div>
          <div className="social-area">
            <h6>Share:</h6>
            <ul className="social-link d-flex align-items-center">
              <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
              <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
              <li><a href="https://www.pinterest.com/"><i className="bx bxl-linkedin" /></a></li>
              <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
            </ul>
          </div>
        </div>
        <div className="row mb-100">
          <div className="col-lg-12">
            <div className="details-navigation">
              <div className="single-navigation">
                <a className="arrow" href="#blog-details">
                  <svg width={9} height={15} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                  </svg>
                </a>
                <div className="content">
                  <a href="blog-details">Prev Post</a>
                  <h6><a href="blog-details">Consulting vs. In-House Expertise: Finding the Right Balance</a></h6>
                </div>
              </div>
              <div className="single-navigation two text-end">
                <div className="content">
                  <a href="blog-details">Next Post</a>
                  <h6><a href="blog-details">Consulting Industry Adapts to the Changing Business Landscape</a></h6>
                </div>
                <a className="arrow" href="blog-details">
                  <svg width={9} height={15} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="comment-area">
            <div className="comment-title">
              <h4>Comments (03)</h4>
              <div className="dash" />
            </div>
            <ul className="comment">
              <li>
                <div className="single-comment-area">
                  <div className="author-img">
                    <img src="assets/img/inner-pages/comment-author-01.jpg" alt="" />
                  </div>
                  <div className="comment-content">
                    <div className="author-name-deg">
                      <h6>Mr. Bowmik Haldar,</h6>
                      <span>05 June, 2023</span>
                    </div>
                    <p>However, here are some well-regarded car dealerships known for their customer service, inventory, and overall reputation. It's always a good idea to research and read reviews specific...</p>
                    <div className="replay-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width={14} height={11} viewBox="0 0 14 11">
                        <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z" />
                      </svg>
                      Reply (02)
                    </div>
                  </div>
                </div>
                <ul className="comment-replay">
                  <li>
                    <div className="single-comment-area">
                      <div className="author-img">
                        <img src="assets/img/inner-pages/comment-author-02.jpg" alt="" />
                      </div>
                      <div className="comment-content">
                        <div className="author-name-deg">
                          <h6>Jacoline Juie,</h6>
                          <span>05 June, 2023</span>
                        </div>
                        <p>However, here are some well-regarded car dealerships known for their customer service, inventory, and overall reputation. It's always a good idea to research and read reviews specific...</p>
                        <div className="replay-btn">
                          <svg xmlns="http://www.w3.org/2000/svg" width={14} height={11} viewBox="0 0 14 11">
                            <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z" />
                          </svg>
                          Reply
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-comment-area">
                      <div className="author-img">
                        <img src="assets/img/inner-pages/comment-author-03.jpg" alt="" />
                      </div>
                      <div className="comment-content">
                        <div className="author-name-deg">
                          <h6>Robert Smith,</h6>
                          <span>05 June, 2023</span>
                        </div>
                        <p>However, here are some well-regarded car dealerships known for their customer service, inventory, and overall reputation. It's always a good idea to research and read reviews specific...</p>
                        <div className="replay-btn">
                          <svg xmlns="http://www.w3.org/2000/svg" width={14} height={11} viewBox="0 0 14 11">
                            <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z" />
                          </svg>
                          Reply
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="single-comment-area">
                  <div className="author-img">
                    <img src="assets/img/inner-pages/comment-author-04.jpg" alt="" />
                  </div>
                  <div className="comment-content">
                    <div className="author-name-deg">
                      <h6>Srileka Panday,</h6>
                      <span>05 June, 2023</span>
                    </div>
                    <p>However, here are some well-regarded car dealerships known for their customer service, inventory, and overall reputation. It's always a good idea to research and read reviews specific...</p>
                    <div className="replay-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width={14} height={11} viewBox="0 0 14 11">
                        <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z" />
                      </svg>
                      Reply (02)
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="single-comment-area">
                  <div className="author-img">
                    <img src="assets/img/inner-pages/comment-author-05.jpg" alt="" />
                  </div>
                  <div className="comment-content">
                    <div className="author-name-deg">
                      <h6>Mr. Bowmik Haldar,</h6>
                      <span>05 June, 2023</span>
                    </div>
                    <p>However, here are some well-regarded car dealerships known for their customer service, inventory, and overall reputation. It's always a good idea to research and read reviews specific...</p>
                    <div className="replay-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width={14} height={11} viewBox="0 0 14 11">
                        <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z" />
                      </svg>
                      Reply (02)
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div className="inquiry-form mt-100">
              <div className="title">
                <h4>Leave Your Comment:</h4>
              </div>
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-inner mb-30">
                      <label>Your Name* :</label>
                      <input type="text" placeholder="Jackson Mile" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner mb-30">
                      <label>Your Email* :</label>
                      <input type="email" placeholder="example@gamil.com" />
                    </div>
                  </div>
                  <div className="col-md-12 mb-30">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" defaultValue id="contactCheck" />
                      <label className="form-check-label" htmlFor="contactCheck">
                        Please save my name, email address for the next time I comment.  
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-inner mb-50">
                      <label>Your Message :</label>
                      <textarea placeholder="Write Something..." defaultValue={""} />
                    </div>
                  </div>
                </div>
                <div className="form-inner">
                  <button className="primary-btn1 btn-hover" type="submit">
                    Post Comment
                    <span />
                  </button>
                </div>
              </form>
            </div>
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
                  <h5><Link legacyBehavior href="/blog-details"><a><img src="assets/img/inner-pages/blog-sidebar-1.jpg" alt="image" /></a></Link></h5>
                </div>
              </div>
              <div className="widget-cnt">
                <div className="wi">
                  <Link legacyBehavior href="/blog-details"><a><img src="assets/img/inner-pages/blog-sidebar-2.jpg" alt="image" /></a></Link>
                </div>
                <div className="wc">
                  <Link legacyBehavior href="/blog-standard"><a>02 March, 2023 / Mike</a></Link>
                  <h5><Link legacyBehavior href="/blog-details"><a><img src="assets/img/inner-pages/blog-sidebar-2.jpg" alt="image" /></a></Link></h5>
                </div>
              </div>
              <div className="widget-cnt">
                <div className="wi">
                  <Link legacyBehavior href="/blog-details"><a><img src="assets/img/inner-pages/blog-sidebar-2.jpg" alt="image" /></a></Link>
                </div>
                <div className="wc">
                  <Link legacyBehavior href="/blog-standard"><a>06 March, 2023 / Barlow</a></Link>
                  <h5><Link legacyBehavior href="/blog-details"><a><img src="assets/img/inner-pages/blog-sidebar-2.jpg" alt="image" /></a></Link></h5>
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

export default BlogDetailsPage
