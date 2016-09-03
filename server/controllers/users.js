// console.log('hello from backend users controller')
var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = {
	add: function(req,res){
		if (!req.body.name) return res.send({status: 'fail', error: 'no_name_in_body'});
		User.findOne({name: req.body.name}, function(err, existingUser){
			if(!existingUser){
				User.create(req.body, function(err, user){
					req.session.name = user.name;
					req.session._id = user._id;
					req.session.save()
					res.send(user)
				})
			} else {
				req.session.name = existingUser.name;
				req.session._id = existingUser._id;
				req.session.save()
				return res.send(req.session)
			}
		});
	},
	get: function(req, res) {
		User.findOne({_id: req.body.id})
		.populate('_activities _activities._user')
		.exec(function(err, user) {
			if (err) {
				console.log(err);
			} else {
				res.json(user);
			}
		})
	},
	getCurrent: function(req, res) {
		User.findOne({_id: req.session._id})
		.populate('_activities _activities._user')
		.exec(function(err, user) {
			if (err) {
				console.log(err);
			} else {
				console.log("*****************", user)
				res.json(user);
			}
		})
	},
	getAll: function(req, res) {
		User.find({}, function(err, users) {
			if (err) {
				console.log(err);
			} else {
				res.json(users);
			}
		})
	},
	logout: function(req, res) {
		req.session.destroy()
		res.redirect('/')
	}
}