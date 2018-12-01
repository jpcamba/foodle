import React from 'react';
import { Marker } from 'react-native-maps';

export default class BftMapMarker extends React.Component {
  render() {
    return (
      <Marker
        coordinate={{
          'latitude':this.props.latitude,
          'longitude':this.props.longitude
        }}
        title={this.props.name}
      />
    );
  }
}