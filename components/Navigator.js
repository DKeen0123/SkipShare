import React from 'react';
import { ActivityIndicator } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { graphql, withApollo } from 'react-apollo';
import gql from 'graphql-tag';

import Login from './user/Login';
import Home from './Home';

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