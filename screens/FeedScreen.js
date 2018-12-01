import firebase from 'firebase';
import React, { Component } from 'react';
import { LayoutAnimation, RefreshControl } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Icon, Title, Badge } from 'native-base';

import Fire from '../Fire';

export default class FeedScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    loading: false,
    posts: [
      {
        name: 'Mr. Rodrigo Roa Duterte',
        pic: 'https://firebasestorage.googleapis.com/v0/b/hacktolive-8e6ae.appspot.com/o/du30.png?alt=media&token=26fc7597-6424-4ab6-be7c-2ee59152f9d3',
        comment: 'Created an event on inter-country agricultural talks',
        subcomment: '',
        timestamp: '11/26/2018 1:05PM',
        points: '212',
      },
      {
        name: 'Bryan',
        pic: 'https://firebasestorage.googleapis.com/v0/b/hacktolive-8e6ae.appspot.com/o/bryan.png?alt=media&token=24f72e5b-86d9-4c00-a85c-37f8412b950e',
        comment: 'Verified food exchange in Sulu',
        subcomment: '',
        timestamp: '11/26/2018 1:05PM',
        points: '111',
      },
      {
        name: 'Jannieca',
        pic: 'https://firebasestorage.googleapis.com/v0/b/hacktolive-8e6ae.appspot.com/o/jannieca.png?alt=media&token=1ad43871-b028-4892-a65c-4e6c4e9e7868',
        comment: 'Posted a video on home planting tutorial',
        subcomment: '',
        timestamp: '11/26/2018 2:00PM',
        points: '198',
      },
      {
        name: 'Buhawi',
        pic: 'https://firebasestorage.googleapis.com/v0/b/hacktolive-8e6ae.appspot.com/o/buhawi.png?alt=media&token=2412652b-f29e-42a7-81ed-daa3eb8b63b7',
        comment: 'Donated food for 50 people in Cagayan',
        subcomment: '',
        timestamp: '11/26/2018 2:05PM',
        points: '213',
      },
      {
        name: 'Sarah',
        pic: 'https://firebasestorage.googleapis.com/v0/b/hacktolive-8e6ae.appspot.com/o/Sarah.png?alt=media&token=d9c6df32-ec59-42ec-9255-7114b4943319',
        comment: 'Attended event on food security',
        subcomment: '',
        timestamp: '11/26/2018 4:45PM',
        points: '197',
      },
      {
        name: 'Jowil',
        pic: 'https://firebasestorage.googleapis.com/v0/b/hacktolive-8e6ae.appspot.com/o/Joil.png?alt=media&token=e31dd41a-cf30-4541-a49e-3ad3837e7e89',
        comment: 'Attended event on food security',
        subcomment: '',
        timestamp: '11/26/2018 5:45PM',
        points: '195',
      },
    ],
  };

  componentDidMount() {
    this.makeRemoteRequest();
    /* Commented out. But will be used in the future for the authentication feature.
    // Check if we are signed in...
    if (Fire.shared.uid) {
      // If we are, then we can get the first 5 posts
      console.log("We are signed in...");
      this.makeRemoteRequest();
    } else {
      // If we aren't then we should just start observing changes. This will be called when the user signs in
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.makeRemoteRequest();
        }
      });
    }*/
  }

  // Call our database and ask for a subset of the user posts
  makeRemoteRequest = async lastKey => {

    console.log("makeRemoteRequest");
  
    // The data prop will be an array of posts, the cursor will be used for pagination.
    try{

      // Initialize Cloud Firestore through Firebase
      var db = firebase.firestore();

      // Disable deprecated features
      db.settings({
        timestampsInSnapshots: true
      });

      let collectionReference = db.collection('users');

      let query = collectionReference.orderBy('timestamp', 'desc').limit(4);

      let lastVisible;
      let posts = {};
      let dataArray = [];
      
      query.get().then(function(querySnapshot) 
      {
          if (querySnapshot.empty) {

            console.log('no documents found');

          } else {
      
            querySnapshot.forEach(function (documentSnapshot) {
              var data = documentSnapshot.data();

              let name = data.name;
              let post = data.post
      
              reduced = {
                name: name,
                post: post,
                timestamp: data.timestamp
              };
              dataArray.push(reduced);
              console.log("name: " + reduced.name);
            });//forEach

          }
      });//query.then
    }
    catch(e)
    {
      console.log("Error Message: " + e);
    }
  
  };

  render() {
    // Let's make everything purrty by calling this method which animates layout changes.
    LayoutAnimation.easeInEaseOut();
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon ios='ios-arrow-back' android="md-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Feed</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon ios='ios-search' android="md-search" />
            </Button>
            <Button transparent>
              <Icon ios='ios-add' android="md-add" />
            </Button>
            <Button transparent>
              <Icon ios='ios-more' android="md-more" />
            </Button>
          </Right>
        </Header>
      <Content>
        <List 
          dataArray={this.state.posts}
          renderRow={(user) =>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: user.pic }} />
              </Left>
              <Body>
                <Text>{user.name}</Text>
                <Text note>{user.comment}</Text>
                <Text note>{user.subcomment}</Text>
                <Text style={{ fontSize: 11, color: 'gray' }}>{user.timestamp}</Text>
              </Body>
              <Right>
                <Button small rounded light iconLeft>
                 <Icon ios='ios-flame' android="md-flame"/>
                  <Text>{user.points}</Text>
                </Button>
                <Button small transparent>
                 <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          }>
        </List>
      </Content>
      </Container> 
    );
  }
}