// console.log('hello from activity model')

var mongoose = require('mongoose');
var Schema = mongoose.Schema

var activitySchema = new mongoose.Schema({
	title: {type: String, required: true, minlength: 5},
	description: {type: String, required: true, minlength: 10},
	check: {type: Boolean, default: false},
	_creator : {type: Object},
	_user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
}, {timestamps: true});

mongoose.model('Activity', activitySchema);