(function(){
	'use strict';
	angular.module('LunchCheck',[])
	.controller('LunchCheckController',LunchCheckController);

	LunchCheckController.$inject=['$scope'];

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
			if($scope.lunchItems.length==0){
				$scope.message='Please enter data first';
				$scope.inputClass="borderRed";
				$scope.messageClass="red";
				return;
			}else{
				lunchItemsArray=$scope.lunchItems.split(',');
				var filtered = lunchItemsArray.filter(function (element) {
					  return (element != null && element!='') ;
				});

				if(filtered.length>3){
					$scope.message='Too much!';
				
				}else if(filtered.length>0 && filtered.length<=3){
					$scope.message='Enjoy!';
					
				}
				$scope.inputClass="borderGreen";
				$scope.messageClass="green";
			}
		}	
	}
})();