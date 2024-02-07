import React from 'react'
import Marquee from 'react-fast-marquee'

const ClientSection = () => {
  return (
    <div className="client-section mb-130">
    <div className="container-fluid one">
      <div className="col-lg-12 pl--95 pr--95">
        <div className="client-logo-wrap">
          <div className="marque-wrap">
            <Marquee>
            <div className="marquee_text2">
              <a href="#"><img src="assets/img/home2/client-logo1.png" alt="" /></a>
              <a href="#"><img src="assets/img/home2/client-logo2.png" alt="" /></a>
              <a href="#"><img src="assets/img/home2/client-logo3.png" alt="" /></a>
              <a href="#"><img src="assets/img/home2/client-logo4.png" alt="" /></a>
              <a href="#"><img src="assets/img/home2/client-logo5.png" alt="" /></a>
              <a href="#"><img src="assets/img/home2/client-logo6.png" alt="" /></a>
            </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default ClientSection
