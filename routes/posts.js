// file: routes/posts.js
const Router = require('express').Router()
const qc = require('quick-crud')
const Post = require('../models/Post')

// Get post list
Router.get('/', async (req, res) => {
	const _docs = await qc.index(Post, 'categories', {
		page: +req.query.page,
		limit: +req.query.limit
	})
	res.json(_docs)
})

// Get a single post
Router.get('/:_id', async (req, res) => {
	const _docs = await qc.show(Post, { _id: req.params._id }, 'categories')
	res.json(_docs)
})

// Create a post
Router.post('/', async (req, res) => {
	const _doc = await qc.store(Post, req.body)
	res.json(_doc)
})

// Update a single post
Router.put('/:_id', async (req, res) => {
	let data = await qc.update(
		Post,
		{
			_id: req.params._id
		},
		req.body
	)

	res.json({
		message: 'Post updated',
		data
	})
})

// Delete a post
Router.delete('/:_id', async (req, res) => {
	let data = await qc.destroy(Post, {
		_id: req.params._id
	})

	res.json({
		message: 'Post deleted',
		data
	})
})

module.exports = Router
