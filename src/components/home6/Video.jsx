import React from 'react'

const Video = () => {
  return (
    <div className="home6-video-section mb-130">
    <div className="container-fluid one">
      <div className="row">
        <div className="col-lg-12">
          <div className="video-wrapper">
            <video autoPlay loop muted playsInline src="assets/video/video-bg3.mp4" />
            <div className="video-content-wrap">
              <div className="video-content">
                <div className="icon">
                  <img src="assets/img/home6/circle.svg" alt="icon" />
                </div>
                <div className="content">
                  <h2>90%</h2>
                  <p>Positive Impression</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Video
