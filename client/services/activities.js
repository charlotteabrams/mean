// console.log('hello from activity factory')
app.factory('activityFactory', function($http){
	var factory = {}
	
	factory.showActivities = function(callback) {
		$http.get('/showactivities').success(function(output) {
			console.log(output, "is the output@@@@@@@@@@@@@@@")
			callback(output);
		})
	}
	factory.addActivity = function(info, callback) {
		info.check = false;
		$http.post('/addactivity', info).success(function(output) {
			// console.log(output, "THIS SHOULD BE EVERYTHING USER AND CREATOR")
			callback(output);
		})
	}
	factory.checkBox = function(info, callback) {
		$http.post('/checkBox', info).success(function(output) {
			callback(output);
		})
	}

	return factory
})