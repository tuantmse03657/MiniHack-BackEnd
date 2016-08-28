myApp.controller('homectrl',['$scope','$http','$state', function($scope,$http,$state){
  $scope.userlist = [];
  $http.get('/userlist').success(function(response){
    console.log("I got the data I requested");
    $scope.userlist = response;
    console.log($scope.userlist);
  })
  $scope.register = function(){
    $state.go('register');
  }
  $scope.login = function(){
    $state.go('login');
  }
}]);
