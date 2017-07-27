"use strict";

const { STRING, BOOLEAN, ENUM, DATE, NOW } = require("sequelize");

module.exports = db =>
  db.define("orders", {
    paid: {
      type: BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    status: {
      type: ENUM('cart', 'processed', 'shipped', 'delivered')
    },
    tracking_number: {
      type: STRING
    }
  });

module.exports.associations = (Order, { User, Product }) => {
  Order.belongsTo(User);
};
