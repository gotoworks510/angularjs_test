var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope){
	$scope.name = 'testddd';
	$scope.onClickBtn = function(){
		$scope.name = $scope.name.split('').reverse().join('');
	};
});
