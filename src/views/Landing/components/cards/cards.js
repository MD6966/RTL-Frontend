/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import './cards.css';
import Card from './Card';

class Cards extends Component {
  render() {
    return (
      <div className="cards-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="above-heading">DESCRIPTION</div>
              <h2 className="h2-heading">
                "EVERYTHING THAT CAN BE AUTOMATED WILL BE AUTOMATED"
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <Card />
            </div>
            <div className="col-lg-4">
              <Card />
            </div>
            <div className="col-lg-4">
              <Card />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Cards;
