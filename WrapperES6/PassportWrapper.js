"use strict"
const fs = require('fs'),
    mongoose = require('mongoose'),
    Movie = require('./Movie'),
    moongodb_uri = "mongodb://ek5442:NokiaLumia920@ds033875.mongolab.com:33875/movies",
    mongoose.connect(mongodb_uri),
    db = mongoose.connection;
db.on('error', console.error(bind(console, 'connection error')));
class Movie{
  constructor(movie_title,movie_size,movie_path,drive_name,extesnsion){
    this.movie_title = movie_title;
    this.movie_size = movie_size;
    this.movie_path = movie_path;
    this.drive_name = drive_name;
    this.extension = extension;
  }
}
let movie_arr = [];
fs.readdir("E:/Downloads",(err,data)=>{
  if (err) throw err;
  else{
    data.filter((d)=>{
      for (var i=0;i<['mp4','avi','mkv'])
    })
  }
})
