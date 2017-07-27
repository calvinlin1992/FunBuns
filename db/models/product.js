'use strict'

const {STRING, DECIMAL, ENUM} = require('sequelize')

module.exports = db => db.define('products', {
  name: {
    type : STRING,
    allowNull: false
  },
  gender :{
    type : ENUM('M', 'F')
    // allowNull, defaultValue -- KHSB
  },
  style : {
    type : ENUM('classic', 'princess leia', 'samurai classic', 'minimane', 'dread bun')
    // allowNull, defaultValue -- KHSB
  },
  price : {
    type : DECIMAL, // consider price `DECIMAL(10,2)` -- KHSB
    allowNull: false
    // min and maybe default of 0 -- KHSB
  },
  length : {
    type : ENUM ('long','short'),
    // allowNull, defaultValue -- KHSB
  },
  color : {
    type : ENUM('jet black', 'bear brown', 'lighter brown', 'straight blonde', 'dirty blonde')
    // allowNull, defaultValue -- KHSB
  },
  image: {
    type: STRING,
    defaultValue: '' // look at something online and get one -- KHSB
  }
  // add quantity/inventory (min and defaultValue) -- KHSB
})

module.exports.associations = (Product, {Order, Review}) => {
  Product.hasMany(Review)
  // want to see association to orders (hasMany order_product) -- KHSB
}