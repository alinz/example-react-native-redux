// @flow

import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Counter } from './Counter'
import { Button } from './Button'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

type CountersProps = {
  children?: any,
  addFn: () => void
}

export const Counters = (props: CountersProps) => {
  const { children, addFn } = props

  return (
    <View style={styles.container}>
      {children}
      <Button onClick={addFn}>Add New Counter</Button>
    </View>
  )
}
