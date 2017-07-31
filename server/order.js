'use strict'

const db = require('APP/db')
const Order = db.model('orders')
const User = db.model('users')

const { mustBeLoggedIn, forbidden, mustBeLoggedInOrAdmin, mustBeAdmin } = require('./auth.filters')

module.exports = require('express').Router()
  .get('/',
  // The forbidden middleware will fail *all* requests to list users.
  // Remove it if you want to allow anyone to list all users on the site.
  //
  // If you want to only let admins list all the users, then you'll
  // have to add a role column to the users table to support
  // the concept of admin users.
  (req, res, next) =>
    req.user.is_admin ? Order.findAll() : Order.findAll({where: {id: req.user.id}})
      .then(orders => res.json(orders))
      .catch(next))
  .post('/',
  (req, res, next) =>
    Order.create(req.body)
      .then(order => res.status(201).json(order))
      .catch(next))
  .put('/:id',
  mustBeAdmin,
  (req, res, next) =>
    Order.update(req.body,
      {
        where: {
          id: req.params.id
        }
      }
        .then(order => res.sendStatus(300))
        .catch(next)))
  .get('/:id',
  (req, res, next) =>
    Order.findAll({
      where: {
        id: req.params.id
      }
    })
      .then(orders => res.json(orders))
      .catch(next))
