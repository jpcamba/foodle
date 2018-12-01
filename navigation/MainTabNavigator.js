import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import MapScreen from '../screens/MapScreen';
import FeedScreen from '../screens/FeedScreen';
import RankingScreen from '../screens/RankingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import BftScreen from '../screens/BftScreen';

const MapStack = createStackNavigator({
  Map: MapScreen
});

MapStack.navigationOptions = {
  tabBarLabel: 'Map',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='md-map'
    />
  ),
};

const FeedsStack = createStackNavigator({
  feed: FeedScreen,
});

FeedsStack.navigationOptions = {
  tabBarLabel: 'Feeds',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='md-person'
    />
  ),
};

const BftStack = createStackNavigator({
  Bft: BftScreen
});

BftStack.navigationOptions = {
  tabBarLabel: 'Food Terminals',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='md-subway'
    />
  ),
};

const RankingStack = createStackNavigator({
  Ranks: RankingScreen,
});

RankingStack.navigationOptions = {
  tabBarLabel: 'Ranking',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-trophy' : 'md-trophy'}
    />
  ),
};

export default createBottomTabNavigator({
  MapStack,
  FeedsStack,
  BftStack,
  ProfileStack,
  RankingStack
});
