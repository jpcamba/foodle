import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { Icon, Text } from 'native-base';

import BftMapMarker from '../components/Bft/BftMapMarker';
import Coordinates from '../constants/Coordinates';
import Fire from '../Fire';

export default class BftScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      isDataLoaded: false
    }
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    this._loadData();
    if (!this.state.isDataLoaded) {
      return (
        <View style={styles.loading}>
          <Icon name='md-pin' style={styles.loadingIcon}></Icon>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      );
    }
    else {
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
            >
            {this._drawMarkers()}
            </MapView>
        </View>
      );
    }
  }

  _bft = [];
  _loadData() {
    const _fire = new Fire();
    _fire.getBftData().then(bftData => {
      bftData = JSON.parse(JSON.stringify(bftData));  // Cleaning retrieved JSON
      _bft = Object.values(bftData); // Desired output is array and not object
      this.setState({isDataLoaded: true});
    });
  }

  _drawMarkers() {
    let markers = [];
    for (let i = 0; i < _bft.length; i++) {
      markers.push(<BftMapMarker
        key={i}
        latitude={parseFloat(_bft[i].Latitude)}
        longitude={parseFloat(_bft[i].Longtitude)}
        name={_bft[i].operator}
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
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  },
  loadingIcon: {
    fontSize: 60
  },
  loadingText: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
});
