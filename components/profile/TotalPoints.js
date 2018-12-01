import React from 'react';
import {
  Card,
  CardItem,
  Body,
  Text
} from 'native-base';

export default class TotalPoints extends React.Component {
  render() {
    let randomPoints = 213;
    let randomAmount = 'Php 1,600.00';

    return (
      <Card style={styles.pointsCard}>
        <CardItem>
          <Body style={styles.pointsText}>
            <Text>Total Points</Text>
            <Text style={styles.points}>{randomPoints}</Text>
            <Text>{randomAmount}</Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

const styles = {
  pointsCard: {
    width: 200,
    alignSelf: 'center',
    alignItems: 'center'
  },
  pointsText: {
    alignSelf: 'center',
    alignItems: 'center'
  },
  points: {
    color: '#6564DB',
    fontSize: 70
  }
};