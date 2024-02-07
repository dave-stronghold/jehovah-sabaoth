import React from 'react'

const VideoArea = () => {
  return (
    <div className="video-area">
  <div className="video-wrapper two">
    <div className="video-content-wrap">
      <div className="video-content">
        <h4><a href="#">Business Strategy
            <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
            </svg>
          </a></h4>
        <ul>
          <li>Planning</li>
          <li>Analysis</li>
          <li>Strategy</li>
        </ul>
      </div>
    </div>
    <video autoPlay loop muted playsInline src="assets/video/video-bg3.mp4" />
  </div>
</div>

  )
}

export default VideoArea
