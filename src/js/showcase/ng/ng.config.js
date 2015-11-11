angular.module('showcase').config(function ($stateProvider) {

	$stateProvider
		.state('text-input-model', {
			url: '/text-input-model',
			templateUrl: 'showcase/ng/text-input-model.html',
			controller: 'textInputModelController'
		})
		.state('textarea-model', {
			url: '/textarea-model',
			templateUrl: 'showcase/ng/textarea-model.html',
			controller: 'textareaModelController'
		})
		.state('checkbox-model', {
			url: '/checkbox-model',
			templateUrl: 'showcase/ng/checkbox-model.html',
			controller: 'checkboxModelController'
		})
		.state('radio-model', {
			url: '/radio-model',
			templateUrl: 'showcase/ng/radio-model.html',
			controller: 'radioModelController'
		})
		.state('select-model', {
			url: '/select-model',
			templateUrl: 'showcase/ng/select-model.html',
			controller: 'selectModelController'
		});

});