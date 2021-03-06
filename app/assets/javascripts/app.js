var app = angular.module('webApp', ['ngRoute', 'templates', 'ngAnimate']);

app.config([
           "$routeProvider",
  function($routeProvider) {
    $routeProvider.when("/", {
       controller: "HomeController",
      templateUrl: "home.html"
    }).when("/portfolio", {
    	controller: "PortfolioController",
    	templateUrl: "portfolio.html"
    }).when("/contact", {
      controller: "ContactController",
      templateUrl: "contact.html"
    });
    
  }
]);

app.controller("HomeController",[
          "$scope","$http","$location",
  function($scope, $http, $location){
  	$scope.pageClass = '/page-home';
  	$scope.updates = ['<br><br><br>Hi, my name is Alex.<br>I am an independant web developer.'];
        $(function(){
            $(".update-box p").typed({
              strings:$scope.updates,
              typeSpeed: 40,
              loop: false,
              backSpeed: 50,
              backDelay: 300,
              contentType: 'html',
              loopCount: false,
              showCursor: false,
              cursorChar: "|"
            });
          }); 
  	}
 ]);

app.controller("PortfolioController",[
          "$scope","$http","$location",
  function($scope, $http, $location){
    $scope.pageClass = '/page-portfolio';
  }
 ]);

app.controller("ContactController",[
          "$scope","$http","$location",
  function($scope, $http, $location){
    $scope.pageClass = '/page-contact';
  }
 ]);
