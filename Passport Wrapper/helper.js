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
        data.filter(function(temp){
            title = temp.title.split(".")[0];
            // console.log(temp.title);
             request(build_url(title,DEFAULT_URL),function(err,response,html){
                if(err)
                    throw err;
                 else{

                    var $ = cheerio.load(html);
                   $(".findList").each(function(){
                      var data =$(this);



                       Movie.findOne({'title': temp.title},function(err,movie_dat){

                           "use strict";
                           if(err)
                               throw err;
                           else{
                               console.log()
                               movie_dat.title = data.children(":first-child").children().next().text();
                               movie_dat.save(function (err,movie) {
                                   if(err)
                                       throw err;
                                   console.dir(movie);

                               });
                           }

                      });

                   });
                }
             });


        });
    }
});
app.listen(8000);
function build_url(title,base_url){
    var temp = " ";
    title.split(" ").filter(function (el) {
        temp+=el+"+";
    });
    return base_url+temp.substring(0,temp.length-1);
}