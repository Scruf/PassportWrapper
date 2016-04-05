express = require 'express'
app = express()
body_parser = require 'body-parser'
method_override = require 'method-overrride'

db = require './config/db' 

port = process.env.PORT || 8080

app.use body_parser.json()

app.use body_parser.json(type: 'application/vnd.api+json')

app.use body_parser.urlencoded(extended:true)

app.use method_override('X-HTTP-Method-Ovverride')

app.use express.static(__dirname + 'public')

require('./app/routes')(app)

app.listen port
console.log "Listening on port "+port
exports = module.exports = app