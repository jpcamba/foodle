import React from 'react';
import { createStackNavigator } from 'react-navigation';

import SignInScreen from '../screens/SignInScreen';

const SignInStack = createStackNavigator({
  SignIn: SignInScreen
});

export default SignInStack;