// console.log('hello from user factory')
app.factory('userFactory', function($http){
	var factory = {}
	factory.current_user = null;
	
	factory.login = function(user, callback){
		console.log(user, 'is the login user from factory')
		var data = {name: user}
		$http.post('/login', data).success(function(output){
			if(output.error){
				alert('Please fill everything out.')
			} else {
				// console.log(output, 'is the factory output for login')
				factory.current_user = {name: output.name, _id: output._id}
				if(factory.current_user){
					// console.log(factory.current_user, "FACCOTRY CURRENT USER%%%%%%%%%%%%%%%%")
					callback(factory.current_user)
				}
			}
		})
	}
	factory.getUser = function(info, callback){
		// console.log(info, 'this is info and should be routeparams!!!!!!!!!!!!!!!!')
		$http.post('/getuser', info).success(function(output){
			// console.log(output, "IS THIS NULL?!?!?!?")
			callback(output)
		})
	}
	factory.getCurrentUser = function(callback){
		$http.get('/getcurrentuser').success(function(output){
			factory.current_user = {name: output.name, _id:output._id};
			callback(factory.current_user)
		})
	}
	factory.getUsers = function(callback) {
		$http.get('/getusers').success(function(output) {
			callback(output);
		})
	}
	factory.logout = function(callback){
		$http.get('logout').success(function(output){
			callback(output)
		})
	}

	return factory;
})