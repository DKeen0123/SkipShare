import React, { Component } from 'react'
import { Image, View, Dimensions, Button } from 'react-native'
import navStyles from '../styles/navStyles';
import LogoTitle from './LogoTitle';

export default class Home extends Component {
  static navigationOptions = {
    headerTitle: <LogoTitle/>,
    ...navStyles
  }

  viewListings = () => {

  }

  createListing = () => {
    this.props.navigation.navigate('CreateListing');
  }

  render() {
    return (
      <View>
        <Image
          source={require('../images/skipshare.png')}
          style={{width: Dimensions.get('window').width}}
        />
        <Button
          title='View listings'
          onPress={this.viewListings}
        />
        <Button
          title='Create a new listing'
          onPress={this.createListing}
        />
      </View>
    )
  }
}