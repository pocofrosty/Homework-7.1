function isAuthenticated(req, res, next) {
  if (req.session.username !== '') next()
  next(new Error('Not Logged In'))
}

module.exports = isAuthenticated
