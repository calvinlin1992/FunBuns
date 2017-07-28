'use strict'

const router = require('express').Router();
const db = require('APP/db')
const Product = db.model('products')


module.exports = router;

// GET api/product
router.get('/', function (req, res, next) {
  Product.findAll()
    .then(products => res.json(products))
    .catch(next);
});

// GET /api/product/:productId
router.get('/:productId', function (req, res, next) {
  Product.findById(req.params.productId)
    .then(product => res.json(product))
    .catch(next);
});


// POST /api/product
router.post('/', function (req, res, next) {

console.log("posting  " , req.body)

  Product.create(req.body)
    .then(product => res.json(product))
    .catch(next);



});

// DELETE /api/product
router.delete('/:productId', function (req, res, next) {
  const id = req.params.productId;

console.log("delete ", id )

  Product.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});


router.put("/:productId", function(req, res, next) {
  const productId = req.params.productId; 


  Product.findById(productId).then(product => product.update(req.body))
  .then((update2) => res.status(204).end())
  .catch(next);

});
