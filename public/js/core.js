var wrapper =  angular.module("wrapper",[]);

var Movie = {
    extension:"",
    title:"",
    path:"",
    size:""


};
function get_extension(el){
    "use strict";
    return el.split(".")[1];
}
function main_controller($scope,$http){
   $scope.movies = [];
    $http.get('/api/Movies')
        .success(function(data,callback){
            data.filter(function(el){
              Movie.extension=el.title.split(".")[1];
              Movie.title=el.title;
              Movie.path=el.path;
                movies.push(Movie)


            });
            console.log(movies);

        })
        .error(function(data){
            console.log("Error");
        });


}