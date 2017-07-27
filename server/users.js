'use strict'

const db = require('APP/db')
const User = db.model('users')

const { mustBeLoggedIn, forbidden, assertAdmin } = require('./auth.filters')

module.exports = require('express').Router()
  // consider .param(id, (req, res, next, id) => {
    // find thing and also maybe do logged in check here
  // }) -- KHSB
  .get('/',
  // The forbidden middleware will fail *all* requests to list users.
  // Remove it if you want to allow anyone to list all users on the site.
  //
  // If you want to only let admins list all the users, then you'll
  // have to add a role column to the users table to support
  // the concept of admin users.
  forbidden('listing users is not allowed'), // THIS IS WRONG -- KHSB
  assertAdmin,
  (req, res, next) =>
    User.findAll()
      .then(users => res.json(users))
      .catch(next))
  .post('/',
  (req, res, next) =>
  // if you do signup here don't login if the person posting is admin. If not logged in and posting it is signup so log them mustBeLoggedIn. Look into req.login from passport. Consider what parts of the body are posted based on who is doing this. -- KHSB
    User.create(req.body)
      .then(user => res.status(201).json(user))
      .catch(next))
  .put('/:id', // you don't have a delete, you could just make users inactive. Then consider a defaultScope to filter only active members -- KHSB
  mustBeLoggedIn, // selfOrAdmin -- KHSB
  (req, res, next) =>
    User.update(req.body, // should I be able to give myself admin abilities -- KHSB
      {
        where: {
          id: req.params.id
        }
      }
        .then(user => res.sendStatus(300)) // I would res.json(user) -- KHSB
        .catch(next))) // indentation!!! - KHSB
  .get('/:id', // selfOrAdmin -- KHSB
  mustBeLoggedIn,
  (req, res, next) =>
    User.findById(req.params.id)
      .then(user => res.json(user))
      .catch(next))
