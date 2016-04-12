var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema  = new Schema({
	title:String,
	path:String,
	drive_name:String,
	size:String
});

var _Movie = mongoose.model('Movie',movieSchema);
module.eports=_Movie;
