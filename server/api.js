'use strict'

const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ok: true}))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))

  //api.use("/orders", require('./order'))
  //api.use("/reviews", require('./review'))
  api.use("/products", require('./product'))


// No routes matched? 404.
api.use((req, res) => res.status(404).end())
