import React from 'react';
import MapView from 'react-native-maps';
import {
  StyleSheet,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import BftMapMarker from '../components/Bft/BftMapMarker';
import Coordinates from '../constants/Coordinates';

export default class MapScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: Coordinates.manila.latitude,
            longitude: Coordinates.manila.longitude,
            latitudeDelta: Coordinates.defaultDelta.latitude,
            longitudeDelta: Coordinates.defaultDelta.longitude,
          }}
          onPress={this._openShareFoodForm}
        >
        {this._drawMarkers()}
        </MapView>
      </View>
    );
  }

  _openShareFoodForm = () => {
    WebBrowser.openBrowserAsync('https://forms.hack4ph.gov.ph/fr/team2a/SpoonShare/new');
  };

  _drawMarkers() {
    let markers = [];
    for (let i = 0; i < Coordinates.randomCoordinates.length; i++) {
      markers.push(<BftMapMarker
        key={i}
        latitude={Coordinates.randomCoordinates[i].latitude}
        longitude={Coordinates.randomCoordinates[i].longitude}
        name={Coordinates.randomCoordinates[i].name}
      />);
    }
    return markers;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
});
