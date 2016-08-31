import React, { PropTypes } from 'react'
import { StyleSheet, View } from 'react-native'

import Counter from './Counter'
import Button from './Button'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const Counters = (props) => {
  const { children, addFn } = props

  return (
    <View style={styles.container}>
      {children}
      <Button onClick={addFn}>Add New Counter</Button>
    </View>
  )
}

Counters.propTypes = {
  children: PropTypes.arrayOf(React.PropTypes.node).isRequired,
  addFn: PropTypes.func.isRequired
}

export default Counters
