import Link from 'next/link'
import React from 'react'

const FindJob = () => {
  return (
    <div className="find-job-wrap mb-130">
    <div className="container-fluid one">
      <div className="row justify-content-center">
        <div className="col-xl-8">
          <div className="find-job-card">
            <span />
            <div className="find-job-left">
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width={42} height={42} viewBox="0 0 42 42">
                  <path fillRule="evenodd" clipRule="evenodd" d="M35.6529 3.71829L0 39.3693L2.63069 42L38.2817 6.34713V30.9976H42V0H11.0024V3.71829H35.6529Z" />
                </svg>     
              </div>
              <div className="content">
                <h5>Golden Opportunity!</h5>
                <p>Do you want to be a consultant? <Link legacyBehavior href="/career"><a>Find Jobs</a></Link></p>
              </div>
            </div>
            <div className="job-img">
              <img src="assets/img/home5/find-job.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FindJob
