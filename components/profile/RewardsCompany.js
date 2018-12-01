import React from 'react';
import {
  Image
} from 'react-native';

export default class RewardsCompany extends React.Component {
  render() {
    return (
      <Image
        style={styles.rewardImage}
        source={{uri: this.props.logo}}
      />
    );
  }
}

const styles = {
  rewardImage: {
    height: 50,
    width: 100,
    margin: 10
  }
};