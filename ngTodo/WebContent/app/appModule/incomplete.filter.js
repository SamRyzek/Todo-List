angular.module('appModule')
.filter('todoFilter', function() {
	
	return function(todos, bool) {
	    
	    if(bool === true){
	    		return todos;
	    }
	    
	    var results = [];
	    
	    todos.forEach(function(todo) {
	    
	    		if (todo.completed === false) {
	    			results.push(todo);
	    			}
	    		
	    });
	    return results;
	  }
});