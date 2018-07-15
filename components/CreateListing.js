import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { Form, Item, Input, Label } from 'native-base';

export default class CreateListing extends Component {
  state = {
    picture: '',
    description: '',
    address: '',
    contactNumber: ''
  }

  submitForm = () => {}

  render() {
    return (
      <View>
        <Text> Create a new listing </Text>
         <Form>
        <Item floatingLabel>
          <Label>Picture</Label>
          <Input
            value={this.state.picture}
            onChangeText={picture => this.setState({ picture })}
          />
        </Item>

        <Item floatingLabel>
          <Label>Description</Label>
          <Input
            value={this.state.description}
            onChangeText={description => this.setState({ description })}
          />
        </Item>

        <Item floatingLabel>
          <Label>Address</Label>
          <Input
            value={this.state.address}
            onChangeText={address => this.setState({ address })}
          />
        </Item>

        <Item floatingLabel>
          <Label>Contact no.</Label>
          <Input
            value={this.state.contactNumber}
            onChangeText={contactNumber => this.setState({ contactNumber })}
          />
        </Item>
        <Button title='Create your listing!' onPress={this.submitForm} />
      </Form>
      </View>
    )
  }
}