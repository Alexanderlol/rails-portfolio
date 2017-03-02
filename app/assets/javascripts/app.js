var app = angular.module('webApp', ['ngRoute', 'templates']);

app.config([
           "$routeProvider",
  function($routeProvider) {
    $routeProvider.when("/", {
       controller: "HomeController",
      templateUrl: "home.html"
    }).when("/portfolio", {
    	controller: "PortfolioController",
    	templateUrl: "portfolio.html"
    });
  }
]);

app.controller("HomeController",[
          "$scope","$http","$location",
  function($scope, $http, $location){
  	$http.get("/");
  }
 ]);

app.controller("PortfolioController",[
          "$scope","$http","$location",
  function($scope, $http, $location){
  	$http.get("/portfolio");
  }
 ]);