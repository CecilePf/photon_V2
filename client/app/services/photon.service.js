angular.module('myApp').factory('photonFactory', ['$resource',
	function($resource) {
		return $resource('/api/:id', { id: '@id'
		}, {
				update: {
					method: 'GET'
				}
			});
	}
]);
