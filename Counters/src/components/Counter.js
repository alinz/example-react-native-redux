// @flow

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { Button } from './Button'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    width: 40,
    textAlign: 'center'
  }
})

type CounterProps = {
  decrementFn: () => void,
  children: () => void,
  incrementFn: () => void,
  incrementWithDelayFn: () => void
}

export const Counter = (props: CounterProps) => {
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
