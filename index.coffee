fs  = require 'fs'

#list to hold extensions of the movie files
extensions_list = ["mp4","avi","mkv"]
#list to hold movies
list = []
#path of the movies
path = "D:/Downloads"
mongoose = require 'mongoose'
Movie = require './app/models/MovieSchema'
mongodbUrl = 'mongodb://ek5442:NokiaLumia920@ds033875.mongolab.com:33875/movies'
db = mongoose.connect mongodbUrl
db = mongoose.connection
db.on 'error', console.error.bind(console,'connection error')
fs.readdir path, (err,content)->
  if err
    throw err
  else
  	for e in extensions_list
  		for c in content
  			if e==c.split('.')[1]
  				file_path = build_path(c)
  				size = get_file_size(file_path)
  				drive = "Egor"
  				title = c.split('.')[0]
  				movie = new Movie(
  						title: title,
  						path: file_path,
  						drive: drive,
  						size: size
  					)
  				movie.save (err,movie)->
  					if err
  						throw err
  					else
  						console.dir movie
    
  
push_to_array=(content)->
  list.push content
#building path to a file
build_path = (name)->
	path+"/"+name
#getting the size of the file
get_file_size = (filename)->
	stats = fs.statSync(filename)
	fileSizeInBytes = stats["size"]
	return fileSizeInBytes/1000


