import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { app } from './modules'

const middleware = applyMiddleware(thunk);

export default (data = {}) => {
  const rootReducer = combineReducers({
    [app.NAME]: app.reducer
  })

  return createStore(rootReducer, data, middleware)
}
