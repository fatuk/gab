(function () {
	'use strict';
	angular.module('itemService', []).
	factory('ItemService', [
		'API_PATH',
		'$http',
		'$q',
		'$log',
		itemService
	]);

	function itemService(API_PATH, $http, $q, $log) {
		var service = {
			getItem: getItem
		};
		return service;

		function getItem() {
			var url = API_PATH + 'data.json',
				defer = $q.defer();

			$http.get(url)
				.success(function (data) {
					defer.resolve(data);
				})
				.error(function (res, errCode) {
					defer.reject({
						code: errCode,
						text: 'api access [%s] error!'.replace('%s', url)
					});
				});

			return defer.promise;
		}
	}
})();
