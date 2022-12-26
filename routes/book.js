const express = require('express');
const { ObjectId } = require('mongodb');
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
		res.status(201).json({ data: 'Book saved successfully' });
	});

bookRouter
	.route('/:id')
	.get(async (req, res) => {
		const _id = ObjectId(req.params.id);
		const db = await connect();
		const book = await db.collection('books').find({ _id }).toArray();
		res.json(book);
	})
	.patch(async (req, res) => {
		const _id = ObjectId(req.params.id);
		const db = await connect();
		await db.collection('books').updateOne({ _id }, { $set: req.body });
		res.json({ data: 'Book updated successfully' });
	})
	.delete(async (req, res) => {
		const _id = ObjectId(req.params.id);
		const db = await connect();
		await db.collection('books').deleteOne({ _id });
		res.status(204).json();
	});

module.exports = bookRouter;
