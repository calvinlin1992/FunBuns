'use strict'

const { STRING, DECIMAL, ENUM } = require('sequelize')

module.exports = db => db.define('products', {
<<<<<<< HEAD
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
=======
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
>>>>>>> master
  },
  length: {
    type: ENUM('long', 'short'),
  },
  color: {
    type: ENUM('jet black', 'bear brown', 'lighter brown', 'straight blonde', 'dirty blonde')
  },
<<<<<<< HEAD
  imageUrl: {
    type: STRING,
    defaultValue: '../../public/images/defaultImage.jpg'
  }
})

module.exports.associations = (Product, { Order, Review }) => {

  Product.belongsToMany(Order, { through: 'OrderProduct' });
=======
  color : {
    type : ENUM('jet black', 'bear brown', 'lighter brown', 'straight blonde', 'dirty blonde')
  },
  image: {
    type: STRING,
    defaultValue: ''
  }
})

module.exports.associations = (Product, {Order, Review}) => {
>>>>>>> master
  Product.hasMany(Review)
}