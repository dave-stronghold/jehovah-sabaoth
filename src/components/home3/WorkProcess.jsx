import Link from 'next/link'
import React from 'react'

const WorkProcess = () => {
  return (
    <div className="working-process-section mb-130">
    <div className="container-fluid one pl--95">
      <div className="row">
        <div className="col-lg-12 gap-lg-5 gap-4 d-flex flex-lg-nowrap flex-wrap align-items-start justify-content-between mb-60">
          <div className="section-title1 one">
            <span>Working Process</span>
            <h2>A business consulting approach involves providing expert.</h2>
          </div>
          <Link legacyBehavior href="/services1">
            <a className="explore-btn">
            Explore Area
            <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
            </svg>
            </a>
          </Link>
        </div>
        <div className="col-lg-12">
          <div className="row g-xl-4 gy-5 justify-content-center">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="step-card1">
                <span>Step-01 :</span>
                <h3>Proposal &amp; Contracting</h3>
                <ul>
                  <li>Proposal Development</li>
                  <li>Client Review</li>
                  <li>Contract Negotiation</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 d-flex justify-content-lg-center justify-content-sm-end justify-content-start">
              <div className="step-card1">
                <span>Step-02 :</span>
                <h3>Solution Development</h3>
                <ul>
                  <li>Brainstorming &amp; Ideation</li>
                  <li>Strategic Planning</li>
                  <li>Recommendations </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 d-flex justify-content-xl-center justify-content-lg-end ">
              <div className="step-card1">
                <span>Step-03 :</span>
                <h3>Monitoring</h3>
                <ul>
                  <li>Performance Metrics</li>
                  <li>Regular Check-Ins</li>
                  <li>Contract Negotiation</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 d-flex justify-content-xl-end justify-content-lg-center justify-content-sm-end">
              <div className="step-card1">
                <span>Step-04 :</span>
                <h3>Final Documentation </h3>
                <p>Consultants provide a final report summarizing the project's outcomes, including achievements.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default WorkProcess
