const express = require('express')

const Question = require('../models/question')
const isAuthenticated = require('../middlewares/isAuthenticated')

const router = express.Router()

router.get('/questions', (req, res) => {
  res.send(Question.find())
  res.send('-')
})

router.post('/questions/add', isAuthenticated, async (req, res) => {
  const { questionText } = req.body
  const author = req.session.username
  await Question.create({ questionText, author })
  res.send('complete')
})

router.post('/questions/answer', isAuthenticated, async (req, res) => {
  try {
    const { _id, answer } = req.body
    await Question.updateOne({ _id }, { answer })
    res.send('complete')
  } catch (e) {
    res.send('failure')
  }
})

module.exports = router
