import React from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Icon, Title, Badge } from 'native-base';
import {
  Image
} from 'react-native';

export default class ProfileUser extends React.Component {
  render() {
    let randomProfileImage = 'https://firebasestorage.googleapis.com/v0/b/hacktolive-8e6ae.appspot.com/o/buhawi3.png?alt=media&token=390c7288-cb94-4628-91d3-10b618d0979b';

    return (
        <Image
          style={{
            alignSelf: 'center',
            height: 200,
            width: 200,
            borderWidth: 1,
            borderRadius: 75
          }}
          source={{uri: randomProfileImage}}
          resizeMode="cover"
        />
    );
  }
}

const styles = {
  profileImage: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    alignItems: 'center'
  }
};