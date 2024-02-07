import React from "react";
import MainLayout from "../components/layout/MainLayout";

const ApplyPositionPage = () => {
  return (
    <MainLayout>
      <div className="apply-position-section pt-130 mb-130">
        <div className="container-fluid one pl--95">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-8 pr--95">
              <div className="job-description mb-30">
                <p>
                  <strong>Job Description:</strong> A UI/UX (User Interface/User
                  Experience) designer is responsible for designing and creating
                  engaging and effective interfaces for software and web
                  applications. This includes designing the layout, visual
                  design, and interactivity of the user interface.
                </p>
              </div>
              <div className="job-responsibility mb-30">
                <p>
                  <strong>Job Responsibility:</strong> Collaborating with
                  cross-functional teams: UI/UX designers often work closely
                  with other teams, including product management, engineering,
                  and marketing, to ensure that the user interface is aligned
                  with business and technical requirements. You will need to be
                  able to effectively communicate your design ideas and gather
                  feedback from other team members.
                </p>
                <ul>
                  <li>
                    Conducting user research and testing to understand user
                    needs and behaviors.
                  </li>
                  <li>
                    Designing wireframes, prototypes, and high-fidelity mockups.
                  </li>
                  <li>
                    Developing and maintaining design systems and style guides.
                  </li>
                  <li>
                    Staying up-to-date with the latest design trends and
                    technologies.
                  </li>
                </ul>
              </div>
              <div className="job-responsibility mb-130">
                <p>
                  <strong>Educational Requirements:</strong>{" "}
                </p>
                <ul>
                  <li>Phd to complete any reputational university.</li>
                  <li>
                    Two more publication published in international journal.
                  </li>
                </ul>
              </div>
              <div className="position-apply-form">
                <div className="section-title1 two mb-60">
                  <h2>How to Apply of this Position</h2>
                  <p>
                    While a career in business consulting comes with many
                    benefits, it also involves challenges, such as dealing with
                    client expectations, tight deadlines, and continuous
                    adaptation to new industries and technologies.
                  </p>
                </div>
                <div className="contact-form-area two three">
                  <form>
                    <div className="row">
                      <div className="col-lg-6 mb-25">
                        <div className="form-inner">
                          <label>First Name</label>
                          <input type="text" placeholder="Daniel" />
                        </div>
                      </div>
                      <div className="col-lg-6 mb-25">
                        <div className="form-inner">
                          <label>Last Name</label>
                          <input type="text" placeholder="Scoot" />
                        </div>
                      </div>
                      <div className="col-lg-6 mb-25">
                        <div className="form-inner">
                          <label>Your Email*</label>
                          <input
                            type="email"
                            placeholder="infoexample@gmail.com"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 mb-25">
                        <div className="form-inner">
                          <label>Phone Number</label>
                          <input
                            type="text"
                            placeholder="+920- 5566 **** ****"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-25">
                        <div className="form-inner">
                          <label>Cover Letter*</label>
                          <textarea
                            placeholder="Write cover letter"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="upload-file-area">
                          <div className="upload-field-title">
                            <h6>Upload PDF</h6>
                          </div>
                          <div className="custom-upload-field">
                            <div className="upload-pdf-icon">
                              <img
                                src="assets/img/inner-pages/upload-pdf-icon.svg"
                                alt=""
                              />
                            </div>
                            <input type="file" className="custom-upload" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 mb-50">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue
                            id="contactCheck"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="contactCheck"
                          >
                            I have read &amp; accepted Terms &amp; Conditions.
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-inner">
                          <button
                            className="primary-btn1 btn-hover"
                            type="submit"
                          >
                            Submit Now
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
                            <span
                              style={{ top: "60.5781px", left: "31.5938px" }}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="job-summary-area">
                <ul>
                  <li>
                    <span className="title">Job Posted:</span>
                    <span> 02 February, 2023.</span>
                  </li>
                  <li>
                    <span className="title">Vacancy:</span> 07 Person
                  </li>
                  <li>
                    <span className="title">Experiences:</span> 2-3 Years.
                  </li>
                  <li>
                    <span className="title">Education:</span> Phd Completed.
                  </li>
                  <li>
                    <span className="title">Gender:</span> Male/Female
                  </li>
                  <li>
                    <span className="title">Deadline:</span> 02/12/2023
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ApplyPositionPage;
