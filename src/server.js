// server.js
// where your node app starts

// init project
const express = require('express')
const cors = require('cors')

const service = require('./service')

const app = express()

app.use(cors({ optionSuccessStatus: 200 })) // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`)
})

// your first API endpoint...
app.get('/api/timestamp/:timestamp?', (req, res) => {
  if (req.params.timestamp) {
    res.json(service.getTimestamp(req.params.timestamp))
  } else {
    res.json(service.getDefaultTimestamp())
  }
})

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Your app is listening on port ${listener.address().port}`)
})
