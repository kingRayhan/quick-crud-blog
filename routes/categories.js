// file: routes/categories.js
const express = require('express')
const Route = express.Router()

const qc = require('quick-crud')

const Category = require('../models/Category')

// Get category list
Route.get('/', async (req, res) => {
	const _docs = await qc.index(Category, '', {
		page: +req.query.page,
		limit: +req.query.limit
	})
	res.json(_docs)
})

// Create a category with qc
Route.post('/', async (req, res) => {
	const _doc = await qc.store(Category, req.body)
	res.json(_doc)
})

// Get a single category
Route.get('/:_id', (req, res) => {
	qc.show(Category, {
		_id: req.params._id
	})
})

// Update a single category
Route.put('/:_id', async (req, res) => {
	let data = await qc.update(
		Category,
		{
			_id: req.params._id
		},
		req.body
	)

	res.json({
		message: 'Category updated',
		data
	})
})

// Delete a category
Route.delete('/:_id', async (req, res) => {
	let data = await qc.destroy(Category, {
		_id: req.params._id
	})

	res.json({
		message: 'Category deleted',
		data
	})
})

module.exports = Route
