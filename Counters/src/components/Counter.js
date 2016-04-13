import React, { StyleSheet, View, Text } from 'react-native'

import Button from './Button'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    width: 40,
    textAlign: 'center'
  }
})

const Counter = (props) => {
  const { decrementFn, children, incrementFn, incrementWithDelayFn } = props

  return (
    <View style={styles.container}>
      <Button onClick={decrementFn}>-</Button>
      <Text style={styles.label}>{children}</Text>
      <Button onClick={incrementFn}>+</Button>
      <Button onClick={incrementWithDelayFn}>+ with delay</Button>
    </View>
  )
}

Counter.propTypes = {
  decrementFn: React.PropTypes.func.isRequired,
  children: React.PropTypes.number.isRequired,
  incrementFn: React.PropTypes.func.isRequired,
  incrementWithDelayFn: React.PropTypes.func.isRequired
}

export default Counter
