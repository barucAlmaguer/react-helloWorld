import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';

export default class OneFlexyBoi extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ height:20, backgroundColor: 'black'}}/>
        <View style={{ height: 20, backgroundColor: 'red' }} />
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
          <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
          <View style={{ flex: 3, backgroundColor: 'steelblue' }}>
            <Text style={{ margin: 20 }}>Text over blue sky</Text>
          </View>
        </View>
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => OneFlexyBoi);
