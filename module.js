(function(){
	angular.module('myApp',[]).filter('upper',upperFilterFactory);

	function upperFilterFactory(){
  		return function(msg){
  			return msg.toUpperCase();
  		}
  	};

})();