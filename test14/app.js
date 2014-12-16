var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {
	$scope.members = [
		{name : 'Kazuhito Hokamura', age: 30},
		{name : 'Yoshitaka Goto', age: 28},
		{name : 'Michiko Goto', age: 55},
		{name : 'Akihiro Goto', age: 26},
		{name : 'Hiroko Goto', age: 20},
		{name : 'Takahiro Goto', age: 18},
	];
});

