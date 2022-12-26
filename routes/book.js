const express = require('express');
const bookRouter = express.Router();
const connect = require('../database/db');

bookRouter
	.route('/')
	.get(async (req, res) => {
		const db = await connect();
		const books = await db.collection('books').find().toArray();
		res.json(books);
	})
	.post(async (req, res) => {
		const db = await connect();

		await db.collection('books').insertOne(req.body);
		res.json({ data: 'Book saved successfully' });
	});

bookRouter
	.route('/:id')
	.get((req, res) => {
		console.log(req.params);
		res.send(`Single book of ID: ${req.params.id}`);
	})
	.patch((req, res) => {
		console.log(req.params);
		res.send(`Single book of ID: ${req.params.id} to  be updated`);
	})
	.delete((req, res) => {
		console.log(req.params);
		res.send(`Single book of ID: ${req.params.id} to  be deleted`);
	});

module.exports = bookRouter;
