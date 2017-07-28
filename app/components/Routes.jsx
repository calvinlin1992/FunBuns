import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home'
import Men from './Mens'
import Women from './Womens'
import Cart from './Cart'
import NotFound from './NotFound'

export default function Routes() {
  return (
    <div>
      <Switch>
<<<<<<< HEAD
        <Route exact path="/" component={Carousel} />
        <Route path="/men" component={Men} />
        <Route path="/women" component={Women} />
        <Route path="/cart" component={Cart} />
        <Redirect exact from="/" to="/" />
=======
        <Route path="/home" component={Home} />
        <Route path="/men" component={Men} />
        <Route path="/women" component={Women} />
        <Route path="/cart" component={Cart} />
        <Redirect exact from="/" to="/home" />
>>>>>>> master
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}
