// console.log('hello from users model')

var mongoose = require('mongoose');
var Schema = mongoose.Schema

var userSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 1},
	_activities: [{type: mongoose.Schema.Types.ObjectId, ref: 'Activity'}],
}, {timestamps: true});

mongoose.model('User', userSchema);