
angular.module('myApp').controller('appController', appControllerFunction);

appControllerFunction.$inject=['$scope'];

function appControllerFunction($scope){
	var app=this;
  	var defaultMessage="Welcome to My App";

  	app.headerMessage=defaultMessage;
	app.placeholder="Please enter the header for this app";
	app.inputValue='';

	

	app.headerChanged=function(){
		
		app.inputValue!==''?(app.headerMessage=app.inputValue):(app.headerMessage=defaultMessage);
		
		
	}



}