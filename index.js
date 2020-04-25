const express = require('express')
const mongoose = require('mongoose')
const app = express()

// Body parser for accepting json from client
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes
app.use('/posts', require('./routes/posts'))
app.use('/categories', require('./routes/categories'))

// Connect to db via mongoose
const db_url = ''
mongoose
	.connect(db_url)
	.then(() => {
		console.log('Database Connected.')
	})
	.catch((error) => {
		console.log('Database Connect Faield.')
	})

// Start server
app.listen(3000, () => {
	console.log('server running on http://localhost:3000')
})
