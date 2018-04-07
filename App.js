import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class BoldAndBeautiful extends Component {
  render() {
    return (
      <View>
        <Text>Top bar</Text>
        <Text selectable={true} style={{ fontWeight: 'bold' }}>
          I am bold <Text style={{ color: 'red' }}> and red</Text>
        </Text>
      </View>

    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => BoldAndBeautiful);
