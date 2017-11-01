angular.module('appModule')
  .component('todoList', {
    templateUrl: 'app/appModule/todoList.component.html',
   
 
  
  controller: function(todoService, $filter, $location, $http, $routeParams, $scope){
	  
	  var vm = this;
	  
	  vm.todos = [];
	  
	  if (!vm.todo && parseInt($routeParams.id)) {

		    $http({
		      method : 'GET',
		      url : 'rest/user/1/todo/' + $routeParams.id
		    })
		    .then(function(res) {
		      vm.selected = res.data;
		    })
		    .catch(function(err) {
		      $location.path('/notfound')
		    })
		  }
  		
	  	   
	  //behaviors
	  vm.reload = function(){
		  todoService.index()
		  .then(function(res){
			vm.todos = $filter("todoFilter")(res.data, false);
			vm.todos = res.data;
		  });
	  }
	  
	  vm.reload();
	  
	  vm.addItem = function(task){
		  todoService.create(task).then(function(){
			  vm.reload();
		  });
		}
	  $scope.$on('newTodo', function(e, todo){
		  console.log(todo);
	  });
	  
	  vm.getNumOfTasks= function(){
		  return $filter("todoFilter")(vm.todos).length;
		
		}
	  
	  vm.complete = function(task){
		
		if(task.completed === true){
			task.completeDate = todoService.getDate();
			
		}else {
			task.completeDate = "";
		}
		delete task.complete;
		console.log(task);
		todoService.update(task.id, task).then(function(res){
			vm.reload();
		})
		
		
	
	  }
	  
	  vm.selected = function(task){
		  vm.selected = vm.todos;
		  return vm.selected;
	  }
	  
	  vm.displayTable = function(){
		  
		  vm.selected = null;
	  }
	  
	  vm.setEditTodo = function(){
		  
		  vm.editTodo = angular.copy(vm.selected);
	  }
	  
	  vm.updateTodo = function(todo){
		  console.log(todo);
		 todoService.update(todo.id, todo)
		 .then(function(res){
			 vm.selected = res.data;
			 vm.todo = null;
			 vm.reload();
		 });
	  }
	  
	  vm.delete = function(todo){
		  todoService.destroy(todo)
		  .then(function(res){
			  vm.reload();
		  });
	  }
	  
	  vm.someDateValue = function(task, date){
		  
		  task.completeDate = date;
	  }
	 
	  vm.incompleteTodos = function(){
		  return $filter('todoFilter')(vm.todos).length;
	  }
	  
	  vm.warnUser = function(){
		  var incomplete = $filter('todoFilter')(vm.todos).length
		  console.log(incomplete)
		  if(incomplete >= 10) {
			  return 'red'
		  }
		  
		  if(incomplete >= 5 && incomplete < 10){
			  return 'yellow'
		  }
		  if(incomplete < 5){
			 
			 return 'green'
		 }
		  
		  
	  }
	  
	  vm.selected = null;
	  vm.editTodo = null;
	 
  	},
  		controllerAs: 'vm'
  })
  