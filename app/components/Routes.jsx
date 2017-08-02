import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home'
import Men from './Mens'
import Women from './Womens'
import Cart from './Cart'
import Admin from './Admin/Main'
// import UsersContainer from './Admin/UsersContainer'
import OrdersContainer from './Orders/OrdersContainer'
import Order from './Orders/Order'
import ProductsContainer from './ProductsContainer'
import NotFound from './NotFound'
import Login from './Login'
import UpdateInfo from './UpdateInfo'
import UserProfile from './UserProfile'

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
        <Route path="/admin/viewAllOrders/:id" component={Order} />
        <Route path="/admin/viewAllOrders" component={OrdersContainer} />
        <Route path="/account" component={Login} />
        <Route path="/updateInfo" component={UpdateInfo} />
        <Route path="/userProfile" component={UserProfile} />
        <Redirect exact from="/" to="/home" />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}
