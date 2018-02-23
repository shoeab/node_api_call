angular.module('todoService', [])

.factory('Todo', function($http){

	var todoFactory = {};

	todoFactory.endpoint = function(keyword){ // endpoint function returns http response

		return $http.get('https://cors-test.appspot.com/test'); // returning http response
	}
	
	return todoFactory;

});