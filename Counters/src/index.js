// @flow

import React from 'react'
import { Provider } from 'react-redux'

import { app } from './modules'
import createStore from './createStore'

const store = createStore()

const Main = () => {
  return (
    <Provider store={store}>
      <app.App />
    </Provider>
  )
}

export default Main
