angular.module('myApp').service('nbreEventsFactory', ['$http',
	function($http) {
		return {
			countEvents: function() {
				return $http.get('/api/nbreEvents').then(function (response) {
					//console.log(response.data);
        			return response.data;
    			});
			}
		}
	}
]);

// angular.module('myApp').service('nbreEventsFactory', function() {
//     this.myFunc = function (x) {
//         return x.toString(16);
//     }
// });