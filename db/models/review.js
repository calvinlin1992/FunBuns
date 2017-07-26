'use strict'

const {DECIMAL, TEXT} = require('sequelize')

module.exports = db => db.define('review', {
  rating: {type : DECIMAL,
 },
  text :{
    type :  TEXT
  }
})


module.exports.associations = (Review, {Product,User}) => {
  Review.belongsTo(Product)
  Review.belongsTo(User)
}
