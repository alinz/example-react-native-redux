import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Button from './button';
import testIdProps from '../utils/testIdProps';

const styles = StyleSheet.create({
    counter:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { counter, increment, decrement } = this.props;

    return (
      <View style={styles.counter}>
        <Text {...testIdProps("Counter value text")}>{counter}</Text>
        <Button text="Up" pressAction={increment}/>
        <Button text="Down" pressAction={decrement}/>
      </View>
    );
  }
}
