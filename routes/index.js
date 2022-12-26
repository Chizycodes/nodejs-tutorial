const express = require('express');
const router = express.Router();
const bookRouter = require('./book');
const path = require('path');

router.get('/', (req, res) => {
	res.render('index', { name: 'Chizycodes' });
});

router.use('/book', bookRouter);

router.all('/*', (req, res) => {
	res.send('404 not found');
});

module.exports = router;
