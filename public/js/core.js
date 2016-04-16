var wrapper =  angular.module("wrapper",[]);


function main_controller($scope,$http){
    $scope.movie_list = [];
    $http.get('/api/Movies')
        .success(function(data,callback){
            $scope.movie_list=data;
        })
        .error(function(data){
            console.log("Error");
        });


}