const mongoose = require('mongoose')
const express = require('express')
const cookieSession = require('cookie-session')

const AccountRouter = require('./routes/account')
const ApiRouter = require('./routes/api')
const router = require('./routes/api')

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

router.get('/', (req, res) => {
  res.send('1')
})

app.use('/account', AccountRouter)
app.use('/api/questions', ApiRouter)

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send(err.message)
})

app.listen(3000, () => {
  console.log(`listening on port 3000`)
})
