const mongoose = require('mongoose');
const { Schema } = mongoose;

const IdeaSchema = new Schema({
	idea: { type: String, required: [true, 'La ide es requerida'] },
	description: { type: String },
	upvotes: [
		{
			type: Schema.Types.ObjectId,
			ref: 'user',
			autopopulate: true,
			type: Boolean,
		},
	],
	downvotes: [
		{
			type: Schema.Types.ObjectId,
			ref: 'user',
			autopopulate: true,
			type: Boolean,
		},
	],
	author: {
		type: Schema.Types.ObjectId,
		ref: 'user',
		required: true,
		autopopulate: true,
	},
	comments: [
		{
			type: Schema.Types.ObjectId,
			ref: 'comment',
			required: true,
			autopopulate: true,
		},
	],
});

IdeaSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('idea', IdeaSchema);
