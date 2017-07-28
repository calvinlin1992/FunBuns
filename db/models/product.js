'use strict'

const { STRING, DECIMAL, ENUM } = require('sequelize')

module.exports = db => db.define('products', {
  product_name: {
    type: STRING,
    validate: {
      allowNull: false
    }
  },
  gender: {
    type: ENUM('M', 'F')
  },
  style: {
    type: ENUM('classic', 'princess leia', 'samurai classic', 'minimane', 'dreadbun')
  },
  price: {
    type: DECIMAL,
    validate: {
      allowNull: false
    }
  },
  length: {
    type: ENUM('long', 'short'),
  },
  color: {
    type: ENUM('jet black', 'bear brown', 'lighter brown', 'straight blonde', 'dirty blonde')
  },
  imageUrl: {
    type: STRING,
    defaultValue: '../../public/images/defaultImage.jpg'
  }
})

module.exports.associations = (Product, { Order, Review }) => {

  Product.belongsToMany(Order, { through: 'OrderProduct' });
  Product.hasMany(Review)



}
