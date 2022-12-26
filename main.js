// const EventEmitter = require('events');
// const myEvent = new EventEmitter();

// myEvent.on('test-event', (data)=>{
//     console.log('test event is fired');
//     console.log(data);
// })

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;
const routes = require('./routes/index');
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(routes);

app.listen(PORT, () => {
	console.log(`server is running on port ${PORT}`);
});
