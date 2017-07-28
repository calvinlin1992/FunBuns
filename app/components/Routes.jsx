import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Carousel from './Carousel'
import Men from './Mens'
import Women from './Womens'
import Cart from './Cart'
import NotFound from './NotFound'

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Carousel} />
        <Route path="/men" component={Men} />
        <Route path="/women" component={Women} />
        <Route path="/cart" component={Cart} />
        <Redirect exact from="/" to="/" />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}
