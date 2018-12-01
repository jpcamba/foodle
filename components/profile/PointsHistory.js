import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { Text as HeaderText } from 'native-base';

import PointsHistoryItem from '../../components/profile/PointsHistoryItem';

export default class PointsHistory extends React.Component {
  randomPointsHistory = [
    {
      point: 15,
      source: 'Food Donation',
      date: '2018-01-01'
    },
    {
      point: 30,
      source: 'Video Tutorial',
      date: '2018-01-11'
    },
    {
      point: 10,
      source: 'Food Donation Verification',
      date: '2018-06-01'
    },
    {
      point: 30,
      source: 'Video Tutorial',
      date: '2018-08-01'
    },
    {
      point: 50,
      source: 'Event',
      date: '2018-11-01'
    }
  ];

  render() {
    return (
      <View>
        <View style={styles.pointsHeaderRow}>
          <HeaderText style={styles.pointsHeader}>Points History</HeaderText>
        </View>
        <View>
          {this._showPointHistory()}
        </View>
      </View>
    );
  }

  _showPointHistory() {
    let items = [];
    for (let i = 0; i < this.randomPointsHistory.length; i++) {
      items.push(<PointsHistoryItem
        key={i}
        point={this.randomPointsHistory[i].point}
        source={this.randomPointsHistory[i].source}
        date={this.randomPointsHistory[i].date}
      />);
    }
    return items;
  }
}

const styles = {
  pointsHeaderRow: {
    backgroundColor: '#007AFF'
  },
  pointsHeader: {
    alignSelf: 'center',
    alignItems: 'center',
    color: 'white',
    marginTop: 10,
    marginBottom: 10
  }
};