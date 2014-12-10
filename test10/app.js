var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {
	$scope.name = 'hokacchasddddddddd';
});

app.filter('truncateee', function() {
	return function(input, length, suffix){
		if (length === undefined){
			length = 10;
		}
		if (suffix === undefined) {
			suffix = '...';
		}
		if (input.length <= length) {
			return input;
		}
		return input.substring(0, length) + suffix;
	};
});

