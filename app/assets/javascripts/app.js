var app = angular.module('webApp', ['ngRoute', 'templates']);

app.config([
           "$routeProvider",
  function($routeProvider) {
    $routeProvider.when("/", {
       controller: "HomeController",
      templateUrl: "home.html"
    });
  }
]);

app.controller("HomeController",[
          "$scope","$http","$location",
  function($scope, $http, $location){
  	$http.get("/");
  }
 ]);