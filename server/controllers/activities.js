// console.log('hello from backend activities controller')
var mongoose = require('mongoose');
var Activity = mongoose.model('Activity');
var User = mongoose.model('User');
module.exports = {
	show: function(req, res) {
		Activity.find({})
		.populate('_user')
		.exec(function(err, activities) {
			if (err) {
				console.log(err);
			} else {
				console.log(activities, "ACTIVITIES")
				res.json(activities);
			}
		})
	},

	add: function(req, res) {
		console.log(req.body, 'RECCCCCC')
		Activity.create({
			title : req.body.title,
			description : req.body.description,
			_user : req.body._user,
			_creator : req.body._creator
		}, function(err, activity){
			if(err){
				console.log(err)
			} else {
				User.update({_id : req.session._id}, {$push : {_activities : activity._id}}, function(err, updatedUser){
					if (err){
						console.log(err)
					} else {
						User.findOne({_id : req.session._id})
						.populate('_activities _activities._user _activities._creator')
						.exec(function(err, activities){
							if(err){
								console.log(err)
							} else {
								console.log(activities, "SUCCESSSSS")
								res.json(activities)
							}
						})
					}
				})
			}
		})
	},

	check: function(req, res) {
		// console.log(req.body, "REC.BODYYYYYYYYYYYYY%%%%%%%%%%%")
		Activity.update({_id: req.body._id}, {$set: {check: true}}, function(err, activity) {
			if (err) {
				console.log(err);
			} else {
				User.findOne({_id: req.body.userid})
				.populate('_activities _activities._user')
				.exec(function(err, activities) {
					if (err) {
						console.log(err);
					} else {
						console.log('SUCCESSSSSS')
						res.json(activities);
					}
				});
			}
		});
	},
	// getall : function(req,res){
	// 	Activity.find({})

	// }

}