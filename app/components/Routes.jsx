import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home'
import Men from './Mens'
import Women from './Womens'
import Cart from './Cart'
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
        <Route path="/account" component={Login} />
        <Route path="/updateInfo" component={UpdateInfo} />
        <Route path="/userProfile" component={UserProfile} />
        <Redirect exact from="/" to="/home" />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}
