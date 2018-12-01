import React from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';
import {
  Form,
  Item,
  Label,
  Input,
  Button,
  Text
} from 'native-base';

import AppNavigator from '../navigation/AppNavigator';

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {
      isSignedIn: false
    }
  }

  render() {
    if (!this.state.isSignedIn) {
      return (
        <View style={styles.container}>
          <ImageBackground style={styles.background} source={require('../assets/images/foodle-sign-in.png')}>
            <Form style={styles.signInForm}>
              <Image style={styles.appLogo} source={require('../assets/images/foodle-sign-in-logo.png')} />
              <Item floatingLabel>
                <Label style={styles.input}>Username</Label>
                <Input style={styles.input} />
              </Item>
              <Item style={styles.input} floatingLabel>
                <Label style={styles.input}>Password</Label>
                <Input style={styles.input} secureTextEntry={true} />
              </Item>
              <Button success style={styles.signInButton} onPress={this._signIn}>
                <Text>Sign In</Text>
              </Button>
              <View style={styles.otherMethods}>
                <Button>
                  <Text>Sign In with Facebook</Text>
                </Button>
                <Text style={styles.signUp}>Sign Up</Text>
              </View>
            </Form>
          </ImageBackground>
        </View>
      );
    }
    else {
      return (
        <AppNavigator />
      );
    }
  }

  _signIn = () => {
    this.setState({isSignedIn: true});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  background: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center'
  },
  signInForm: {
    alignSelf: 'center',
    alignItems: 'center',
    margin: 20
  },
  input: {
    color: 'white'
  },
  appLogo: {
    height: 159,
    width: 150,
  },
  signInButton: {
    alignSelf: 'center',
    alignItems: 'center',
    margin: 20
  },
  otherMethods: {
    marginTop: 30
  },
  signUp: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 10,
    color: 'white'
  }
});
