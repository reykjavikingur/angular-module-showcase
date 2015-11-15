angular.module('showcase').controller('uibCarouselController', function($scope) {

	$scope.slides = [{
		image: '//lorempixel.com/400/300/?ck=1',
		text: 'foo'
	}, {
		image: '//lorempixel.com/400/300/?ck=2',
		text: 'bar'
	}, {
		image: '//lorempixel.com/400/300/?ck=3',
		text: 'baz'
	}];

});