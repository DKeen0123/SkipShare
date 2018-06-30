import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Login from './user/Login';

class Home extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

const Navigator = createStackNavigator({
  Home: {
    screen: Home
  }
});

const NavWrapper = () => {
  return <Login />;
  return <Navigator />;
}

export default NavWrapper;