import React, { Component } from 'react'
import { Text, View } from 'react-native'
import navStyles from '../styles/navStyles';
import LogoTitle from './LogoTitle';

export default class Home extends Component {
  static navigationOptions = {
    headerTitle: <LogoTitle/>,
    ...navStyles
  }

  render() {
    return (
      <View>
        <Text>SkipShare</Text>
      </View>
    )
  }
}