'use strict'

/**
 * `babel-preset-env` converts this general import into a selection of specific
 * imports needed to polyfill the currently-supported environment (as specified
 * in `.babelrc`). As of 2017-06-04, this is primarily to support async/await.
 */
import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import store from './store'
import NavigationBar from './components/NavBar'
import Footer from './components/Footer'
import Routes from './components/Routes'

const App = () => {
  return (
    <div>
      <nav><NavigationBar /></nav>
      <main><Routes /></main>
      <footer><Footer /></footer>
    </div>
  )
}

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('main')
)
