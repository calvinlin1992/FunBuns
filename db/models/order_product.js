'use strict'
const { DECIMAL, INTEGER } = require('sequelize')

module.exports = db => db.define('orders_products', {
  quantity: {
    type: INTEGER,
    allowNull: false,
    validate: {
      min: 1
    }
  },
  sub_total: {
    type: DECIMAL(10, 2),
    allowNull: false
  }
})


module.exports.associations = (OrderProduct, {Order, Product}) => {
  OrderProduct.belongsTo(Order)
  OrderProduct.belongsTo(Product)
}