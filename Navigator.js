import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

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
  return <Navigator />;
}

export default NavWrapper;