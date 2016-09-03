var app = angular.module('app', ['ngRoute', 'ngMessages']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/login.html'
	})
    .when('/dashboard', {
      templateUrl: 'partials/dashboard.html'
    })
    .when('/user/:id', {
      templateUrl: 'partials/showuser.html'
    })
	.otherwise({
		redirectTo: '/'
	})
})