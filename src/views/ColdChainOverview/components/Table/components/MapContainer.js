import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { CircularProgress } from '@material-ui/core';

export class MapContainer extends Component {
  state = {
    latlng: null,
    isLoading: true
  };

  componentDidMount() {
    // eslint-disable-next-line react/no-set-state
    this.setState({
      latlng: this.props.location.split(','),
      isLoading: false
    });
  }

  render() {
    if (this.state.isLoading) {
      return <CircularProgress color="secondary" />;
    } else {
      return (
        <Map
          center={{
            lat: this.state.latlng[0],
            lng: this.state.latlng[1]
          }}
          google={this.props.google}
          initialCenter={{
            lat: this.state.latlng[0],
            lng: this.state.latlng[1]
          }}
          zoom={17}>
          <Marker
            name={'Current location'}
            position={{ lat: this.state.latlng[0], lng: this.state.latlng[1] }}
          />
        </Map>
      );
    }
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDf5SszJAaUmZCAcdrdCLaf8wVSomgM0K0'
})(MapContainer);
