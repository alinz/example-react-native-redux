import React, { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

import { Counters, Counter } from './../../components'
import * as actions from './actions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const renderCounters = (counters, decrement, increment) => {
  return Object.keys(counters).map((id) => {
    const value = counters[id]
    return (
      <Counter
        key={id}
        decrementFn={() => decrement(id)}
        incrementFn={() => increment(id)}>
        {value}
      </Counter>
    )
  })
}

const App = (props) => {
  const { addNewCounter, counters, decrement, increment } = props

  return (
    <View style={styles.container}>
      <Counters addFn={addNewCounter}>
        {renderCounters(counters, decrement, increment)}
      </Counters>
    </View>
  )
}

App.propTypes = {
  addNewCounter: React.PropTypes.func.isRequired,
  counters: React.PropTypes.object.isRequired,
  increment: React.PropTypes.func.isRequired,
  decrement: React.PropTypes.func.isRequired
}

export default connect(
  (state) => ({
    counters: state.app.counters
  }),
  (dispatch) => ({
    addNewCounter: () => dispatch(actions.newCounter()),
    increment: (id) => dispatch(actions.increment(id)),
    decrement: (id) => dispatch(actions.decrement(id))
  })
)(App)
