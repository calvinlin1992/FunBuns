"use strict";

// bcrypt docs: https://www.npmjs.com/package/bcrypt
const bcrypt = require("bcryptjs"),
  { STRING, VIRTUAL , TEXT, BOOLEAN} = require("sequelize");

module.exports = db =>
  db.define("users", {
      first_name: STRING,
      last_name: STRING,
      email: {
        type: STRING,
        validate: {
          isEmail: true,
          notEmpty: true
        }
      },
      payment: {
        type: STRING,
        validate: {
          isCreditCard: true
        }
      },
      address: {
        type: TEXT
      },
      phone_number: {
        type: STRING,
        validate: {
          len: [1, 10]
        }
      },
      is_admin: {
        type: BOOLEAN,
        validate: {
          defaultValue: false
        }
      },
      // We support oauth, so users may or may not have passwords.
      password_digest: STRING, // This column stores the hashed password in the DB, via the beforeCreate/beforeUpdate hooks
      password: VIRTUAL // Note that this is a virtual, and not actually stored in DB
    },
    {
      indexes: [{ fields: ["email"], unique: true }],
      hooks: {
        beforeCreate: setEmailAndPassword,
        beforeUpdate: setEmailAndPassword
      },
      defaultScope: {
        attributes: { exclude: ["password_digest"] }
      },
      instanceMethods: {
        // This method is a Promisified bcrypt.compare
        authenticate(plaintext) {
          return bcrypt.compare(plaintext, this.password_digest);
        }
      }
    }
  );

module.exports.associations = (User, { OAuth, Order, Review}) => {
  User.hasOne(OAuth);
  User.hasMany(Order);
  User.hasMany(Review);
};

function setEmailAndPassword(user) {
  user.email = user.email && user.email.toLowerCase();
  if (!user.password) return Promise.resolve(user);

  return bcrypt
    .hash(user.get("password"), 10)
    .then(hash => user.set("password_digest", hash));
}
