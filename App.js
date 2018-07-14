import React from 'react';
import { StyleSheet } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import { HttpLink, InMemoryCache, ApolloClient } from 'apollo-boost';
import { setContext } from 'apollo-link-context';

import Navigator from './components/Navigator';
import { getToken } from './loginUtils';
import { GQL_URI } from'./config/keys.js';

const authLink = setContext(async(req, { headers }) => {
  const token = await getToken();
  return {
    ... headers,
    headers: {
      authorization: token ? `Bearer ${token}` : null
    }
  };
});

const httpLink = new HttpLink({ uri: GQL_URI });

const link = authLink.concat(httpLink);

const client = new ApolloClient({
  link,
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
