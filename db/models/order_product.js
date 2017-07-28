'use strict'

module.exports = db => db.define('orders_products')

module.exports.associations = (OrderProduct, {Order, Product}) => {
  OrderProduct.belongsTo(Order)
  OrderProduct.belongsTo(Product)
}