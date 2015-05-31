app.service('ItemService', ['$http', '$q',
	function ($http, $q) {
		'use strict';
		var item = this;
		item.items = {};

		filter.getItems = function () {
			var url = 'api/url/',
				defer = $q.defer();
			$http.get(url)
				.success(function (data) {
					filter.types = data;
					defer.resolve(data);
				})
				.error(function (data) {
					defer.reject({
						error: 'api access [%s] error!'.replace('%s', url)
					});
				});

			return defer.promise;
		};

		return item;
	}
]);
