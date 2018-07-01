import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import { HttpLink, InMemoryCache, ApolloClient } from 'apollo-boost';

import Navigator from './components/Navigator';

import { GQL_URI } from'./config/keys.js';

const client = new ApolloClient({
  link: new HttpLink({
    uri: GQL_URI
  }),
  cache: new InMemoryCache()
})

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Navigator />
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
