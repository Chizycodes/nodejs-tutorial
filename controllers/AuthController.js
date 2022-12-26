const User = require('../models/User');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const saltRounds = 10;

exports.signup = async (req, res) => {
	try {
		const password = await bcrypt.hash(req.body.password, saltRounds);
		const data = { ...req.body, password };
		const user = await User.create(data);
		res.json({ user });
	} catch (error) {
		res.status(400).json(error.errors);
	}
};

exports.login = async (req, res) => {
	const user = await User.findOne({ email: req.body.email });
	if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
		return res.status(400).json({ error: 'Invalid email or password' });
	}

	const token = jwt.sign({ user }, 'secretKey');
	res.json({ user, access_token: token });
};
