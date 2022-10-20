/* eslint-disable linebreak-style */
import React, { Component } from 'react'
import './tabs.css';
import { FaIndustry } from 'react-icons/fa';
import BusinessIcon from '@material-ui/icons/Business';
import { GiFishEscape } from 'react-icons/gi';
import { FiMonitor } from 'react-icons/fi'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

class Tabs extends Component {
  render() {
    return (
          
      <div
        className="tabs"
        id="features"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="above-heading">FEATURES</div>
              <h2 className="h2-heading">Marketing Automation</h2>
              <p className="p-heading">LIVING UP TO THE PROMISE OF DRIVING EFFICIENCY AND ENHANCING PERFORMANCE</p>
            </div> 
          </div> 
          <div className="row">
            <div className="col-lg-12">
              <ul
                className="nav nav-tabs"
                id="argoTabs"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    aria-controls="tab-1"
                    aria-selected="true"
                    className="nav-link active"
                    data-toggle="tab"
                    href="#tab-1"
                    id="nav-tab-1"
                    role="tab"
                  ><FiMonitor /> Access & Surveillance</a>
                </li>
                <li className="nav-item">
                  <a
                    aria-controls="tab-2"
                    aria-selected="false"
                    className="nav-link"
                    data-toggle="tab"
                    href="#tab-2"
                    id="nav-tab-2"
                    role="tab"
                  ><BusinessIcon /> Building and Community</a>
                </li>
                <li className="nav-item">
                  <a
                    aria-controls="tab-3"
                    aria-selected="false"
                    className="nav-link"
                    data-toggle="tab"
                    href="#tab-3"
                    id="nav-tab-3"
                    role="tab"
                  ><FaIndustry /> Industrial</a>
                </li>
                <li className="nav-item">
                  <a
                    aria-controls="tab-4"
                    aria-selected="false"
                    className="nav-link"
                    data-toggle="tab"
                    href="#tab-4"
                    id="nav-tab-4"
                    role="tab"
                  ><GiFishEscape /> Agriculture & Fishery</a>
                </li>
              </ul>
                    

                   
              <div
                className="tab-content"
                id="argoTabsContent"
              >   
                <div
                  aria-labelledby="tab-1"
                  className="tab-pane fade show active"
                  id="tab-1"
                  role="tabpanel"
                >
                  <div className="row test-mb">
                    <div
                      className="col-lg-6 test-img-div aos-init aos-animate"
                      data-aos="fade-down-right"
                      data-aos-anchor="#nav-tab-1"
                      data-aos-duration="300"
                      data-aos-easing="ease-in-sine"
                      data-aos-offset="300"
                    >
                      <div className="image-container">
                        <img
                          alt="alternative"
                          className="img-fluid custom-img-fluid-3"
                          src="images/Access-Presence-Monitoring-System-1.webp"
                        />
                      </div> 
                    </div> 
                    <div className="col-lg-6">
                      <div className="text-container">
                        <h4 className="test-heading-margin test-h4-font">ACCESS & PRESENCE MONITORING SYSTEM</h4>
                        <ul className="list-unstyled li-space-lg">
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-1"
                            data-aos-duration="300"
                            data-aos-offset="300"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Facial Recognition</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-1"
                            data-aos-duration="320"
                            data-aos-offset="320"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Displays Attendance With Exact Time Stamp</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-1"
                            data-aos-duration="340"
                            data-aos-offset="340"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Supports Multiple Camera Integration</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-1"
                            data-aos-duration="360"
                            data-aos-offset="360"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Display Employee List With IDs</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-1"
                            data-aos-duration="380"
                            data-aos-offset="380"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">User Defined Thresholds For Late Entry And Absence</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-1"
                            data-aos-duration="400"
                            data-aos-offset="400"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">User Defined Check-In And Check-Out Time Option</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-1"
                            data-aos-duration="420"
                            data-aos-offset="420"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Electronic/Electrical Devices/Appliances Automation</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-1"
                            data-aos-duration="440"
                            data-aos-offset="440"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Manual Switch – Check In/Check Out</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-1"
                            data-aos-duration="460"
                            data-aos-offset="460"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Flexible Interval Reporting</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-1"
                            data-aos-duration="480"
                            data-aos-offset="480"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">System Status (Online/Offline)</div>
                          </li>
                        </ul>
                      </div> 
                    </div> 
                  </div> 

                  <div className="row test-mb">
                    <div className="col-lg-6">
                      <div className="text-container">
                        <h4 className="test-heading-margin test-h4-font">OBJECT TRACKING SYSTEM</h4>
                        <ul className="list-unstyled li-space-lg">
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-1"
                            data-aos-duration="500"
                            data-aos-offset="500"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Real-Time Asset Tracking</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-1"
                            data-aos-duration="520"
                            data-aos-offset="520"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Customized Geo-Fencing</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-1"
                            data-aos-duration="540"
                            data-aos-offset="540"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Geo-Fence Zone In/Zone Out Notification</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-1"
                            data-aos-duration="560"
                            data-aos-offset="560"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Monitoring On Mobile App And Dashboard</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-1"
                            data-aos-duration="580"
                            data-aos-offset="580"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Centralized Dashboard/Application For Multiple Systems</div>
                          </li>
                        </ul>
                      </div> 
                    </div> 

                    <div
                      className="col-lg-6 test-img-div aos-init aos-animate"
                      data-aos="fade-down-left"
                      data-aos-anchor="#nav-tab-1"
                      data-aos-duration="500"
                      data-aos-easing="ease-in-sine"
                      data-aos-offset="500"
                    >
                      <div className="image-container">
                        <img
                          alt="alternative"
                          className="img-fluid custom-img-fluid-3"
                          src="images/Object-Tracking-System-2.webp"
                        />
                      </div> 
                    </div>
                  </div>

                  <div className="row">
                    <div
                      className="col-lg-6 test-img-div aos-init aos-animate"
                      data-aos="fade-down-right"
                      data-aos-anchor="#nav-tab-1"
                      data-aos-duration="700"
                      data-aos-easing="ease-in-sine"
                      data-aos-offset="700"
                    >
                      <div className="image-container">
                        <img
                          alt="alternative"
                          className="img-fluid custom-img-fluid-3"
                          src="images/General-Surveillance-System-2.webp"
                        />
                      </div> 
                    </div> 
                    <div className="col-lg-6">
                      <div className="text-container">
                        <h4 className="test-heading-margin test-h4-font">GENERAL SURVEILLANCE SYSTEM</h4>
                        <ul className="list-unstyled li-space-lg">
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-1"
                            data-aos-duration="700"
                            data-aos-offset="700"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">IP Based Solution</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-1"
                            data-aos-duration="720"
                            data-aos-offset="720"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Object Identification</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-1"
                            data-aos-duration="740"
                            data-aos-offset="740"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Night Vision Support</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-1"
                            data-aos-duration="760"
                            data-aos-offset="760"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Indoor Camera (360degree Freedom, Dual Communication)</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-1"
                            data-aos-duration="780"
                            data-aos-offset="780"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Outdoor Camera (Dust Proof, Rain Resistance, ISO Standard IP68)</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-1"
                            data-aos-duration="800"
                            data-aos-offset="800"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Event/Motion-Based Recording</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-1"
                            data-aos-duration="820"
                            data-aos-offset="820"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Low-Light Viewing</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-1"
                            data-aos-duration="840"
                            data-aos-offset="840"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Centralized Application Monitoring</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-1"
                            data-aos-duration="860"
                            data-aos-offset="860"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Monitoring On Mobile App And Dashboard</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-1"
                            data-aos-duration="880"
                            data-aos-offset="880"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Centralized Dashboard/Application For Multiple Systems</div>
                          </li>
                        </ul>
                      </div> 
                    </div> 
                  </div> 

                </div> 

                <div
                  aria-labelledby="tab-2"
                  className="tab-pane fade"
                  id="tab-2"
                  role="tabpanel"
                >
                  <div className="row test-mb">
                    <div
                      className="col-lg-6 test-img-div aos-init aos-animate"
                      data-aos="fade-down-right"
                      data-aos-anchor="#nav-tab-1"
                      data-aos-duration="300"
                      data-aos-easing="ease-in-sine"
                      data-aos-offset="300"
                    >
                      <div className="image-container">
                        <img
                          alt="alternative"
                          className="img-fluid custom-img-fluid-3"
                          src="images/Building-Automation-System-5-min.webp"
                        />
                      </div> 
                    </div> 
                    <div className="col-lg-6">
                      <div className="text-container">
                        <h4 className="test-heading-margin test-h4-font">BUILDING AUTOMATION SYSTEM</h4>
                        <ul className="list-unstyled li-space-lg">
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="300"
                            data-aos-offset="300"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Automated Curtains</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="320"
                            data-aos-offset="320"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Automated Fault Reporting</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="340"
                            data-aos-offset="340"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Barrier & Gate Automation</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="360"
                            data-aos-offset="360"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Centralized Dashboard/Application</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="380"
                            data-aos-offset="380"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Climate Control & Humidity Monitoring</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="400"
                            data-aos-offset="400"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Electrical Monitoring System</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="420"
                            data-aos-offset="420"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Electronic/Electrical Devices/Appliances Automation</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="440"
                            data-aos-offset="440"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Fire Smoke Monitoring</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="460"
                            data-aos-offset="460"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Gas Leakage Monitoring</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="480"
                            data-aos-offset="480"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Genset Automation</div>
                          </li>
                        </ul>
                      </div> 
                    </div> 
                  </div> 

                  <div className="row test-mb">
                    <div className="col-lg-6">
                      <div className="text-container">
                        <h4 className="test-heading-margin test-h4-font">ENERGY CONSERVATION SYSTEM</h4>
                        <ul className="list-unstyled li-space-lg">
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="500"
                            data-aos-offset="500"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Remote Controls For Electrical Devices</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="520"
                            data-aos-offset="520"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Timer Based Scheduling</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="540"
                            data-aos-offset="540"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Temperature Based Automation</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="560"
                            data-aos-offset="560"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Motion Based Automation</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="580"
                            data-aos-offset="580"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Door Based Automation</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="600"
                            data-aos-offset="600"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Monitoring On Mobile App And Dashboard</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="620"
                            data-aos-offset="620"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Centralized Dashboard/Application For Multiple Systems</div>
                          </li>
                        </ul>
                      </div> 
                    </div> 

                    <div
                      className="col-lg-6 test-img-div aos-init aos-animate"
                      data-aos="fade-down-left"
                      data-aos-anchor="#nav-tab-2"
                      data-aos-duration="500"
                      data-aos-easing="ease-in-sine"
                      data-aos-offset="500"
                    >
                      <div className="image-container">
                        <img
                          alt="alternative"
                          className="img-fluid custom-img-fluid-3"
                          src="images/Energy-Conservation-System-1-min.webp"
                        />
                      </div> 
                    </div>
                  </div>

                  <div className="row test-mb">
                    <div
                      className="col-lg-6 test-img-div aos-init aos-animate"
                      data-aos="fade-down-right"
                      data-aos-anchor="#nav-tab-2"
                      data-aos-duration="700"
                      data-aos-easing="ease-in-sine"
                      data-aos-offset="700"
                    >
                      <div className="image-container">
                        <img
                          alt="alternative"
                          className="img-fluid custom-img-fluid-3"
                          src="images/Barrier-And-Gate-Automation-1-min.webp"
                        />
                      </div> 
                    </div> 
                    <div className="col-lg-6">
                      <div className="text-container">
                        <h4 className="test-heading-margin test-h4-font">BARRIER AND GATE AUTOMATION SYSTEM</h4>
                        <ul className="list-unstyled li-space-lg">
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="700"
                            data-aos-offset="700"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Back-Up Battery System</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="720"
                            data-aos-offset="720"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Door Open/Close Alerts</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="740"
                            data-aos-offset="740"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Fire & Intruder Alarm Warning</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="760"
                            data-aos-offset="760"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Real-Time Monitoring To Detect Breaches</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="780"
                            data-aos-offset="780"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Remote Monitoring</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="800"
                            data-aos-offset="800"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Smartphone/Dashboard Enabled</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="820"
                            data-aos-offset="820"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Monitoring On Mobile App And Dashboard</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="840"
                            data-aos-offset="840"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Centralized Dashboard For Multiple Gates/Barriers</div>
                          </li>
                        </ul>
                      </div> 
                    </div> 
                  </div>

                  <div className="row test-mb"> 
                    <div className="col-lg-6">
                      <div className="text-container">
                        <h4 className="test-heading-margin test-h4-font">WATER TANK MONITORING SYSTEM</h4>
                        <ul className="list-unstyled li-space-lg">
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="900"
                            data-aos-offset="900"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Tank Volume Monitoring</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="920"
                            data-aos-offset="920"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Tank Level Monitoring</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="940"
                            data-aos-offset="940"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Water Motor Automation</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="960"
                            data-aos-offset="960"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Manual/Automatic Switching</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="980"
                            data-aos-offset="980"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Notifications For Abnormal Values</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="1000"
                            data-aos-offset="1000"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Monitoring On Mobile App And Dashboard</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="1020"
                            data-aos-offset="1020"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Centralized Dashboard/Application For Multiple Systems</div>
                          </li>
                        </ul>
                      </div> 
                    </div> 
                    <div
                      className="col-lg-6 test-img-div aos-init aos-animate"
                      data-aos="fade-down-left"
                      data-aos-anchor="#nav-tab-1"
                      data-aos-duration="900"
                      data-aos-easing="ease-in-sine"
                      data-aos-offset="900"
                    >
                      <div className="image-container">
                        <img
                          alt="alternative"
                          className="img-fluid custom-img-fluid-3"
                          src="images/Water-Tank-Monitoring-System-1-min.webp"
                        />
                      </div> 
                    </div>
                  </div> 

                  <div className="row test-mb">
                    <div
                      className="col-lg-6 test-img-div aos-init aos-animate"
                      data-aos="fade-down-right"
                      data-aos-anchor="#nav-tab-2"
                      data-aos-duration="1100"
                      data-aos-easing="ease-in-sine"
                      data-aos-offset="1100"
                    >
                      <div className="image-container">
                        <img
                          alt="alternative"
                          className="img-fluid custom-img-fluid-3"
                          src="images/Street-Lights-Control-System-1-min.webp"
                        />
                      </div> 
                    </div>
                    <div className="col-lg-6">
                      <div className="text-container">
                        <h4 className="test-heading-margin test-h4-font">STREET LIGHTS CONTROL SYSTEM</h4>
                        <ul className="list-unstyled li-space-lg">
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="1100"
                            data-aos-offset="1100"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Lighting Segment Dimming/Lighting As Per Traffic</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="1120"
                            data-aos-offset="1120"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Segment Control For 3 Dimming Levels & ON/OFF</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="1140"
                            data-aos-offset="1140"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">User-Defined Dimming Timer</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="1160"
                            data-aos-offset="1160"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Manual/Automatic Mode</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="1180"
                            data-aos-offset="1180"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Monitoring On Mobile App And Dashboard</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="1200"
                            data-aos-offset="1200"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Centralized Dashboard/Application For Multiple Systems</div>
                          </li>
                        </ul>
                      </div> 
                    </div> 
                  </div>

                  <div className="row test"> 
                    <div className="col-lg-6">
                      <div className="text-container">
                        <h4 className="test-heading-margin test-h4-font">TUBE-WELL MONITORING SYSTEM</h4>
                        <ul className="list-unstyled li-space-lg">
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="1300"
                            data-aos-offset="1300"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Fire Smoke Detection</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="1320"
                            data-aos-offset="1320"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Maintenance Notifications</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="1340"
                            data-aos-offset="1340"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Power Electrical Monitoring</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="1360"
                            data-aos-offset="1360"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Pump Electrical Monitoring And Control</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="1380"
                            data-aos-offset="1380"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Water Flow Measurements</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="1400"
                            data-aos-offset="1400"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Water Quality Monitoring</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="1420"
                            data-aos-offset="1420"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Water Tank Level Monitoring And Automation</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-2"
                            data-aos-duration="1440"
                            data-aos-offset="1440"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Dashboard And Mobile App For Monitoring & Control</div>
                          </li>
                        </ul>
                      </div> 
                    </div> 
                    <div
                      className="col-lg-6 test-img-div aos-init aos-animate"
                      data-aos="fade-down-left"
                      data-aos-anchor="#nav-tab-2"
                      data-aos-duration="1300"
                      data-aos-easing="ease-in-sine"
                      data-aos-offset="1300"
                    >
                      <div className="image-container">
                        <img
                          alt="alternative"
                          className="img-fluid custom-img-fluid-3"
                          src="images/Tube-Well-Monitoring-System-2-min.webp"
                        />
                      </div> 
                    </div>
                  </div> 
                </div> 
                        

                        
                <div
                  aria-labelledby="tab-3"
                  className="tab-pane fade"
                  id="tab-3"
                  role="tabpanel"
                >
                  <div className="row test-mb">
                    <div
                      className="col-lg-6 test-img-div aos-init aos-animate"
                      data-aos="fade-down-right"
                      data-aos-anchor="#nav-tab-3"
                      data-aos-duration="300"
                      data-aos-easing="ease-in-sine"
                      data-aos-offset="300"
                    >
                      <div className="image-container">
                        <img
                          alt="alternative"
                          className="img-fluid custom-img-fluid-3"
                          src="images/Environmental-Monitoring-System-1-1.webp"
                        />
                      </div> 
                    </div> 
                    <div className="col-lg-6">
                      <div className="text-container">
                        <h4 className="test-heading-margin test-h4-font">ENVIRONMENTAL MONITORING SYSTEM</h4>
                        <ul className="list-unstyled li-space-lg">
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="300"
                            data-aos-offset="300"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Monitors Different Levels In Air (Pm10, Pm2.5, Pm1)</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="320"
                            data-aos-offset="320"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Monitors Air Index</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="340"
                            data-aos-offset="340"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Monitors Temperatures</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="360"
                            data-aos-offset="360"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Monitors Humidity</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="380"
                            data-aos-offset="380"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Provides Alerts</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="400"
                            data-aos-offset="400"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Monitoring On Mobile App And Dashboard</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="420"
                            data-aos-offset="420"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Centralized Dashboard/Application For Multiple Systems</div>
                          </li>
                        </ul>
                      </div> 
                    </div> 
                  </div> 

                  <div className="row test-mb">
                    <div className="col-lg-6">
                      <div className="text-container">
                        <h4 className="test-heading-margin test-h4-font">MACHINE VISUAL MONITORING SYSTEM</h4>
                        <ul className="list-unstyled li-space-lg">
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="500"
                            data-aos-offset="500"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Visual Signal/Image Processing Without Machine Integration</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="520"
                            data-aos-offset="520"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Programmable For Any Visual Signal</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="540"
                            data-aos-offset="540"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Calculates Machine Running/Idle/Down Time</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="560"
                            data-aos-offset="560"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Camera Status And Exact Time Intervals For Idle/Running/Power Failures</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="580"
                            data-aos-offset="580"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Online Power Shifting From AC Main To Battery Source</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="600"
                            data-aos-offset="600"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Self-Startup After Power Failure</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="620"
                            data-aos-offset="620"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Wi-Fi/Power Failure Status</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="640"
                            data-aos-offset="640"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Offline Database In Case Of Internet Failure</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="660"
                            data-aos-offset="660"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Monitoring On Mobile App And Dashboard</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="680"
                            data-aos-offset="680"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Centralized Dashboard/Application For Multiple Machines</div>
                          </li>
                        </ul>
                      </div> 
                    </div> 

                    <div
                      className="col-lg-6 test-img-div aos-init aos-animate"
                      data-aos="fade-down-left"
                      data-aos-anchor="#nav-tab-3"
                      data-aos-duration="500"
                      data-aos-easing="ease-in-sine"
                      data-aos-offset="500"
                    >
                      <div className="image-container">
                        <img
                          alt="alternative"
                          className="img-fluid custom-img-fluid-3"
                          src="images/Machine-1.webp"
                        />
                      </div> 
                    </div>
                  </div>

                  <div className="row test-mb">
                    <div
                      className="col-lg-6 test-img-div aos-init aos-animate"
                      data-aos="fade-down-right"
                      data-aos-anchor="#nav-tab-3"
                      data-aos-duration="700"
                      data-aos-easing="ease-in-sine"
                      data-aos-offset="700"
                    >
                      <div className="image-container">
                        <img
                          alt="alternative"
                          className="img-fluid custom-img-fluid-3"
                          src="images/Cold-Chain-Monitoring-System-2-min.webp"
                        />
                      </div> 
                    </div> 
                    <div className="col-lg-6">
                      <div className="text-container">
                        <h4 className="test-heading-margin test-h4-font">COLD CHAIN MONITORING SYSTEM SYSTEM</h4>
                        <ul className="list-unstyled li-space-lg">
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="700"
                            data-aos-offset="700"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Battery Back-Up</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="720"
                            data-aos-offset="720"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Customized Area Geofence Monitoring</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="740"
                            data-aos-offset="740"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Freezer Door/Lid Status (Open/Close)</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="760"
                            data-aos-offset="760"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Real-Time Alerts Exceeding Threshold</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="780"
                            data-aos-offset="780"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Real-Time Asset Location</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="800"
                            data-aos-offset="800"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Real-Time Temperature Monitoring</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="820"
                            data-aos-offset="820"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">User-Enabled Threshold Values For Temperature</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="840"
                            data-aos-offset="840"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Monitoring On Mobile App And Dashboard</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="860"
                            data-aos-offset="860"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Centralized Dashboard For The Cold Chain</div>
                          </li>
                        </ul>
                      </div> 
                    </div> 
                  </div>

                  <div className="row test-mb"> 
                    <div className="col-lg-6">
                      <div className="text-container">
                        <h4 className="test-heading-margin test-h4-font">ELECTRICAL MONITORING SYSTEM</h4>
                        <ul className="list-unstyled li-space-lg">
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="900"
                            data-aos-offset="900"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Real Time Monitoring Of Apparent Power</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="920"
                            data-aos-offset="920"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Real Time Monitoring Of Current In All Phases</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="940"
                            data-aos-offset="940"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Real Time Monitoring Of Kilowatts Per Hour</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="960"
                            data-aos-offset="960"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Real Time Monitoring Of Power Factor</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="980"
                            data-aos-offset="980"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Real Time Monitoring Of Real Power</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1000"
                            data-aos-offset="1000"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Real Time Monitoring Of Voltage In All Phases</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1020"
                            data-aos-offset="1020"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">User Defined Limits For Voltage And Current</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1040"
                            data-aos-offset="1040"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Determine Unbalanced Load</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1060"
                            data-aos-offset="1060"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Abnormal Electrical Conditions</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1080"
                            data-aos-offset="1080"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Centralized Dashboard For Multiple Electric Equipment/Appliances</div>
                          </li>
                        </ul>
                      </div> 
                    </div>
                    <div
                      className="col-lg-6 test-img-div aos-init aos-animate"
                      data-aos="fade-down-left"
                      data-aos-anchor="#nav-tab-3"
                      data-aos-duration="900"
                      data-aos-easing="ease-in-sine"
                      data-aos-offset="900"
                    >
                      <div className="image-container">
                        <img
                          alt="alternative"
                          className="img-fluid custom-img-fluid-3"
                          src="images/Electrical-3.webp"
                        />
                      </div> 
                    </div> 
                  </div> 

                  <div className="row test-mb">
                    <div
                      className="col-lg-6 test-img-div aos-init aos-animate"
                      data-aos="fade-down-right"
                      data-aos-anchor="#nav-tab-3"
                      data-aos-duration="1100"
                      data-aos-easing="ease-in-sine"
                      data-aos-offset="1100"
                    >
                      <div className="image-container">
                        <img
                          alt="alternative"
                          className="img-fluid custom-img-fluid-3"
                          src="images/Motor-2.webp"
                        />
                      </div> 
                    </div>
                    <div className="col-lg-6">
                      <div className="text-container">
                        <h4 className="test-heading-margin test-h4-font">MOTOR & PUMP AGING MONITORING SYSTEM</h4>
                        <ul className="list-unstyled li-space-lg">
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1100"
                            data-aos-offset="1100"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Motor RPM Monitoring</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1120"
                            data-aos-offset="1120"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Motor Current Monitoring</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1140"
                            data-aos-offset="1140"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Motor Vibration Monitoring</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1160"
                            data-aos-offset="1160"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Motor Power Factor Monitoring</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1180"
                            data-aos-offset="1180"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Fault & Power Loss Prediction</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1200"
                            data-aos-offset="1200"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Maintenance Alert</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1220"
                            data-aos-offset="1220"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Monitoring On Mobile App And Dashboard</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1240"
                            data-aos-offset="1240"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Centralized Dashboard/Application For Multiple Systems</div>
                          </li>
                        </ul>
                      </div> 
                    </div> 
                  </div>

                  <div className="row test-mb">
                    <div className="col-lg-6">
                      <div className="text-container">
                        <h4 className="test-heading-margin test-h4-font">FUEL & GENSET MONITORING SYSTEM</h4>
                        <ul className="list-unstyled li-space-lg">
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1300"
                            data-aos-offset="1300"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Battery Backup</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1320"
                            data-aos-offset="1320"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Fuel Cap (Open) Alert</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1340"
                            data-aos-offset="1340"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Fuel Tank Level Monitoring And Capacity</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1360"
                            data-aos-offset="1360"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Genset Battery Monitoring</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1380"
                            data-aos-offset="1380"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Genset Door Status (Open/Closed)</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1400"
                            data-aos-offset="1400"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Genset Running Time Monitoring</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1420"
                            data-aos-offset="1420"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Genset Status (On/Off)</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1440"
                            data-aos-offset="1440"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Genset Temperature Monitoring</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1460"
                            data-aos-offset="1460"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Low Fuel Alert</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1480"
                            data-aos-offset="1480"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Remote Genset (On/Off) Switching</div>
                          </li>
                        </ul>
                      </div> 
                    </div> 

                    <div
                      className="col-lg-6 test-img-div aos-init aos-animate"
                      data-aos="fade-down-left"
                      data-aos-anchor="#nav-tab-3"
                      data-aos-duration="1300"
                      data-aos-easing="ease-in-sine"
                      data-aos-offset="1300"
                    >
                      <div className="image-container">
                        <img
                          alt="alternative"
                          className="img-fluid custom-img-fluid-3"
                          src="images/Fuel-1.webp"
                        />
                      </div> 
                    </div>
                  </div>

                  <div className="row test-mb">
                    <div
                      className="col-lg-6 test-img-div aos-init aos-animate"
                      data-aos="fade-down-right"
                      data-aos-anchor="#nav-tab-3"
                      data-aos-duration="1500"
                      data-aos-easing="ease-in-sine"
                      data-aos-offset="1500"
                    >
                      <div className="image-container">
                        <img
                          alt="alternative"
                          className="img-fluid custom-img-fluid-3"
                          src="images/Remote-1.webp"
                        />
                      </div> 
                    </div> 
                    <div className="col-lg-6">
                      <div className="text-container">
                        <h4 className="test-heading-margin test-h4-font">REMOTE SITE MONITORING SYSTEM</h4>
                        <ul className="list-unstyled li-space-lg">
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1500"
                            data-aos-offset="1500"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Fuel & Genset Monitoring System</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1520"
                            data-aos-offset="1520"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Electrical Monitoring System</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1540"
                            data-aos-offset="1540"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Environment Monitoring System</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1560"
                            data-aos-offset="1560"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Input Voltage Monitoring</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1580"
                            data-aos-offset="1580"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Output Battery Voltage Monitoring</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1600"
                            data-aos-offset="1600"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Power Down Alert</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1620"
                            data-aos-offset="1620"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Voltage Up/Down Alert</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1640"
                            data-aos-offset="1640"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">General Surveillance System</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1660"
                            data-aos-offset="1660"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Monitoring On Mobile App And Dashboard</div>
                          </li>
                        </ul>
                      </div> 
                    </div> 
                  </div>

                  <div className="row"> 
                    <div className="col-lg-6">
                      <div className="text-container">
                        <h4 className="test-heading-margin test-h4-font">COLLECTION BOX MONITORING SYSTEM</h4>
                        <ul className="list-unstyled li-space-lg">
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1700"
                            data-aos-offset="1700"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Real Time Money Counter</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1720"
                            data-aos-offset="1720"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Box Lid Status</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1740"
                            data-aos-offset="1740"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Theft Alert</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1760"
                            data-aos-offset="1760"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Real-Time Fill Level</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1780"
                            data-aos-offset="1780"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Current Weight</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1800"
                            data-aos-offset="1800"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Biometric Access</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1820"
                            data-aos-offset="1820"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Backup Power</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1840"
                            data-aos-offset="1840"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">General Surveillance System</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1860"
                            data-aos-offset="1860"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Monitoring On Mobile App And Dashboard</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-3"
                            data-aos-duration="1880"
                            data-aos-offset="1880"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Centralized Dashboard For Multiple Boxes</div>
                          </li>
                        </ul>
                      </div> 
                    </div> 
                    <div
                      className="col-lg-6 test-img-div aos-init aos-animate"
                      data-aos="fade-down-left"
                      data-aos-anchor="#nav-tab-3"
                      data-aos-duration="1700"
                      data-aos-easing="ease-in-sine"
                      data-aos-offset="1700"
                    >
                      <div className="image-container">
                        <img
                          alt="alternative"
                          className="img-fluid custom-img-fluid-3"
                          src="images/Collection-2.webp"
                        />
                      </div> 
                    </div> 
                  </div>

                </div>

                <div
                  aria-labelledby="tab-4"
                  className="tab-pane fad"
                  id="tab-4"
                  role="tabpanel"
                >
                  <div className="row test-mb">
                    <div
                      className="col-lg-6 test-img-div aos-init aos-animate"
                      data-aos="fade-down-right"
                      data-aos-anchor="#nav-tab-4"
                      data-aos-duration="300"
                      data-aos-easing="ease-in-sine"
                      data-aos-offset="300"
                    >
                      <div className="image-container">
                        <img
                          alt="alternative"
                          className="img-fluid custom-img-fluid-3"
                          src="images/Agriculture-2.webp"
                        />
                      </div> 
                    </div> 
                    <div className="col-lg-6">
                      <div className="text-container">
                        <h4 className="test-heading-margin test-h4-font">AGRICULTURE MONITORING SYSTEM</h4>
                        <ul className="list-unstyled li-space-lg">
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-4"
                            data-aos-duration="300"
                            data-aos-offset="300"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Wind Monitoring</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-4"
                            data-aos-duration="320"
                            data-aos-offset="320"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Rainfall Monitoring</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-4"
                            data-aos-duration="340"
                            data-aos-offset="340"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Weather Monitoring & Forecasting</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-1"
                            data-aos-duration="360"
                            data-aos-offset="360"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Light Monitoring</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-4"
                            data-aos-duration="380"
                            data-aos-offset="380"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Par Monitoring</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-4"
                            data-aos-duration="400"
                            data-aos-offset="400"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Leaf Wetness Monitoring</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-4"
                            data-aos-duration="420"
                            data-aos-offset="420"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Soil Monitoring</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-4"
                            data-aos-duration="440"
                            data-aos-offset="440"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Pest Detection</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-4"
                            data-aos-duration="460"
                            data-aos-offset="460"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Fertigation Optimization</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-left"
                            data-aos-anchor="#nav-tab-4"
                            data-aos-duration="480"
                            data-aos-offset="480"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body">Disease Models</div>
                          </li>
                        </ul>
                      </div> 
                    </div> 
                  </div> 

                  <div className="row">
                    <div className="col-lg-6">
                      <div className="text-container">
                        <h4 className="test-heading-margin test-h4-font">FISH FARM MONITORING SYSTEM</h4>
                        <ul className="list-unstyled li-space-lg">
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-4"
                            data-aos-duration="500"
                            data-aos-offset="500"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Dissolved Oxygen Measurement In Mg/L</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-4"
                            data-aos-duration="520"
                            data-aos-offset="520"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">PH Monitoring On 0 – 14 Scale</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-4"
                            data-aos-duration="540"
                            data-aos-offset="540"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">TDS Monitoring In PPM On The Scale Of 0 – 1000 (Extendable Up To 20,000)</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-4"
                            data-aos-duration="560"
                            data-aos-offset="560"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Temperature Monitoring</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-4"
                            data-aos-duration="580"
                            data-aos-offset="580"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Aerator – Remote Start; Status ON/OFF</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-4"
                            data-aos-duration="600"
                            data-aos-offset="600"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Hourly Offline Notifications</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-4"
                            data-aos-duration="620"
                            data-aos-offset="620"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Notifications For All Abnormal Values</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-4"
                            data-aos-duration="640"
                            data-aos-offset="640"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Monitoring On Mobile App And Dashboard</div>
                          </li>
                          <li
                            className="media test-font-size-list"
                            data-aos="fade-right"
                            data-aos-anchor="#nav-tab-4"
                            data-aos-duration="660"
                            data-aos-offset="660"
                          >
                            <i className="fa fa-chevron-circle-right " />
                            <div className="media-body ">Centralized Dashboard For Multiple Systems</div>
                          </li>
                        </ul>
                      </div> 
                    </div> 

                    <div
                      className="col-lg-6 test-img-div aos-init aos-animate"
                      data-aos="fade-down-left"
                      data-aos-anchor="#nav-tab-4"
                      data-aos-duration="500"
                      data-aos-easing="ease-in-sine"
                      data-aos-offset="500"
                    >
                      <div className="image-container">
                        <img
                          alt="alternative"
                          className="img-fluid custom-img-fluid-3"
                          src="images/Fish-Farm-Monitoring-System-1-min.webp"
                        />
                      </div> 
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
}
export default Tabs;