/**
 * Created by ekozi on 2/27/2016.
 */

var fs = require('fs');
var mongoose = require('mongoose');
var Movie = require('./Movie');
var mongodbURI = "mongodb://ek5442:NokiaLumia920@ds033875.mongolab.com:33875/movies";
mongoose.connect(mongodbURI);
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
var extensions = ['mp4','avi','mkv'];
var base_dir = "E:/Downloads/";
var _Movie = {
    movie_title: "",
    movie_size: 0,
    movie_path: "",
    drive_name: "",
    extesnsion: "",
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
    set_file_extension: function(val){
        "use strict";
        this.extesnsion=val;
    },
    print_property: function(){
        var prop =  {
            'movie_title':this.get_movie_title(),
            'drive_name':this.get_drive_name(),
            'movie_path':this.get_movie_path(),
            'movie_size':this.get_movie_size(),
            'extension':this.get_movie_extension(),

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
    },
    get_movie_extension: function(){
        "use strict";
        return this.extesnsion;
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
                    _Movie.set_drive_name("Egor");
                    _Movie.set_movie_size(get_size(get_path(base_dir,d)));
                    _Movie.set_movie_title(d);
                    _Movie.set_movie_path(get_path(base_dir,d));
                    _Movie.set_file_extension(d.split(".")[1]);
                    var _movie = new Movie({
                        title:_Movie.get_movie_title(),
                        path:_Movie.get_movie_path(),
                        drive_name:_Movie.get_drive_name(),
                        size:_Movie.get_movie_size(),
                        extension:_Movie.get_movie_extension()
                    });
                    console.log(Movie);
                    _movie.save(function(error,movie){
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
                                    _Movie.set_drive_name("Egor");
                                    _Movie.set_movie_size(get_size(get_path(base_dir,d)+"/"+movie));
                                    _Movie.set_movie_title(movie);
                                    _Movie.set_movie_path(get_path(base_dir,d)+"/"+movie);
                                    var _movie = new Movie({
                                        title:_Movie.get_movie_title(),
                                        path:_Movie.get_movie_path(),
                                        drive_name:_Movie.get_drive_name(),
                                        size:_Movie.get_movie_size(),
                                        extension:_Movie.get_movie_extension()
                                    });
                                    _movie.save(function(error,movie){
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