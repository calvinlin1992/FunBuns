import { combineReducers } from 'redux'
import auth from './auth'
import products from './products'
import orders from './orders'
import users from './users'

const rootReducer = combineReducers({
  auth,
  products,
  orders,
  users

})

export default rootReducer
