angular.module("appModule", ['ngRoute', 'ngCookies', 'authModule'])
.config(function($routeProvider){
	$routeProvider
	.when('/', {
		template : `
				<home></home>
			`
			})
	.when('/about', {
		template : `
				<about></about>
			`
	         })
	.when('/contact', {
	    template : `
	        		 <contact></contact>
	        	`
	         })
	 .when('/todo', {
	     template : `
	        		 <todo-list></todo-list>
	        	`
	         })
	  .when('/todo/:id', {
		  template : `
			   	 <todo-list></todo-list>
			  `
	         })
	  .when('/register', {
	      template : `
	        		 <register></register>
	        		 `
	         })
	  .when('/login', {
	      template : `
	        		 <login></login>
	        		 `
	         })
	  .when('/logoff', {
	       template : `
	        		 <logout></logout>
	        		 `
	         })
	 
	 .otherwise({
		 template: `
			 	<h1>404 - NOT FOUND</h1>
			 `
	 		 })
});