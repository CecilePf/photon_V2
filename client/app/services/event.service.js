angular.module('myApp').factory('eventFactory', ['$resource',
	function($resource) {
		return $resource('/api/:id/events', { id: '@id'
		}, {
				update: {
					method: 'GET'
				}
			});
	}
]);
