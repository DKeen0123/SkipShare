import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

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

const NavWrapper = ({ loading,user }) => {
  console.log(user)
  if (loading) return <ActivityIndicator size="large" />;
  if (!user) return <Login />;
  return <Navigator />;
}

const userQuery = gql`
  query userQuery {
    user {
      id
      email
    }
  }
`
export default graphql(userQuery, {
  props: ({ data }) => ({ ...data })
})(NavWrapper);