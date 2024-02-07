import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <div className="banner-area6">
    <div className="container-fluid one pl--95">
        <div className="row">
        <div className="col-lg-12 d-flex flex-lg-row flex-column align-items-xxl-end align-items-lg-center justify-content-between gap-5">
            <div className="banner-left-content">
            <h1><span>Business consulting</span> is a professional service provided by individuals or firms.</h1>
            <div className="quate-text">
                <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width={42} height={42} viewBox="0 0 42 42">
                    <path fillRule="evenodd" clipRule="evenodd" d="M35.6529 3.71829L0 39.3693L2.63069 42L38.2817 6.34713V30.9976H42V0H11.0024V3.71829H35.6529Z" />
                </svg>          
                </div>
                <div className="content">
                <p>Current business operations, identify areas of improvement, and develop strategies
                    and solutions to address.</p>
                </div>
            </div>
            <ul className="btn-group">
                <li className="success-rate">Success Rate <span>90%</span></li>
                <li><a href="#">Determine Problem</a></li>
                <li><a href="#">Unqiue Solution</a></li>
            </ul>
            </div>
            <div className="banner-btn magnetic-item">
            <Link legacyBehavior href="/services1">
                <a>
                <div className="bg">
                <svg xmlns="http://www.w3.org/2000/svg" width={178} height={178} viewBox="0 0 178 178">
                    <path d="M107.104 13.1663L91.9409 2.13881C90.1876 0.863714 87.8124 0.863712 86.0591 2.1388L70.8963 13.1663C69.9429 13.8597 68.7751 14.1939 67.5992 14.1099L47.8337 12.6981C45.8159 12.554 43.91 13.6399 43.0053 15.4493L34.5654 32.3293C34.0815 33.2969 33.2969 34.0815 32.3293 34.5654L15.4493 43.0053C13.64 43.91 12.554 45.8159 12.6981 47.8337L14.1099 67.5992C14.1939 68.7751 13.8597 69.9429 13.1663 70.8963L2.13881 86.0591C0.863714 87.8124 0.863712 90.1876 2.1388 91.9409L13.1663 107.104C13.8597 108.057 14.1939 109.225 14.1099 110.401L12.6981 130.166C12.554 132.184 13.6399 134.09 15.4493 134.995L32.3293 143.435C33.2969 143.918 34.0815 144.703 34.5654 145.671L43.0053 162.551C43.91 164.36 45.8159 165.446 47.8337 165.302L67.5992 163.89C68.7751 163.806 69.9429 164.14 70.8963 164.834L86.0591 175.861C87.8124 177.136 90.1876 177.136 91.9409 175.861L107.104 164.834C108.057 164.14 109.225 163.806 110.401 163.89L130.166 165.302C132.184 165.446 134.09 164.36 134.995 162.551L143.435 145.671C143.918 144.703 144.703 143.918 145.671 143.435L162.551 134.995C164.36 134.09 165.446 132.184 165.302 130.166L163.89 110.401C163.806 109.225 164.14 108.057 164.834 107.104L175.861 91.9409C177.136 90.1876 177.136 87.8124 175.861 86.0591L164.834 70.8963C164.14 69.9429 163.806 68.7751 163.89 67.5992L165.302 47.8337C165.446 45.8159 164.36 43.91 162.551 43.0053L145.671 34.5654C144.703 34.0815 143.918 33.2969 143.435 32.3293L134.995 15.4493C134.09 13.64 132.184 12.554 130.166 12.6981L110.401 14.1099C109.225 14.1939 108.057 13.8597 107.104 13.1663Z" />
                </svg>
                </div>
                <div className="btn-content">
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
                </svg> <br /> Explore <br /> Now
                </div>
                </a>
            </Link>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Banner
