import { combineReducers } from 'redux'
import auth from './auth'
import products from './products'
import cart from './cart'

const rootReducer = combineReducers({
  auth,
  products,
  cart
})

export default rootReducer