import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import CreateUser from './CreateUser';

export default class Login extends Component {
  render() {
    return (
      <View>
        <CreateUser />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
});