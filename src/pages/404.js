import React from 'react'
import Link from 'next/link'

const CustomError = () => {
  return (
    <div className="error-section pt-130 mb-130">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="error-wrapper">
            <div className="error-img mb-50">
              <img src="assets/img/inner-pages/404.svg" alt="" />
            </div>
            <div className="error-content">
              <h1>Opps, Page Not Found</h1>
              <p>Something went wrong, web page that is displayed to the user when the server cannot find the requested page.</p>
              <div className="back-btn">
                <Link legacyBehavior href="/">
                  <a className="primary-btn1 btn-hover">
                  <i className="bi bi-house-door" />
                  Back To Home
                  <span />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default CustomError
