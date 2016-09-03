// console.log('hello from routes.js');
var path = require('path');
var users = require(path.join(__dirname, '..', 'controllers', 'users.js'));
var activities = require(path.join(__dirname, '..', 'controllers', 'activities.js'));
	

module.exports = function(app) {
	app.get('/', function(req, res) {
		users.index(req, res);
	})

	app.post('/login', function(req, res) {
		users.add(req, res);
	})

	app.get('/logout', users.logout);

	app.post('/getuser', function(req, res) {
		users.get(req, res);
	})
	app.get('/getcurrentuser', function(req, res) {
		users.getCurrent(req, res);
	})

	app.get('/getusers', function(req, res) {
		users.getAll(req, res);
	})

	//Activities Routes
	app.get('/showactivities', function(req, res) {
		// console.log('hi!!')
		activities.show(req, res);
	})

	app.post('/addactivity', function(req, res) {
		activities.add(req, res);
	})

	app.post('/checkBox', function(req, res) {
		activities.check(req, res);
		console.log('hi!!')
	})


}