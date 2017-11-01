angular.module('appModule')
.factory('todoService', function($http, $filter, $cookies, authService, $rootScope) {
  
	var todoService = {};
	var authService = {};
	
	 var date = $filter('date')(Date.now(), 'MM/dd/yyyy'); // 8/24/1999
	 
	 
	 // public
	  todoService.index = function() {
		return $http({
			method : "GET",
			url : "rest/user/1/todo"
			
		})
	  };

	  todoService.show = function(id) {
		    return $http({
		      method : 'GET',
		      url : "rest/user/1/todo/1"
		    })
		  }

	  todoService.create = function(todo) {
		  todo.description = '';
		  todo.completed = false;
		    return $http({
		      method : 'POST',
		      url : "rest/user/1/todo",
		      headers : {
		        'Content-Type' : 'application/json'
		      },
		      data : todo
		    }).then(function(todo){
		    	
			    	$rootScope.$broadcast('newTodo', {
			    		todo : todo.data
			    	})
		    })
		  };

		todoService.update = function(tid, todo) {
		   console.log(todo);
		   console.log("Hi, I'm in todoService.update");
			return $http({
		      method : 'PUT',
		      url : "rest/user/1/todo/" + tid,
		      headers : {
		        'Content-Type' : 'application/json'
		      },
		      data : todo
		    })
		  };

		todoService.destroy = function(todo) {
		   return $http({
		      method : 'DELETE',
		      url : "rest/user/1/todo/" + todo.id,
		    })
		  };
		  
		  todoService.getDate = function(){
			  
			  return $filter('date')(Date.now(), 'MM/dd/yyyy');
			  
			  
		  }
		  

		  return todoService;
		  
		  
		  authService.getToken = function(user){
			  
		  }
		  
		  authService.checkLogin = function(user){
			  
		  }
		  
	
});