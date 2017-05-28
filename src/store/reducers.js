import { combineReducers } from 'redux'
import locationReducer from './location'
import chatReducer from './chat'
import schetReducer from './schet'
import vkladyReducer from './vklady'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    chat: chatReducer,
    schet: schetReducer,
    vklady: vkladyReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
