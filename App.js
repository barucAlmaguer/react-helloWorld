import React, { Component } from 'react';
import { AppRegistry, Image, View, Text } from 'react-native';

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View> 
        <Image source={pic} style={{ width: 193, height: 110 }} />
        <Text>This app just went bananas!!</Text>
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => Bananas);