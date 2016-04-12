/**
 * Created by ekozi on 2/27/2016.
 */

var fs = require('fs');
var mongoose = require('mongoose');
var MovieSchema = require('./Movie');
var mongodbURI = "mongodb://ek5442:NokiaLumia920@ds033875.mongolab.com:33875/movies";
mongoose.connect(mongodbURI);
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
var extensions = ['mp4','avi','mkv'];
var base_dir = "E:/Downloads/";
var Movie = {
    movie_title: "",
    movie_size: 0,
    movie_path: "",
    drive_name: "",
    set_movie_title: function (val) {
        this.movie_title = val;
    },
    set_movie_size: function (val) {
        this.movie_size = val;
    },
    set_movie_path: function (val) {
        this.movie_path = val;
    },
    set_drive_name: function (val) {
        this.drive_name = val;
    },
    print_property: function(){
        var prop =  {
            'movie_title':this.get_movie_title(),
            'drive_name':this.get_drive_name(),
            'movie_path':this.get_movie_path(),
            'movie_size':this.get_movie_size(),

        };
        return prop;
    },
    get_movie_title: function () {
        return this.movie_title;
    },
    get_movie_size: function () {
        return this.movie_size;
    },
    get_movie_path: function () {
        return this.movie_path;
    },
    get_drive_name: function(){
        return this.drive_name;
    }
};
var movie_arr = [];
fs.readdir("E:/Downloads",function(err,data){
    if (err) throw err;
    else{
        data.filter(function (d){
            for (var i=0;i<extensions.length;i++){
                if(d.split(".")[1]===extensions[i]) {
                    //console.log(get_size(get_path(base_dir,d)));
                    Movie.set_drive_name("Egor");
                    Movie.set_movie_size(get_size(get_path(base_dir,d)));
                    Movie.set_movie_title(d);
                    Movie.set_movie_path(get_path(base_dir,d));
                    var movie = new _Movie({
                        title:Movie.get_movie_size(),
                        path:Movie.get_movie_path(),
                        drive_name:Movie.get_drive_name(),
                        size:Movie.get_movie_size()
                    });
                    movie.save(function(error,movie){
                        if (error)
                            throw  error;
                        else
                            console.dir(movie);
                    });
                    //movie_arr.push(Movie);
                    //console.log(Movie.print_property());
                }
            }
        });
        data.filter(function(d){
            if(d.split(".").length===1){
                fs.readdir(get_path(base_dir,d),function(err,data){
                   if(err) throw err;
                    else{

                       data.filter(function(movie){
                           for(var e in extensions)
                                if(movie.split(".")[1]==extensions[e]){
                                    Movie.set_drive_name("Egor");
                                    Movie.set_movie_size(get_size(get_path(base_dir,d)+"/"+movie));
                                    Movie.set_movie_title(movie);
                                    Movie.set_movie_path(get_path(base_dir,d)+"/"+movie);
                                    var movie = new MovieSchema({
                                        title:Movie.get_movie_size(),
                                        path:Movie.get_movie_path(),
                                        drive_name:Movie.get_drive_name(),
                                        size:Movie.get_movie_size()
                                    });
                                    movie.save(function(error,movie){
                                        if (error)
                                            throw  error;
                                        else
                                            console.dir(movie);
                                    });
                                }


                   });

                   }
                });
            }
        });

    }
});

//file name with directory
function get_size(file_dir){
    var stats = fs.statSync(file_dir);
    var file_size = stats['size'];
    return file_size /1000000.0;

}
// concat file name and file path
function get_path(val1,val2){
    return val1+val2;
}