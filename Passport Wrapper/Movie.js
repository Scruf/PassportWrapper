var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema  = new Schema({
	title:String,
	path:String,
	descripton:String,
	image:String,
	release_day:String,
	size:Number
});

var Movie = mongoose.model('Movie',movieSchema);
module.eports=Movie;
