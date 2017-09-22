const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
// allows express app to easily parse JSON passed in
app.use(bodyParser.json())
// allow any host/client to access server front other servers
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    message: 'Hello World'
  })
})

app.post('/register', (req, res) => {
  res.send({
    message: `User ${req.body.email} have been registered! Have fun!`
  })
})

app.listen(process.env.PORT || 8081)
