'use strict'

const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ok: true}))
  .use('/auth', require('./auth'))
  .use('/user', require('./users'))

  //api.use("/order", require('./order'))
  //api.use("/review", require('./review'))
  api.use("/product", require('./product'))


// No routes matched? 404.
api.use((req, res) => res.status(404).end())
