// @flow

import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { app } from './modules'

const middleware = applyMiddleware(thunk)

export default (data: Object = {}) => {
  const rootReducer = combineReducers({
    //every modules reducer should be define here
    [app.NAME]: app.reducer
  })

  return createStore(rootReducer, data, middleware)
}
