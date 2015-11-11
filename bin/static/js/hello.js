/**
 * http://usejsdoc.org/
 */
var App = angular.module('hello', ['ngRoute']);

App.config(function($routeProvider, $httpProvider) {
	
	$routeProvider.when('/', {
		templateUrl: "home.html",
		controller: "home"
	}).when('/login', {
		templateUrl: "login.html",
		controller: "navigation"
	}).otherwise('/');
	
	$httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
});

App.controller('home', function($scope,$http) {
	$http.get('/resource/').success(function(data, status, headers, config) {
		$scope.greeting = data;
	});
});

App.controller('navigation', function($scope, $http) {
	
});