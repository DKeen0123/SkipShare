import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { graphql, withApollo } from 'react-apollo';
import gql from 'graphql-tag';

import navStyles from '../styles/navStyles';
import Login from './user/Login';
import LogoTitle from './LogoTitle';
import { signOut } from '../loginUtils';

class Home extends Component {
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

const Navigator = createStackNavigator({
  Home: {
    screen: withApollo(Home)
  }
});

const NavWrapper = ({ loading, user }) => {
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