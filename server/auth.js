const app = require('APP'), { env } = app
const debug = require('debug')(`${app.name}:auth`)
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
const GoogleStrategy = require('passport-google-oauth').OAuthStrategy

const { User, OAuth } = require('APP/db')
const auth = require('express').Router()

/*************************
 * Auth strategies
 *
 * The OAuth model knows how to configure Passport middleware.
 * To enable an auth strategy, ensure that the appropriate
 * environment variables are set.
 *
 * You can do it on the command line:
 *
 *   FACEBOOK_CLIENT_ID=abcd FACEBOOK_CLIENT_SECRET=1234 npm run dev
 *
 * Or, better, you can create a ~/.$your_app_name.env.json file in
 * your home directory, and set them in there:
 *
 * {
 *   FACEBOOK_CLIENT_ID: 'abcd',
 *   FACEBOOK_CLIENT_SECRET: '1234',
 * }
 *
 * Concentrating your secrets this way will make it less likely that you
 * accidentally push them to Github, for example.
 *
 * When you deploy to production, you'll need to set up these environment
 * variables with your hosting provider.
 **/

// Facebook needs the FACEBOOK_CLIENT_ID and FACEBOOK_CLIENT_SECRET
// environment variables.
OAuth.setupStrategy({
  provider: 'facebook',
  strategy: require('passport-facebook').Strategy,
  config: {
    clientID: env.FACEBOOK_CLIENT_ID,
    clientSecret: env.FACEBOOK_CLIENT_SECRET,
    callbackURL: `${app.baseUrl}/api/auth/login/facebook`,
    profileFields: ['email', 'name', 'displayName']
  },
  passport
})

// Google needs the GOOGLE_CLIENT_SECRET AND GOOGLE_CLIENT_ID
// environment variables.
OAuth.setupStrategy({
  provider: 'google',
  strategy: require('passport-google-oauth').OAuth2Strategy,
  config: {
    clientID: env.GOOGLE_CLIENT_ID,
    clientSecret: env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${app.baseUrl}/api/auth/login/google`,
  },
  passport
})

// Github needs the GITHUB_CLIENT_ID AND GITHUB_CLIENT_SECRET
// environment variables.
OAuth.setupStrategy({
  provider: 'github',
  strategy: require('passport-github2').Strategy,
  config: {
    clientID: env.GITHUB_CLIENT_ID,
    clientSecret: env.GITHUB_CLIENT_SECRET,
    callbackURL: `${app.baseUrl}/api/auth/login/github`,
  },
  passport
})

// Other passport configuration:
// Passport review in the Week 6 Concept Review:
// https://docs.google.com/document/d/1MHS7DzzXKZvR6MkL8VWdCxohFJHGgdms71XNLIET52Q/edit?usp=sharing
passport.serializeUser((user, done) => {
  done(null, user.id) // session will now have user.id on it
})

passport.deserializeUser( // called from passport.session
  (id, done) => { // null if user isn't logged in
    debug('will deserialize user.id=%d', id)
    User.findById(id)
      .then(user => {
        if (!user) debug('deserialize retrieved null user for id=%d', id)
        else debug('deserialize did ok user.id=%d', id)
        // done function sets req.user = user
        done(null, user)  // user === undefined
      })
      .catch(err => {
        debug('deserialize did fail err=%s', err)
        done(err)
      })
  }
)

// require.('passport-local').Strategy => a function we can use as a constructor, that takes in a callback
passport.use(new (require('passport-local').Strategy)(
  // body coming in must have email and password
  (email, password, done) => {
    debug('will authenticate user(email: "%s")', email)
    User.findOne({
      where: { email },
      // include: [password_digest] comes from DB, we need to eager load this b/c the front end doesn't need hashed passwords
      // Also, we refer to password_digest in the instance method authenticate in user models
      attributes: { include: ['password_digest'] }
    })
      .then(user => {
        if (!user) {
          debug('authenticate user(email: "%s") did fail: no such user', email)
          return done(null, false, { message: 'Login incorrect' })
        }
        return user.authenticate(password)
          .then(ok => {
            if (!ok) {
              debug('authenticate user(email: "%s") did fail: bad password')
              return done(null, false, { message: 'Login incorrect' })
            }
            debug('authenticate user(email: "%s") did ok: user.id=%d', email, user.id)
            done(null, user)  // serialize the user using the done function (going from json object to string)
          })
      })
      .catch(done)
  }
))

auth.get('/whoami', (req, res) => res.send(req.user))

// POST requests for local login - basically for after logging in
auth.post('/login/local', passport.authenticate('local', { successRedirect: '/' }))

// GET requests for OAuth login:
// Register this route as a callback URL with OAuth provider
auth.get('/login/:strategy', (req, res, next) => {
  console.log(`we logged in with ${req.params.strategy}! yay`)
  // console.log('this is req from strategy: ', req.user)
  passport.authenticate(req.params.strategy, {
    scope: ['email'], // You may want to ask for additional OAuth scopes. These are
    // provider specific, and let you access additional data (like
    // their friends or email), or perform actions on their behalf.
    successRedirect: '/',
    // Specify other config here
  })(req, res, next)
  // console.log('here is req.user from .get: ', req.user)
}
)

auth.put('/update/:id', (req, res, next) => {
  console.log('from the post request: ', req.body.userObj)
  // now to write the DB logic
  User.update({
    email: req.body.userObj.email,
    paypal_name: req.body.userObj.paypal,
    address: req.body.userObj.address,
    phone_number: req.body.userObj.phone
  }, {
    where: {
      id: req.params.id
    },
    returning: true
  })
  .then(results => {

  })
})

auth.post('/logout', (req, res) => {
  req.logout()
  res.redirect('/api/auth/whoami')
})

module.exports = auth

// email: req.body.userObj.email,
//   address: req.body.userObj.address,
//     paypal_name: req.body.userObj.paypal,
//       phone_number: req.body.userObj.phone
