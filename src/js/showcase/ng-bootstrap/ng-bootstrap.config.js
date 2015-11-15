angular.module('showcase').config(function($stateProvider) {

	$stateProvider
		.state('uib-button', {
			url: '/uib-button',
			templateUrl: 'showcase/ng-bootstrap/uib-button.html',
			controller: 'uibButtonController'
		})
		.state('uib-carousel', {
			url: '/uib-carousel',
			templateUrl: 'showcase/ng-bootstrap/uib-carousel.html',
			controller: 'uibCarouselController'
		});

});