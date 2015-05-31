angular.module('someDirective', [])
	.controller('SomeCtrl', [
		'$scope',
		function ($scope) {
			'use strict';


		}
	])
	.directive('some', function () {
		'use strict';
		return {
			restrict: 'E',
			controller: 'MainCtrl',
			scope: {}
		};
	});
