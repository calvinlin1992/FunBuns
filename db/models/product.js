'use strict'

const { STRING, DECIMAL, ENUM } = require('sequelize')

module.exports = db => db.define('products', {
  name: {
    type: STRING,
    allowNull: false
  },
  gender: {
    type: ENUM('M', 'F')
  },
  style: {
    type: ENUM('classic', 'princess leia', 'samurai classic', 'minimane', 'dread bun')
  },
  price: {
    type: DECIMAL,
    allowNull: false
  },
  length: {
    type: ENUM('long', 'short'),
  },
  color: {
    type: ENUM('jet black', 'bear brown', 'lighter brown', 'straight blonde', 'dirty blonde')
  },
  image_url: {
    type: STRING,
    defaultValue: '/images/defaultImage.jpg'
  }
}, {
  getterMethods: {
    gender_display_name: function(){
      let name = "Unisex"
      let gender = this.getDataValue('gender')

      if (gender === 'M') name = 'Male'
      if (gender === 'F') name = 'Female'

      return name
    }
  }
})

module.exports.associations = (Product, { Order, Review }) => {
  Product.hasMany(Review)
}