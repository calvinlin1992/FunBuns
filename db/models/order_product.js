'use strict'

module.exports = db => db.define('orders_products') // quantity and price -- KHSB

module.exports.associations = (OrderProduct, {Order, Product}) => {
  OrderProduct.belongsTo(Order)
  OrderProduct.belongsTo(Product)
}