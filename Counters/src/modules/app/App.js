import React, { PropTypes } from 'react'
import { StyleSheet, View } from 'react-native'
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

const renderCounters = (counters, decrement, increment, incrementWithDelay) => {
  return Object.keys(counters).map(id => {
    const value = counters[id]
    return (
      <Counter
        key={id}
        decrementFn={() => decrement(id)}
        incrementFn={() => increment(id)}
        incrementWithDelayFn={() => incrementWithDelay(id)}>
        {value}
      </Counter>
    )
  })
}

const App = props => {
  const { addNewCounter, counters, decrement, increment, incrementWithDelay } = props

  return (
    <View style={styles.container}>
      <Counters addFn={addNewCounter}>
        {renderCounters(counters, decrement, increment, incrementWithDelay)}
      </Counters>
    </View>
  )
}

App.displayName = 'App'

//it is a good practice to always indicate what type of props does your component
//receive. This is really good for documenting and prevent you from a lot of bug during
//development mode. Remember, all of these will be ignored once you set it to production.
App.propTypes = {
  addNewCounter: PropTypes.func.isRequired,
  counters: PropTypes.object.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  incrementWithDelay: PropTypes.func.isRequired
}

//Here's the most complex part of our app. connect is a function which selects,
//which part of our state tree you need to pass to your component. also, since
//my App component is pure function, i am injecting addNewCounter, increment and
//decrement functions wrapped with dispatch. I think this is the best and cleanest
//way to seperate your connect and your pure function.
export default connect(
  state => ({
    counters: state.app.counters
  }),
  dispatch => ({
    addNewCounter: () => dispatch(actions.newCounter()),
    increment: id => dispatch(actions.increment(id)),
    decrement: id => dispatch(actions.decrement(id)),
    incrementWithDelay: id => dispatch(actions.incrementWithDelay(id))
  })
)(App)
