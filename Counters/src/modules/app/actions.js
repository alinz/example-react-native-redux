// @flow

import { INCREMENT, DECREMENT, ADD_NEW_COUNTER } from './constants'

export type Action = {
  type: string,
  payload?: {
    id: number
  }
}

export type ActionAsync = (dispatch: Function, getState: Function) => void

//each action should have the following signiture.
//  {
//     type: <type of action>,        type is required
//     payload: <the actual payload>  payload is optional. if you don't
//                                    have anything to send to reducer,
//                                    you don't need the payload. for example
//                                    newCounter action
//  }

//this action tell the reducer which counter with specified id needs to be
//incremented.
export const increment = (id: number): Action => {
  return {
    type: INCREMENT,
    payload: {
      id
    }
  }
}

//this action tell the reducer which counter with specified id needs to be
//decremented.
export const decrement = (id: number): Action => {
  return {
    type: DECREMENT,
    payload: {
      id
    }
  }
}

//tells the reducer, we need a new counter on the scene with a new ID
export const newCounter = (): Action => {
  return {
    type: ADD_NEW_COUNTER
  }
}

export const incrementWithDelay = (id: number): ActionAsync => {
  return (dispatch, getState) => {
    //we are going to do some async call here  for example an ajax call.
    //for simplicity I will just use setTimeout.

    //if you return a function from action instead of an object, thunk middleware
    //will kicks in and calls your function with dispatch argument. It also sends
    //you a function call getState. you have to invoke getState() to get a copy of
    //current state. always treat that state as READONLY. do not modify it.

    //most of the time you don't need getState. but in some scnario you need to know.
    //as an example, if you are already fetched user list, you don't need to fetch it again
    //you can consume the user list from state.

    //Again, use getState if you don't have any other oprions.

    //one more thing, by accessing dispatch, you can have the power of calling
    //multiple action types. This is completly valid.

    //you are not abligated to call dispatch all the time

    setTimeout(() => {
      dispatch({
        type: INCREMENT,
        payload: {
          id
        }
      })
    }, 1000)
  }
}
