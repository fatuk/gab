var app = angular.module('myApp', [
		'ngRoute',
		'checkboxDirective',
		'mainCtrl'
	])
	.config([
		'$routeProvider',

		function ($routeProvider) {
			'use strict';

			$routeProvider
				.when('/', {
					redirectTo: '/main'
				})
				.when('/main', {
					controller: 'MainCtrl',
					templateUrl: 'views/main.html'
				})
				.otherwise({
					redirectTo: '/main'
				});
		}
	]);
