import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

export default class BoldAndBeautiful extends Component {
  render() {
    return (
      <Text style={{ fontWeight: 'bold' }}>
        I am bold <Text style={{ color: 'red' }}> and red</Text>
      </Text>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => BoldAndBeautiful);
