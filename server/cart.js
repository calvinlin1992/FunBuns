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
router.delete("/:product_id", function (req, res, next) {
  let product_id = Number(req.params.product_id);
  let cart = req.session.cart || [];
  let product_index = cart.findIndex((product) => {
    return product.product_id === product_id
  })

  cart.splice(product_index, 1);

  req.session.cart = cart;

  res.sendStatus(200)
});

router.put("/:productId", function (req, res, next) {
  const productId = req.params.productId;
});
