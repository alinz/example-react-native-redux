import { INCREMENT, DECREMENT, ADD_NEW_COUNTER } from './constants'

export const increment = (id) => {
  return {
    type: INCREMENT,
    payload: {
      id
    }
  }
}

export const decrement = (id) => {
  return {
    type: DECREMENT,
    payload: {
      id
    }
  }
}

export const newCounter = () => {
  return {
    type: ADD_NEW_COUNTER
  }
}
