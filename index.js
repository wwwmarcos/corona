const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const cepRoutes = require('./src/commands/cep/cep.routes')

app.use(cors())
app.use(bodyParser())

app.use('/cep', cepRoutes)

app.set('port', (process.env.PORT || 3001))

app.listen(app.get('port'), function() {
  console.log('running on port', app.get('port'))
})