import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home'
import Men from './Mens'
import Women from './Womens'
import NotFound from './NotFound'

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/men" component={Men} />
        <Route path="/women" component={Women} />
        <Redirect exact from="/" to="/home" />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}
