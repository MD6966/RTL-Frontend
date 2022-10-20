import React, { Component } from 'react';
import {
  Map,
  Marker,
  GoogleApiWrapper,
  Circle,
  InfoWindow
} from 'google-maps-react';

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  renderMarkers = (cc) => {
    cc.map((marker) => {
      return (
        <Marker
          name={marker.name}
          temperature={marker.temperature}
          position={{ lat: marker.latitude, lng: marker.longitude }}
        />
      );
    });
  };

  renderCircles = (cc) => {
    cc.map((circle) => {
      return (
        <Circle
          center={{
            lat: parseFloat(circle.geofenceCenter.latitude),
            lng: parseFloat(circle.geofenceCenter.longitude)
          }}
          fillColor="#FF0000"
          fillOpacity={0.2}
          radius={circle.geofenceCenter.radius}
          strokeColor="transparent"
          strokeOpacity={1}
          strokeWeight={5}
        />
      );
    });
  };

  render() {
    const { cc, centerlat, centerlng } = this.props;

    return (
      <Map
        google={this.props.google}
        onClick={this.onMapClicked}
        initialCenter={{
          lat: centerlat,
          lng: centerlng
        }}
        zoom={10}>
        {cc.map((marker) => {
          return (
            <Marker
              name={marker.name}
              temperature={marker.temperature}
              onClick={this.onMarkerClick}
              position={{ lat: marker.latitude, lng: marker.longitude }}
            />
          );
        })}
        {cc.map((circle) => {
          return (
            <Circle
              center={{
                lat: parseFloat(circle.geofenceCenter.latitude),
                lng: parseFloat(circle.geofenceCenter.longitude)
              }}
              fillColor="#FF0000"
              fillOpacity={0.2}
              radius={circle.geofenceCenter.radius}
              strokeColor="transparent"
              strokeOpacity={1}
              strokeWeight={5}
            />
          );
        })}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <div>
            <h6>name : {this.state.selectedPlace.name}</h6>
            <h6>temperature : {this.state.selectedPlace.temperature}</h6>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDf5SszJAaUmZCAcdrdCLaf8wVSomgM0K0'
})(MapContainer);
