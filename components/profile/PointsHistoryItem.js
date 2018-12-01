import React from 'react';
import {
  View,
  Text
} from 'react-native';

export default class PointsHistoryItem extends React.Component {
  render() {
    return (
      <View style={styles.pointRow}>
        <Text style={styles.point}>{this.props.point}</Text>
        <View style={styles.pointDetails}>
          <Text>{this.props.source}</Text>
          <Text style={styles.pointDate}>{this.props.date}</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  pointRow: {
    flexDirection: 'row'
  },
  point: {
    color: '#007AFF',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 20
  },
  pointDetails: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  pointDate: {
    fontStyle: 'italic'
  }
};