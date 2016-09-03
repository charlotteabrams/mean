app.controller('usersController', function($scope, userFactory, $location, $routeParams, activityFactory){
	$scope.current_user = null


	$scope.login = function(){
		if(typeof($scope.newUser) != 'undefined'){
			// console.log($scope.newUser.name, "NEW USER NAME88888888888888888")
			userFactory.login($scope.newUser.name, function(data){
				console.log(data, 'is the login data')
				$location.url('dashboard')
			})
		} else {
			alert('Please fill everything out.')
		}
	}
	userFactory.getCurrentUser(function(data){
		$scope.current_user = data
		console.log($scope.current_user, 'IS THE CURRENT USER')
		if($scope.current_user.name==null){
			$location.url('/')
		}
	})

	userFactory.getUser($routeParams, function(data){
		// console.log('HEYYYYYYYYYYYYYYYYYYYYYYYYY999999999')
		$scope.user = data
		// console.log($scope.user, "iis this scope.user?!?!?!?!?!!?")
	})
	



})