import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, this.props.interval);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {counter: 0}
    setInterval(()=>{
      this.setState(previousState => {
        return { counter: (previousState.counter + 1)}
      });
    }, 500);
  }

  render(){
    return (<Text>{this.props.text} = {this.state.counter}</Text>
    );
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View margin={20}>
        <Counter text='Contando '/>
        <Blink interval={1000} text='I love to blink' />
        <Blink interval={1500} text='Yes blinking is so great' />
        <Blink interval={1750} text='Why did they ever take this out of HTML' />
        <Blink interval={2000} text='Look at me look at me look at me' />
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => BlinkApp);
