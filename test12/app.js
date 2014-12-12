var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {
	$scope.names = [
		'Kazuhito Hokamura',
		'Yoshitaka Goto',
		'Akihiro Goto',
		'Takahiro Goto',
		'Hiroko Goto',
	];
});

