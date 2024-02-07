import React from 'react'

const Contact = () => {
  return (
    <div className="contact-section3 mb-130 ">
  <div className="container-fluid one pl--95">
    <div className="row g-4">
      <div className="col-lg-4 d-lg-flex d-none">
        <div className="contact-img">
          <img src="assets/img/home4/contact-left-img.jpg" alt="" />
          <div className="logo">
            <img src="assets/img/home4/contact-piramid.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="contact-form-area">
          <div className="section-title1 two white mb-40">
            <h2>How can We Help You? Lest’s Connect With Us!</h2>
          </div>
          <form>
            <div className="row">
              <div className="col-lg-6 mb-30">
                <div className="form-inner">
                  <label>Name*</label>
                  <input type="text" placeholder="Daniel Scoot" />
                </div>
              </div>
              <div className="col-lg-6 mb-30">
                <div className="form-inner">
                  <label>Work Email*</label>
                  <input type="email" placeholder="infoexample@gmail.com" />
                </div>
              </div>
              <div className="col-lg-6 mb-30">
                <div className="form-inner">
                  <label>Company Name*</label>
                  <input type="text" placeholder="Consult Pro" />
                </div>
              </div>
              <div className="col-lg-6 mb-30">
                <div className="form-inner">
                  <label>Consulting Area*</label>
                  <input type="text" placeholder="Dealership" />
                </div>
              </div>
              <div className="col-lg-12 mb-15">
                <div className="form-inner">
                  <label>Further Details*</label>
                  <textarea placeholder="What’s on your mind" defaultValue={""} />
                </div>
              </div>
              <div className="col-lg-12 mb-50">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" defaultValue id="contactCheck" />
                  <label className="form-check-label" htmlFor="contactCheck">
                    Please save my name, email address for the next time I message with aploxn. 
                  </label>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-inner">
                  <button className="explore-btn two btn-hover" type="submit">
                    Submit Now
                    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
                    </svg>
                    <span />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Contact
