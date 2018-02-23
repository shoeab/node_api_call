angular.module('todoCtrl', ['todoService'])

.controller('TodoController', function(Todo, $scope, $http){
	
	$scope.pageTitle = "My Page"; //Page title set
	$scope.responses = []; // Declaring responses variable as array
	$scope.post = {};

	$http.get("/api/all")
	    .then(function(response) {
	        $scope.post = response.data;
	        console.log($scope.post);
	    });

	Todo.endpoint() //Call factory service function name: endpoint
			.success(function(data){
				$scope.responses.push(data); //Pushing response data to responses array. which binds data to view
				console.log(data);
			});

})