angular.module('authModule')
  .factory('authService', function($http, $cookies) {
    var service = {};

    var saveToken = function(user) {
      // TODO : Store the user's id and email in cookies
	    	$cookies.put('userId', user.id);
	    	$cookies.put('userEmail', user.email);
    }

    service.getToken = function() {
      // TODO : Return an object with id and email properties,
      // the values are the values of the cookies
    		return {
    			id: $cookies.get('userId'),
    			email: $cookies.get('userEmail')
    		};
    }

    var removeToken = function() {
      // TODO : Remove both the id and email cookies
    		$cookies.remove('userId');
    		$cookies.remove('userEmail');
    }
    
	service.login = function(user) {
	   // TODO : Use the auth/login route to authenticate the user
	   // On success, use saveToken to store the users id/email
	    	 return $http({
	    		 method : 'POST',
	    		 url : 'rest/auth/login',
	    		 headers : {
	    			 'Content-Type' : 'application/json'
	    		 },
	    		 data : user
	    	 })
	    	 .then(function(res){
	    		 saveToken(res.data)
	    		 return res;
	    	})
	    
	} 

    service.register = function(user) {
      // TODO : Use the auth/register route to create and authenticate the user
      // On success, use saveToken to store the users id/email
		    	return $http({
		    		method : 'POST',
		    		url : 'rest/auth/register',
		    		headers : {
		    			'Content-Type' : 'application/json'
		    		},
		    		data : user
		    	})
		    	.then(function(res){
		    		saveToken(res.data)
		    		return res;
		    	})
    }

    service.logoff = function() {
      // TODO : Use the auth/logout route to remove the users session
      // On success, use removeToken to remove the id and email cookies
		    	return $http({
		    		method : 'POST',
		    		url : 'rest/auth/logout',
		    	})
		    	.then(function(res){
		    		removeToken(res.data)
		    		return res;
		    	})
    }
    
    return service;
    
  })
  