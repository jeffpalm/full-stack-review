import sessionReducer from './reducers/sessionReducer'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'

const rootReducer = combineReducers({
  session: sessionReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))
