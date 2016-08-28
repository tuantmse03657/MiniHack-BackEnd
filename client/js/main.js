var myApp = angular.module('myApp',["ui.router"]);
myApp.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/home");

  $stateProvider.state('home', {
    url: "/home",
    templateUrl: "templates/home.html",
    controller: "homectrl"
  });
  $stateProvider.state('login', {
    url: "/login",
    templateUrl: "templates/login.html",
    controller: "loginctrl"
  });
  $stateProvider.state('register', {
    url: "/register",
    templateUrl: "templates/register.html",
    controller: "registerctrl"
  });
})
