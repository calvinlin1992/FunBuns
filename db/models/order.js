"use strict";

const { STRING, BOOLEAN, ENUM, DATE, NOW } = require("sequelize");

module.exports = db => // styling!!!! - KHSB
  db.define("orders", {
    paid: {
      type: BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    status: {
      type: ENUM('cart', 'processed', 'shipped', 'delivered') // make sure that 1 user only has 1 `cart` -- KHSB
    },
    tracking_number: {
      type: STRING
    }
    // total price could be something you add -- KHSB
  });

module.exports.associations = (Order, { User, Product }) => {
  Order.belongsTo(User); // want to see association to products (even if that is just one to order_product) -- KHSB
};

// consider defaultScope that always eagerly loads products -- ACTION ITEM (defaultScope not in 3rd object) --  KHSB
// make a new attribute session_id OR if not logged in persist in session, local storage or IndexedDB -- KHSB
// Do consider the situation where I am not logged in, add to my cart, log in and I already HAD a cart. How to merge these? -- KHSB
