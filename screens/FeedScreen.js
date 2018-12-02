import firebase from 'firebase';
import React, { Component } from 'react';
import { LayoutAnimation, RefreshControl, StyleSheet } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Icon, Title, Badge } from 'native-base';

import FeedPosts from '../constants/FeedPosts';

export default class FeedScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  defaultPosts = FeedPosts.defaultPosts;

  state = {
    loading: false,
    posts: this.defaultPosts
  };

  componentDidMount() {
    // Check if component is rendered with passed props
    const propsState = this.props.navigation.state;
    if (propsState && propsState.params) {
      this.setState({posts: propsState.params.posts});
    }

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

  componentWillReceiveProps(props) {
    const propsParams = props.navigation.state.params;
    if (JSON.stringify(this.state.posts) !== JSON.stringify(propsParams.posts)) {
      this.setState({posts: propsParams.posts});
    }
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
        {this._arePostsDefault() === false ?
          <Text style={styles.viewAll} onPress={this._viewAll}>View All Posts</Text> :
          null
        }
      </Content>
      </Container> 
    );
  }

  _arePostsDefault() {
    return FeedPosts.arePostsDefault(this.state.posts)
  };

  _viewAll = () => {
    this.setState({posts: this.defaultPosts});
  };
}

const styles = StyleSheet.create({
  viewAll: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10,
    color: 'gray',
    fontSize: 12
  }
});