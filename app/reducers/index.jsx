import { combineReducers } from 'redux'
import auth from './auth'
import products from './products'
import orders from './orders'
import users from './users'
import cart from './cart'

const rootReducer = combineReducers({
  auth,
  products,
  orders,
  users,
  cart
})

export default rootReducer
