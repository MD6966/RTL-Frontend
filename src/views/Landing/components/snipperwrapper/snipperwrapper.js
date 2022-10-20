import React, { Component } from 'react'
import "./snipperwrapper.css";
 class Snipperwrapper extends Component {
    render() {
        return (
            <div class="spinner-wrapper">
        <div class="spinner">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
        </div>
    </div>
        )
    }
}
export default Snipperwrapper;