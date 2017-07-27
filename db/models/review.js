'use strict'

const {DECIMAL, TEXT} = require('sequelize')

module.exports = db => db.define('reviews', {
  rating: {type : DECIMAL, // WHY?!?!?!!? formatting -- KHSB
 }, // min and max. Consider integer for single ratings (makes sense for a product to have a avgRating of a decimal) -- KHSB
  text :{ // formatting. LINTER!!! consider 1 liner -- KHSB
    type :  TEXT
  }
})


module.exports.associations = (Review, {Product,User}) => {
  Review.belongsTo(Product)
  Review.belongsTo(User)
}
