import React, { Component } from 'react'
import { Image, View, Button, StyleSheet, Text } from 'react-native'
import { signOut } from '../loginUtils';
import { withApollo } from '../node_modules/react-apollo';
import { Left } from 'native-base';


class LogoTitle extends Component {
  render() {
    return (
      <View style={styles.navigation}>
        <Text></Text>
        <Image
          source ={require('../images/skipshare-logo.png')}
          style={styles.logo}
        />
        <View style={styles.logOut}>
          <Button
            onPress={() => {
            signOut()
            this.props.client.resetStore();
            }}
            title="Log out"
          />
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  navigation: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  logo: {
    width: 30,
    height: 30,
    marginLeft: 60
  }
});

export default withApollo(LogoTitle);