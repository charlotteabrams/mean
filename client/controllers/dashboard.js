// console.log('hello from users controller')
app.controller('dashboardController', function($scope, $location, $routeParams, userFactory, activityFactory){
	// console.log('hello from inside usercontrollers function')
	$scope.current_user = null
	$scope.users = null

	userFactory.getCurrentUser(function(data){
		$scope.current_user = data
		console.log($scope.current_user, 'IS THE CURRENT USER')
		if($scope.current_user.name==null){
			$location.url('/')
		}
	})
	
	userFactory.getUsers(function(data){
		$scope.users = data;
	})
	$scope.logout = function(){
		userFactory.logout(function(data){
			console.log('LOGOUT')
			$location.url('/')
		})
	}

	activityFactory.showActivities(function(data) {
		console.log(data, '$$$$$$$$$$$$$$$$$$$$$$$$$$ should be activities')
		$scope.activities = data;
	});

	$scope.checkBox = function(activityId, current_userId) {
		// console.log(activityId, "is the activity id888888888888888888888")
		// console.log(current_userId, "is the current user id888888888888888888888")
		info = {_id: activityId, userid: current_userId};
		// console.log(info, 'INFO8888888888888')
		activityFactory.checkBox(info, function(data) {
			$scope.user = data;
			activityFactory.showActivities(function(results){
				$scope.activities = results
			})
		})
	}

	$scope.addActivity = function(newActivity, creator) {
		newActivity._creator = creator
		console.log(newActivity, "NEW ACTIVITY!!!!!!!!!!!!!!!!!!!!!!!!!")
		// console.log(creator, "SHOULD BE THE ONE WHO CREATED EVENT")
		activityFactory.addActivity(newActivity, function(data){
			activityFactory.showActivities(function(data){
				$scope.activities = data
			})
			$scope.newActivity = {};
		})
	}
})	







