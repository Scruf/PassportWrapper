/**
 * Created by ekozi on 2/27/2016.
 */

var fs = require('fs');
var movie_list = [];
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
                    console.log(get_size(get_path(base_dir,d)));
                    Movie.set_drive_name("Egor");
                    Movie.set_movie_size(get_size(get_path(base_dir,d)));
                    Movie.set_movie_title(d);
                    Movie.set_movie_path(get_path(base_dir,d));
                    movie_arr.push(Movie);
                    //movie_list.push(d);
                }
            }
        });
        data.filter(function(d){
            if(d.split(".").length===1){
                directory = base_dir+d;
               fs.readdir(directory,function(err,data){
                   if(err)
                    throw err;
                   else{
                      for(var i=0;i<data.length;i++){
                          for(var j=0;j<extensions.length;j++){
                              if(data[i].split(".")[1]===extensions[i]) {
                                  movie_list.push(data[i]);
                              }
                          }
                      }
                   }
               });
                movie_arr.push(Movie);
                
            }
        })

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