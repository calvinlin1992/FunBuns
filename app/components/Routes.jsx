import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Carousel from './Carousel'
import Men from './Mens'
import Women from './Womens'
import Cart from './Womens'
import NotFound from './NotFound'

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/carousel" component={Carousel} />
        <Route path="/men" component={Men} />
        <Route path="/women" component={Women} />
        <Redirect exact from="/" to="/carousel" />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}
