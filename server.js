const mongoose = require('mongoose')
const express = require('express')
const cookieSession = require('cookie-session')

const AccountRouter = require('./routes/account')
const ApiRouter = require('./routes/api')

const app = express()
const MONGO_URI = process.env.MONGODB_URI || 'mongodb+srv://dzheng:chinainn9209@cluster0.p1avm.mongodb.net/test'

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(express.json())
app.use(cookieSession({
  name: 'session',
  keys: ['apples'],
  maxAge: 60 * 60 * 1000,
}))

app.use('/account', AccountRouter)
app.use('/api', ApiRouter)

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something Broke!')
})

app.listen(3000, () => {
  console.log(`listening on port 3000`)
})
