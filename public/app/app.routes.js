angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider){

	$routeProvider


		.when('/', {

			templateUrl: 'app/views/pages/todo.html',
			controller: 'TodoController',
			controllerAs: 'main'
		})
		
	$locationProvider.html5Mode(true);
})