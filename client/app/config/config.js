angular.module('myApp').config(function($stateProvider, $urlRouterProvider, $locationProvider) {

	$stateProvider.state({
		name: 'home',
		url: '/',
		templateUrl: 'app/templates/home.html',
		controller: 'ctrlNbreEvents'
	});

	$stateProvider.state({
		name: 'liste',
		url: '/photon/liste',
		templateUrl: 'app/templates/liste.html',
		controller: 'ctrlListe'
	});

	$stateProvider.state({
		name: 'infos',
		url: '/photon/:id',
		templateUrl: 'app/templates/infos.html',
		controller: 'ctrlInfos'
	});

	$stateProvider.state({
		name: 'events',
		url: '/photon/:id/events',
		templateUrl: 'app/templates/events.html',
		controller: 'ctrlEvents'
	});

	$urlRouterProvider.otherwise('/');
  	$locationProvider.html5Mode(true);
});