angular.module("authModule").component("logout", {
    templateUrl : "app/authModule/logout.component.html",
    controller : function($filter, $http, authService, $location) {
    	
     	var vm = this;
     	
     	vm.logoff = function(user) {
     		authService.logoff(user)
     		.then(function(res){
     			$location.path('/');
     			})
     		}
     
    },
    controllerAs: 'vm'
});