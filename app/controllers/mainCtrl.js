(function () {
	'use strict';
	angular.module('mainCtrl', [])
		.controller('MainCtrl', [
			'$scope',
			'$log',
			mainCtrl
		]);

	function mainCtrl($scope, $log) {
		$log.log('Main ctrl');

		var a = true;

		if (a) {
			console.log(123);
		}
	}
})();
