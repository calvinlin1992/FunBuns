const mustBeLoggedInOrAdmin = (req, res, next) => {
  if (!req.user) {
    if (req.user.is_admin) {
      next()
    }
    return res.status(401).send('You must be logged in')
  }
  next()
}

const selfOnly = action => (req, res, next) => {
  if (req.params.id !== req.user.id) {
    return res.status(403).send(`You can only ${action} yourself.`)
  }
  next()
}

const forbidden = message => (req, res) => {
  res.status(403).send(message)
}

const mustBeAdmin = (req, res, next) => {
  if (!req.user.is_admin) {
    return res.status(401).send('You must be an Administrator to access this funcitonality')
  }
  next()
}

// Feel free to add more filters here (suggested: something that keeps out non-admins)

module.exports = { mustBeLoggedInOrAdmin, selfOnly, forbidden, mustBeAdmin }
