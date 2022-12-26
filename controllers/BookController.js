const { ObjectId } = require('mongodb');
const Book = require('../models/Book');

exports.index = async (req, res) => {
	const books = await Book.find();
	res.json(books);
};

exports.store = async (req, res) => {
	try {
		await Book.create(req.body);
		res.status(201).json({ data: 'Book saved successfully' });
	} catch (error) {
		res.status(400).json(error.errors);
	}
};

exports.show = async (req, res) => {
	const _id = ObjectId(req.params.id);
	const book = await Book.find({ _id });
	res.json(book);
};

exports.update = async (req, res) => {
	const _id = ObjectId(req.params.id);
	await Book.updateOne({ _id }, { $set: req.body });
	res.json({ data: 'Book updated successfully' });
};

exports.delete = async (req, res) => {
	const _id = ObjectId(req.params.id);
	await Book.deleteOne({ _id });
	res.status(204).json();
};
