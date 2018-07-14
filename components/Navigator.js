import React, { Component } from 'react';
import { Text, View, ActivityIndicator, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { graphql, withApollo } from 'react-apollo';
import gql from 'graphql-tag';

import navStyles from '../styles/navStyles';
import Login from './user/Login';
import { signOut } from '../loginUtils';

class Home extends Component {
  static navigationOptions = {
    title: "Home",
    ...navStyles
  }

  render() {
    return (
      <View>
        <Text>SkipShare</Text>
        <Button
          onPress={() => {
            signOut()
            this.props.client.resetStore();
            }}
          title="Log out"
        />
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