import React from 'react';
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import { Text as HeaderText } from 'native-base';

import RewardsCompany from '../../components/profile/RewardsCompany';

export default class Rewards extends React.Component {
  randomCompanyLogo = 'http://www.logofound.com/wp-content/uploads/2016/07/Company-Logo-Template-02-230x230.png';
  randomCompanyCount = 3;

  render() {
    return (
      <View style={styles.rewards}>
        <View style={styles.rewardsHeaderRow}>
          <HeaderText style={styles.rewardsHeader}>Rewards</HeaderText>
        </View>
        <View style={styles.rewardRow}>
          {this._showCompanies()}
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.helpLinkText}>Click to learn more</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _showCompanies() {
    let companies = [];
    for (let i = 0; i < this.randomCompanyCount; i++) {
      companies.push(<RewardsCompany
        key={i}
        logo={this.randomCompanyLogo}
      />);
    }
    return companies;
  }
}

const styles = {
  rewards: {
    alignSelf: 'center',
    alignItems: 'center'
  },
  rewardsHeaderRow: {
    backgroundColor: '#007AFF',
    alignSelf: 'stretch'
  },
  rewardsHeader: {
    alignSelf: 'center',
    alignItems: 'center',
    color: 'white',
    marginTop: 10,
    marginBottom: 10
  },
  rewardRow: {
    flexDirection: 'row'
  },
  helpLinkText: {
    fontSize: 14,
    color: '#007AFF',
  }
};