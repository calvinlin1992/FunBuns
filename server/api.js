'use strict'

const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ok: true}))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))
  .use('/orders', require('./order'))
  .use('/reviews', require('./review'))
  .use('/products', require('./product'))
  .use('/cart', require('./cart'))


// No routes matched? 404.
api.use((req, res) => res.status(404).end())
