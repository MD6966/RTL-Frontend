/* eslint-disable linebreak-style */
import React, { Component } from 'react'
import './textcontainer.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

class Textcontainer extends Component {
  render() {
    return (
      <div
        className="basic-1"
        id="details"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-container">
                <h2 className="list-heading-margin">OUR DASHBOARD OFFERS</h2>
                <ul className="list-unstyled li-space-lg">
                  <li
                    className="media list-margin"
                    data-aos="fade-right"
                    data-aos-duration="300"
                    data-aos-offset="300"
                  >
                    <img
                      alt="Alerts"
                      className="custom-icon-size"
                      src="images/icons/1.webp"
                    />
                    <div className="media-body list-font">Alerts</div>
                  </li>
                  <li
                    className="media list-margin"
                    data-aos="fade-right"
                    data-aos-duration="305"
                    data-aos-offset="305"
                  >
                    <img
                      alt="Fault"
                      className="custom-icon-size"
                      src="images/icons/2.webp"
                    />
                    <div className="media-body list-font">Fault Reporting</div>
                  </li>
                  <li
                    className="media list-margin"
                    data-aos="fade-right"
                    data-aos-duration="310"
                    data-aos-offset="310"
                  >
                    <img
                      alt="Graphs"
                      className="custom-icon-size"
                      src="images/icons/3.webp"
                    />
                    <div className="media-body list-font">Logs and Graphs</div>
                  </li>
                  <li
                    className="media list-margin"
                    data-aos="fade-right"
                    data-aos-duration="315"
                    data-aos-offset="315"
                  >
                    <img
                      alt="Control"
                      className="custom-icon-size"
                      src="images/icons/4.webp"
                    />
                    <div className="media-body list-font">Real Time Control</div>
                  </li>
                  <li
                    className="media list-margin"
                    data-aos="fade-right"
                    data-aos-duration="320"
                    data-aos-offset="320"
                  >
                    <img
                      alt="Monitoring"
                      className="custom-icon-size"
                      src="images/icons/5.webp"
                    />
                    <div className="media-body list-font">Real Time Monitoring</div>
                  </li>
                  <li
                    className="media list-margin"
                    data-aos="fade-right"
                    data-aos-duration="325"
                    data-aos-offset="325"
                  >
                    <img
                      alt="Reports"
                      className="custom-icon-size"
                      src="images/icons/6.webp"
                    />
                    <div className="media-body list-font">Reports</div>
                  </li>
                  <li
                    className="media list-margin"
                    data-aos="fade-right"
                    data-aos-duration="330"
                    data-aos-offset="330"
                  >
                    <img
                      alt="Settings"
                      className="custom-icon-size"
                      src="images/icons/7.webp"
                    />
                    <div className="media-body list-font">Settings Of Threshold and Data Points</div>
                  </li>
                </ul>
              </div> 
            </div> 
            <div
              className="col-lg-6 aos-init aos-animate"
              data-aos="fade-up-left"
              data-aos-duration="300"
              data-aos-easing="ease-in-sine"
              data-aos-offset="300"
            >
              <div className="image-container">
                <img
                  alt="alternative"
                  className="img-fluid  custom-img-fluid"
                  src="images/about-motivation.webp"
                />
              </div> 
            </div> 
          </div> 
        </div> 
      </div>
    )
  }
}
export default Textcontainer;