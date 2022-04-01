const express = require('express')

const Question = require('../models/question')
const isAuthenticated = require('../middlewares/isAuthenticated')

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const questions = await Question.find()
    res.send('Questions Retrieved Successfully')
  } catch (err) {
    next(err)
  }
})

router.post('/add', isAuthenticated, async (req, res, next) => {
  try {
    const { questionText } = req.body
    const { username: author }= req.session
    await Question.create({ questionText, author })
    res.send('Question Sucessfully Added')
  } catch (err) {
    next(err)
  }
})

router.post('/answer', isAuthenticated, async (req, res, next) => {
  try {
    const { _id, answer } = req.body
    await Question.updateOne({ _id }, { answer })
    res.send('Question Updated')
  } catch (err) {
    next(err)
  }
})

module.exports = router
