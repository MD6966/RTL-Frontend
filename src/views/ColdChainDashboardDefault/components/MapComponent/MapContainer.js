import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper, Circle } from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    const { latitude, longitude, geofence } = this.props;

    return (
      <Map
        center={{
          lat: latitude,
          lng: longitude
        }}
        google={this.props.google}
        initialCenter={{
          lat: latitude,
          lng: longitude
        }}
        zoom={17}>
        <Marker
          name={'Current location'}
          position={{ lat: latitude, lng: longitude }}
        />
        <Circle
          center={{
            lat: parseFloat(geofence.latitude),
            lng: parseFloat(geofence.longitude)
          }}
          fillColor="#FF0000"
          fillOpacity={0.2}
          radius={geofence.radius}
          strokeColor="transparent"
          strokeOpacity={1}
          strokeWeight={5}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDf5SszJAaUmZCAcdrdCLaf8wVSomgM0K0'
})(MapContainer);
