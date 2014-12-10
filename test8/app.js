var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope){
	$scope.searchText = 'yamada';
	$scope.names = [
	'takahashi shunsuke',
	'goto yoshitaka',
	'akihiro oyamada',
	'yuya fujii',
	];
});
