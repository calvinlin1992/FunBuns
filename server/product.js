'use strict'

const router = require('express').Router()
const db = require('APP/db')
const Product = db.model('products')
const { mustBeAdmin } = require('./auth.filters')

module.exports = router
  .get('/', (req, res, next) => { // GET api/product
    Product.findAll()
      .then(products => res.json(products))
      .catch(next)
  })
  .get('/:productId', (req, res, next) => { // GET /api/product/:productId
    Product.findById(req.params.productId)
      .then(product => res.json(product))
      .catch(next)
  })
  .post('/',
    mustBeAdmin,
    (req, res, next) => { // POST /api/product
      console.log('posting  ', req.body)

      Product.create(req.body)
        .then(product => res.json(product))
        .catch(next)
    })
  .delete('/:productId',
  mustBeAdmin,
  (req, res, next) => { // DELETE /api/product
    const id = req.params.productId

    Product.destroy({ where: { id } })
      .then(() => res.status(204).end())
      .catch(next)
  })
  .put('/:productId',
  mustBeAdmin,
  (req, res, next) => {
    const productId = req.params.productId

    Product.findById(productId).then(product => product.update(req.body))
    .then((update2) => res.status(204).end())
    .catch(next)
  })
