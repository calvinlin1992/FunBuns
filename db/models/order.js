"use strict";

const { STRING, BOOLEAN, ENUM, DECIMAL } = require("sequelize");

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
    },
    total: {
      type: DECIMAL(10, 2),
      allowNull: false,
    }
  });

module.exports.associations = (Order, { User, Product }) => {
  Order.belongsTo(User);
};
