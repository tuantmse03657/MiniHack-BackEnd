myApp.controller('registerctrl',['$scope','$http','$state',function($scope,$http,$state){
  $scope.user = {};
  $scope.register = function(){
    if(!CheckInput($scope.user.name) || !CheckInput($scope.user.password) || !CheckInput($scope.user.email) )
    {
      $scope.wronginput = true;
      return;
    }
    $http.post('/userlist', $scope.user).then(function(response) {
      if(response.data == 'conflict') $scope.conflict = true;
      else $scope.success = true;
    });
  };
  var CheckInput = function(string){
    if(string == undefined || string==""){
      return false;
    }
    else return true;
  }
  $scope.gohome = function(){
    $state.go('home');
  }
}]);
