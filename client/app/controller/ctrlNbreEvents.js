angular.module('myApp').controller('ctrlNbreEvents', ['$scope', '$stateParams', 'nbreEventsFactory', function($scope, $stateParams, nbreEventsFactory) {

	// $scope.nbre = nbreEventsFactory.query().$promise.then(function(succ) {

	// 	console.log(succ[0].total);
	// 	$scope.nbre = succ[0].total;

	// }, function(err) {

	// });

	nbreEventsFactory.countEvents().then(function(succ) {
		$scope.nbre = succ;
		console.log($scope.nbre);
	}, function(err) {

	});


}]);