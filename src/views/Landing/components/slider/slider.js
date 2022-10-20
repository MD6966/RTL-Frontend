import React, { Component } from 'react';
import './slider.css';

class Slider extends Component {
  render() {
    return (
      <>
        <div className="slider-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="slider-container">
                  <img
                    src="images/header.jpg"
                    alt="alternative"
                    align="center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="makeStyles-stats-1167">
          <div className="MuiTypography-h3  makeStyles-statsInner-165 MuiGrid-root makeStyles-statsInner-1168 MuiGrid-container MuiGrid-spacing-xs-3 MuiGrid-align-items-xs-center MuiGrid-justify-xs-center">
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-3">
              <h3 className="MuiTypography-root MuiTypography-h3 MuiTypography-colorInherit MuiTypography-gutterBottom">
                3+
              </h3>
              <p className="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">
                IoT Dashboards
              </p>
            </div>
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-3">
              <h3 className="MuiTypography-root MuiTypography-h3 MuiTypography-colorInherit MuiTypography-gutterBottom">
                UI/UX
              </h3>
              <p className="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">
                Material Design
              </p>
            </div>
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-3">
              <h3 className="MuiTypography-root MuiTypography-h3 MuiTypography-colorInherit MuiTypography-gutterBottom">
                Real-time
              </h3>
              <p className="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">
                Monitoring
              </p>
            </div>
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-3">
              <div className="MuiTypography-h3">
                <img alt="React" src="/images/react.png" />
              </div>
              <p className=" line-height MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">
                Made With React
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Slider;
