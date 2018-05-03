// Avec le service
angular.module('myApp').controller('ctrlInfos', ['$scope', '$stateParams', 'photonFactory', 'ledFactory', 'sensorFactory', function($scope, $stateParams, photonFactory, ledFactory, sensorFactory
	) {
		console.log($stateParams.id);
		$scope.photon = photonFactory.get({id : $stateParams.id});
		$scope.photon_id = $stateParams.id;

		$scope.ledstatut = 'on';

		$scope.btn = "btn-success";

		$scope.led = function(statut) {
			
			ledFactory.get({ id: $stateParams.id, 'statut': statut}).$promise.then(function(succ){

				if(statut == 'on')
				{
					//console.log('Je passe par ici ON');
					$scope.ledstatut = 'off';
					$scope.btn = "btn-danger";
				} else {
					//console.log('Je passe par ici OFF');
					$scope.ledstatut = 'on';
					$scope.btn = "btn-success";
				}

			}, function(err) {
				console.log(err);
			});

			console.log(statut);
		}
}]);
