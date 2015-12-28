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
		$scope.q1 = {};
		$scope.q2 = {};

		$scope.q1.startBalance = 250000;
		$scope.q1.budget = 0;
		$scope.q1.quiz = 0;
		$scope.q1.eventMoney = 0;
		$scope.q1.initiativeRevenue = 100000;
		$scope.q1.initiativeExpense = 50000;
		$scope.q1.activity = 0;

		$scope.q2.budget = 0;
		$scope.q2.quiz = 0;
		$scope.q2.eventMoney = 0;
		$scope.q2.initiativeRevenue = 125000;
		$scope.q2.initiativeExpense = 50000;
		$scope.q2.activity = 0;


		$scope.$watch('q1', function () {
			var q1Operations = $scope.q1.initiativeRevenue - $scope.q1.initiativeExpense + $scope.q1.startBalance,
				q1Bonus = ($scope.q1.initiativeRevenue - $scope.q1.initiativeExpense + $scope.q1.startBalance) * 0.1;
			$scope.q1OperationsAndBonus = q1Operations + q1Bonus;
		}, true);

	}

})();
