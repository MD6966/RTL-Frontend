import React, { Component } from 'react';
import './copiright.css';
class Copiright extends Component {
  render() {
    return (
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="p-small">
                Copyright © 2020 Rubitron Labs. A Project of{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://esyncnsecure.com/">
                  Sync &amp; Secure Technologies
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Copiright;
