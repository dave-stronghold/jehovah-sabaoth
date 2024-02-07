import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div className="home6-about-section">
    <div className="container-fluid one pl--95">
      <div className="row g-4">
        <div className="col-lg-3 d-flex justify-content-lg-center">
          <div className="sub-title">
            <span>Welcome to Aploxn</span>
          </div>
        </div>
        <div className="col-lg-9 gap-lg-5 gap-4 d-flex flex-lg-nowrap flex-wrap align-items-start justify-content-between">
          <div className="section-title1 white">
            <h2><Link legacyBehavior href="/about"><a>Business consulting </a></Link> is a professional service provided by individuals or firms to help organizations improve their performance, solve specific problems, or achieve specific objectives. Business consultants, often referred to as management consultants, work closely with their clients to analyze.</h2>
          </div>
          <Link legacyBehavior href="/about">
            <a className="explore-btn">
            About More
            <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
            </svg>
            </a>
          </Link>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default About
