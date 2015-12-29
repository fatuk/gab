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
		$scope.q3 = {};
		$scope.q4 = {};

		$scope.startBalance = 250000;
		$scope.q1.budget = 0;
		$scope.q1.quiz = 0;
		$scope.q1.eventMoney = 0;
		$scope.q1.initiativeRevenue = 100000;
		$scope.q1.initiativeExpense = 50000;
		$scope.q1.activity = 0;
		$scope.q1.currentBalance = 0;

		$scope.q2.budget = 0;
		$scope.q2.quiz = 0;
		$scope.q2.eventMoney = 0;
		$scope.q2.initiativeRevenue = 125000;
		$scope.q2.initiativeExpense = 50000;
		$scope.q2.activity = 0;
		$scope.q2.currentBalance = 0;

		$scope.q3.budget = 0;
		$scope.q3.quiz = 0;
		$scope.q3.eventMoney = 0;
		$scope.q3.initiativeRevenue = 125000;
		$scope.q3.initiativeExpense = 50000;
		$scope.q3.activity = 0;
		$scope.q3.currentBalance = 0;

		$scope.q4.budget = 0;
		$scope.q4.quiz = 0;
		$scope.q4.eventMoney = 0;
		$scope.q4.initiativeRevenue = 125000;
		$scope.q4.initiativeExpense = 50000;
		$scope.q4.activity = 0;
		$scope.q4.currentBalance = 0;

		$scope.$watch('startBalance', function () {
			updateQ1();
			updateQ2();
			updateQ3();
			updateQ4();
		}, true);

		$scope.$watch('q1', function () {
			updateQ1();
		}, true);

		$scope.$watch('q2', function () {
			updateQ2();
		}, true);

		$scope.$watch('q3', function () {
			updateQ3();
		}, true);

		$scope.$watch('q4', function () {
			updateQ4();
		}, true);


		function updateQ1() {
			$scope.q1.operations = $scope.q1.initiativeRevenue - $scope.q1.initiativeExpense + $scope.startBalance;
			$scope.q1.bonus = $scope.q1.operations * 0.1;
			$scope.q1.totalRevenue = $scope.q1.operations + $scope.q1.initiativeRevenue + $scope.q1.activity + $scope.q1.quiz;
			$scope.q1.totalExpense = $scope.q1.budget + $scope.q1.initiativeExpense + $scope.q1.eventMoney;
			$scope.q1.profit = $scope.q1.totalRevenue - $scope.q1.totalExpense;
			$scope.q1.totalEarnings = $scope.q1.profit + $scope.q1.bonus;
			$scope.q1.operationsAndBonus = $scope.q1.operations + $scope.q1.bonus;
			$scope.q1.currentBalance = $scope.q1.totalEarnings + $scope.startBalance;
		}

		function updateQ2() {
			$scope.q2.operations = $scope.q1.operationsAndBonus + ($scope.q2.initiativeRevenue - $scope.q2.initiativeExpense);
			$scope.q2.bonus = $scope.q2.operations * 0.1;
			$scope.q2.totalRevenue = $scope.q2.operations + $scope.q2.initiativeRevenue + $scope.q2.activity + $scope.q2.quiz;
			$scope.q2.totalExpense = $scope.q2.budget + $scope.q2.initiativeExpense + $scope.q2.eventMoney;
			$scope.q2.profit = $scope.q2.totalRevenue - $scope.q2.totalExpense;
			$scope.q2.totalEarnings = $scope.q2.profit + $scope.q2.bonus;
			$scope.q2.operationsAndBonus = $scope.q2.operations + $scope.q2.bonus;
			$scope.q2.currentBalance = $scope.q1.currentBalance + $scope.q2.totalEarnings;
		}

		function updateQ3() {
			$scope.q3.operations = $scope.q1.operationsAndBonus + ($scope.q3.initiativeRevenue - $scope.q3.initiativeExpense);
			$scope.q3.bonus = $scope.q3.operations * 0.1;
			$scope.q3.totalRevenue = $scope.q3.operations + $scope.q3.initiativeRevenue + $scope.q3.activity + $scope.q3.quiz;
			$scope.q3.totalExpense = $scope.q3.budget + $scope.q3.initiativeExpense + $scope.q3.eventMoney;
			$scope.q3.profit = $scope.q3.totalRevenue - $scope.q3.totalExpense;
			$scope.q3.totalEarnings = $scope.q3.profit + $scope.q3.bonus;
			$scope.q3.operationsAndBonus = $scope.q3.operations + $scope.q3.bonus;
			$scope.q3.currentBalance = $scope.q2.currentBalance + $scope.q3.totalEarnings;
		}

		function updateQ4() {
			$scope.q4.operations = $scope.q1.operationsAndBonus + ($scope.q4.initiativeRevenue - $scope.q4.initiativeExpense);
			$scope.q4.bonus = $scope.q4.operations * 0.1;
			$scope.q4.totalRevenue = $scope.q4.operations + $scope.q4.initiativeRevenue + $scope.q4.activity + $scope.q4.quiz;
			$scope.q4.totalExpense = $scope.q4.budget + $scope.q4.initiativeExpense + $scope.q4.eventMoney;
			$scope.q4.profit = $scope.q4.totalRevenue - $scope.q4.totalExpense;
			$scope.q4.totalEarnings = $scope.q4.profit + $scope.q4.bonus;
			$scope.q4.operationsAndBonus = $scope.q4.operations + $scope.q4.bonus;
			$scope.q4.currentBalance = $scope.q3.currentBalance + $scope.q4.totalEarnings;
		}



	}

})();
