myApp.controller('loginctrl',['$scope','$http','$state',function($scope,$http,$state){
  $scope.user = {};
  $scope.login = function(){
    if(!CheckInput($scope.user.name) || !CheckInput($scope.user.password))
    {
      $scope.wronginput = true;
      return;
    }
    $http.post('/loginuser', $scope.user).then(function(response) {
      if(response.data == 'wrongname'){
        $scope.wrongname = true;
        $scope.wrongpassword = false;
        $scope.success = false;
      }
      else if(response.data == 'wrongpassword'){
        $scope.wrongname = false;
        $scope.wrongpassword = true;
        $scope.success = false;
      }
      else{
        $scope.wrongname = false;
        $scope.wrongpassword = false;
        $scope.success = true;
      }
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
