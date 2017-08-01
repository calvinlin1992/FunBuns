import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home'
import Men from './Mens'
import Women from './Womens'
import Cart from './Cart'
import Admin from './Admin/Main'
// import UsersContainer from './Admin/UsersContainer'
// import OrdersContainer from './Orders/OrdersContainer'
import ProductsContainer from './ProductsContainer'
import NotFound from './NotFound'
import Login from './Login'
import Profile from './Profile'

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/men" component={Men} />
        <Route path="/women" component={Women} />
        <Route path="/cart" component={Cart} />
        <Route path="/admin" component={Admin} />
        <Route path="/admin/viewAllProducts" component={ProductsContainer} />
        <Route path="/account" component={Login} />
        <Route path="/profile" component={Profile} />
        <Redirect exact from="/" to="/home" />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}
