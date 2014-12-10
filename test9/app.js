var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {
	$scope.name = 'hokaccha';
});

app.filter('reverse', function() {
	return function(input){
		if (typeof input !== 'string'){
			return '';
		}
		return input.split('').reverse().join('');
	};
});

