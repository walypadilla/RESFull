const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentSchema = new Schema({
	comment: { type: String, required: [true, 'La ide es requerida'] },
	author: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true,
		autopopulate: true,
	},
});

CommentSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('comment', CommentSchema);
