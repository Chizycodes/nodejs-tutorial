const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;
const routes = require('./routes/index');
const connectDB = require('./database/db');
const test = require('./middleware/auth');

app.set('view engine', 'pug');

app.use(test);
app.use(bodyParser.json());
app.use(routes);

connectDB().then(() => {
	app.listen(PORT, () => {
		console.log(`server is running on port ${PORT}`);
	});
});
