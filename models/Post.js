const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
	title: String,
	body: String,
	categories: [
		// referencing the category model
		{
			type: mongoose.SchemaTypes.ObjectId,
			ref: 'Category'
		}
	]
})

const Post = mongoose.model('Post', postSchema)
module.exports = Post
