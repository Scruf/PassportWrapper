"use strict"
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const movie_schema = new Schema({
  title:String,
  path:String,
  drive_name:String,
  size:String,
  extension:String
});
const Movie = mongoose.model('Movie',movie_schema);
module.exports = Movie;
