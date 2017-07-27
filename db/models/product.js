'use strict'

const {STRING, DECIMAL, ENUM} = require('sequelize')

module.exports = db => db.define('products', {
  name: {
    type : STRING,
    allowNull: false
  },
  gender :{
    type : ENUM('M', 'F')
  },
  style : {
    type : ENUM('classic', 'princess leia', 'samurai classic', 'minimane', 'dread bun')
  },
  price : {
    type : DECIMAL,
    allowNull: false
  },
  length : {
    type : ENUM ('long','short'),
  },
  color : {
    type : ENUM('jet black', 'bear brown', 'lighter brown', 'straight blonde', 'dirty blonde')
  },
  image: {
    type: STRING,
    defaultValue: ''
  }
})

module.exports.associations = (Product, {Order, Review}) => {
  Product.hasMany(Review)
}