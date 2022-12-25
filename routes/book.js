const express = require('express');
const bookRouter = express.Router();

bookRouter
	.route('/')
	.get((req, res) => {
		res.send('All books');
	})
	.post((req, res) => {
		res.json({ data: 'Book saved successfully' });
	});

bookRouter.get('/:id', (req, res) => {
	console.log(req.params);
	res.send(`Single book of ID: ${req.params.id}`);
});

module.exports = bookRouter;
