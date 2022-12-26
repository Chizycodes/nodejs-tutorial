const connect = require('../database/db');
const { ObjectId } = require('mongodb');

exports.index = async (req, res) => {
	const db = await connect();
	const books = await db.collection('books').find().toArray();
	res.json(books);
};

exports.store = async (req, res) => {
	const db = await connect();

	await db.collection('books').insertOne(req.body);
	res.status(201).json({ data: 'Book saved successfully' });
};

exports.show = async (req, res) => {
	const _id = ObjectId(req.params.id);
	const db = await connect();
	const book = await db.collection('books').find({ _id }).toArray();
	res.json(book);
};

exports.update = async (req, res) => {
	const _id = ObjectId(req.params.id);
	const db = await connect();
	await db.collection('books').updateOne({ _id }, { $set: req.body });
	res.json({ data: 'Book updated successfully' });
};

exports.delete = async (req, res) => {
	const _id = ObjectId(req.params.id);
	const db = await connect();
	await db.collection('books').deleteOne({ _id });
	res.status(204).json();
};