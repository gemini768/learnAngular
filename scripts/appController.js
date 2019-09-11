
angular.module('myApp').controller('appController', appControllerFunction);

appControllerFunction.$inject=['$scope'];

function appControllerFunction($scope){
  	var defaultMessage="Welcome to My App";
  	$scope.headerMessage=defaultMessage;
	$scope.placeholder="Please enter the header for this app";
	$scope.inputValue='';

	console.log('Watchers are:'+$scope.$$watchers);

	console.log('Watchers count:'+$scope.$$watchersCount);

	$scope.headerChanged=function(){

		$scope.inputValue!==''?($scope.headerMessage=$scope.inputValue):($scope.headerMessage=defaultMessage);
		console.log('Watchers are:'+$scope.$$watchers);
		console.log('Watchers count:'+$scope.$$watchersCount);
	}

}