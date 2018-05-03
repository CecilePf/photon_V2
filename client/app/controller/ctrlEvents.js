angular.module('myApp').controller('ctrlEvents', ['$scope', '$stateParams', 'eventFactory', 'sensorFactory', function($scope, $stateParams, eventFactory, sensorFactory) {

	$scope.evenements = eventFactory.query({'id' : $stateParams.id}).$promise.then(function(succ) {

		console.log(succ);
		$scope.evenements = succ;

	}, function(err) {

	});

	$scope.photon_id = $stateParams.id;

	valueSensor = [];

	sensorFactory.query({'id' : $stateParams.id}).$promise.then(function(succ) {

		angular.forEach(succ, function(value, key) {
			valueSensor.push(value.result);
		});



	}, function(err) {

	});

	$scope.myJson = {
    type : 'line',
	    series : [
	      { values : valueSensor },
	    ]
	};


	socket.on('resistor', function(msg){
		valueSensor.push(msg.result);
		//console.log(msg);
		$scope.$apply();
	});



	socket.on('event', function(msg){
		$scope.evenements.push(msg);
		$scope.$apply();
			    console.log(msg);
		});
}]);