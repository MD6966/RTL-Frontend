/* eslint-disable linebreak-style */
import React, { Component } from 'react'
import './videocontainer.css';
class Videocontainer extends Component {
  render() {
    return (
      <div
        className="basic-2"
        id="video"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">

                    
              <div className="image-container">
                <div className="video-wrapper">
                  <a
                    className="popup-youtube"
                    data-effect="fadeIn"
                    href="https://www.youtube.com/watch?v=fLCjQJCekTs"
                  >
                    <img
                      alt="alternative"
                      className="img-fluid"
                      src="images/video-image.png"
                    />
                    <span className="video-play-button">
                      <span />
                    </span>
                  </a>
                </div> 
              </div> 
                    

              <div className="p-heading">What better way to show off Tivo marketing automation saas app than presenting you some great situations of each module and tool available to users in a video</div>        
            </div> 
          </div> 
        </div> 
      </div> 
    )
  }
}
export default Videocontainer;