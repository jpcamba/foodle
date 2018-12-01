import React from 'react';
import {
  View,
  ScrollView
} from 'react-native';

import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileUser from '../components/profile/ProfileUser';
import TotalPoints from '../components/profile/TotalPoints';
import Rewards from '../components/profile/Rewards';
import PointsHistory from '../components/profile/PointsHistory';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return(
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <ProfileHeader />
          <ProfileUser />
          <View style={styles.spacer}/>
          <TotalPoints />
          <View style={styles.spacer}/>
          <Rewards />
          <View style={styles.spacer} />
          <PointsHistory />
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  spacer: {
    marginBottom: 20
  },
  totalPoints: {
    width: 100
  }
};