const mongoose = require('mongoose')
const express = require('express')

const app = express()
const MONGO_URI = process.env.MONGODB_URI || 'mongodb+srv://dzheng:chinainn9209@cluster0.p1avm.mongodb.net/test'

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const port = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => res.send('hello world!'))

app.post('/cred', (req, res) => {
  const { username, password } = req.body
  console.log(`${username}${password}`)
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
