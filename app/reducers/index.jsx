import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  product: require('./products').default
})

export default rootReducer
