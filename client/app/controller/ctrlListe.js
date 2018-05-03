angular.module("myApp").controller('ctrlListe', ['$scope', 'photonFactory', function($scope, photonFactory) {
    $scope.maliste = photonFactory.query().$promise.then(data => $scope.maliste = data);
    console.log($scope.maliste);
}]);