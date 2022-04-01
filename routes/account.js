const express = require('express')

const User = require('../models/user')
const isAuthenticated = require('../middlewares/isAuthenticated')

const router = express.Router()

router.post('/signup', async (req, res) => {
  const { username, password } = req.body
  try {
    await User.create({ username, password })
    res.send('success')
  } catch (e) {
    console.log(e)
    res.send('failure')
  }
})

router.post('/login', async (req, res) => {
  const { username: loginUsername, password: loginPassword } = req.body
  console.log(1)
  try {
    const user = await User.findOne({ username: loginUsername })
    if (user.password === loginPassword) {
      req.session.username = loginUsername
      res.send('success')
    } else {
      res.send('failure')
    }
  } catch (e) {
    res.send('failure')
  }
})

router.post('/logout', isAuthenticated, (req, res) => {
  try {
    if (req.session.username !== '') {
      req.session.username = ''
      res.send('log out success')
    }
  } catch (e) {
    res.send('failure to log out')
  }
})

module.exports = router
