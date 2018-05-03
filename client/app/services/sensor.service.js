angular.module('myApp').factory('sensorFactory', ['$resource',
	function($resource) {
		return $resource('/api/:id/resistorlist', { id: '@id'
		}, {
				update: {
					method: 'GET'
				}
			});
	}
]);
