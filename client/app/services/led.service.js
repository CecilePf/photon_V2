angular.module('myApp').factory('ledFactory', ['$resource',
	function($resource) {
		return $resource('/api/:id/led/:statut', { id: '@id', statut: '@statut'
		}, {
				update: {
					method: 'GET'
				}
			});
	}
]);
