var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope){
	$scope.now = new Date();
});
