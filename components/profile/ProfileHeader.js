import React from 'react';
import {
  Header,
  Left,
  Button,
  Body,
  Title,
  Right,
  Icon
} from 'native-base';

export default class ProfileHeader extends React.Component {
  render() {
    return (
      <Header>
        <Left>
          <Button transparent>
            <Icon ios='ios-menu' android="md-menu" />
          </Button>
        </Left>
        <Body>
          <Title>Profile</Title>
        </Body>
        <Right>
        </Right>
      </Header>
    );
  }
}