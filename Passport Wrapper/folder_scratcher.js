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
    get_movie_title: function () {
        return this.movie_title;
    },
    get_movie_size: function () {
        return this.movie_size;
    },
    get_movie_path: function () {
        return this.drive_name;
    }
};
fs.readdir("E:/Downloads",function(err,data){
    if (err) throw err;
    else{
        data.filter(function (d){
            for (var i=0;i<extensions.length;i++){
                if(d.split(".")[1]===extensions[i])
                    movie_list.push(d);
            }
        })
        data.filter(function(d){
            if(d.split(".").length===1){
                directory = base_dir+d;
               fs.readdir(directory,function(err,data){
                   if(err)
                    throw err;
                   else{
                      for(var i=0;i<data.length;i++){
                          for(var j=0;j<extensions.length;j++){
                              if(data[i].split(".")[1]===extensions[i])
                                movie_list.push(data[i]);
                          }
                      }
                   }
               })
            }
        })

    }
});
function get_size(){

}
function get_path(val1,val2){

}