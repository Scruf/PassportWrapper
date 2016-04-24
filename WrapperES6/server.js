"use strict"
const express = require('express'),
    app=express(),
    morgan = require('morgan'),
    jade = require('jade'),
    body_parser = require('body-parser'),
    Movie = require('./Movie'),
    mongo_db_uri = "mongodb://ek5442:NokiaLumia920@ds033875.mlab.com:33875/movies",
    mongoose = require('mongoose'),
    method_override = require('method-override');
mongoose.connect(mongo_db_uri);
const db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error'));
// app.use(express.static(__dirname+'/public'));
app.use(morgan('dev'));
app.use(body_parser.urlencoded({'extended':'true'}));
app.use(body_parser.json());
app.use(body_parser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.use(method_override('X-HTTP-Method-Override'));

app.listen(8000);
console.log("Application listenin on port 8000");


app.get('/api/Movies',(req,res)=>{
  Movie.find((err,data)=>{
    if (err) res.send(err);
    else{
      res.send(data);
    }
  })
})

app.get('/',(req,res)=>{
  res.sendfile('./public/views/index.html')
})
