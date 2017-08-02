"use strict";

const router = require("express").Router()
const db = require("APP/db")

module.exports = router;

// GET api/product
router.get("/", function (req, res, next) {
  res.json(req.session.cart || []);
});

// POST /api/product
router.post("/:product_id", function (req, res, next) {
  let cart = req.session.cart;
  let product_id = Number(req.params.product_id);

  if (!cart) cart = [];

  let isProductInCart = cart.some(product => {
    return product.product_id === product_id
  })

  if (isProductInCart) {
    let product_index = cart.findIndex((product) => {
      return product.product_id === product_id
    })

    let newQuantity = req.body.quantity || 0
    cart[product_index].quantity += newQuantity

  } else {
    cart.push(req.body)
  }

  req.session.cart = cart;
  res.json(req.session.cart);
});

// DELETE /api/product
router.delete("/:productId", function (req, res, next) {
  const id = req.params.productId;

  console.log("delete ", id);

  Product.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});

router.put("/:productId", function (req, res, next) {
  const productId = req.params.productId;
});
