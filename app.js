(function(){
	'use strict';
	angular.module('LunchCheck',[])
	.controller('LunchCheckController',LunchCheckController)
	.filter('toUpper',toUpperFilter);

	LunchCheckController.$inject=['$scope'];

	function toUpperFilter(){
		return function(msg){
			return msg.toUpperCase();
		}
	}

	function LunchCheckController($scope){
		$scope.message="";
		$scope.lunchItems="";
		$scope.setClass=function(){
			$scope.messageClass="black";
			$scope.inputClass='black';
			$scope.message='';
		}
		$scope.btnClick=function(){
			var lunchItemsArray=[];
			lunchItemsArray=$scope.lunchItems.split(',');
			var filtered = lunchItemsArray.filter(function (element) {
					  return (element != null && element!='') ;
				});
			if(filtered.length==0){
				$scope.message='Please enter data first';
				$scope.inputClass="borderRed";
				$scope.messageClass="red";
				return;
			}else if(filtered.length>3){
				$scope.message='Too much!';
			}else if(filtered.length>0 && filtered.length<=3){
				$scope.message='Enjoy!';
			}
			$scope.inputClass="borderGreen";
			$scope.messageClass="green";	
				
		}	
	}
})();