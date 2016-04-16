var cheerio  = require('cheerio'),
    request =  require('request'),
    mongoose = require('mongoose'),
    express = require('express'),
    app = express(),
    Movie = require('./Movie'),
    mongo_db_url = "mongodb://ek5442:NokiaLumia920@ds033875.mongolab.com:33875/movies";
mongoose.connect(mongo_db_url);
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));

var DEFAULT_URL = "http://www.imdb.com/find?ref_=nv_sr_fn&q=";
Movie.find(function(err,data){
    if(err)
        throw err;
    else{
        console.log(data);
    }
})