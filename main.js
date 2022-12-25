const EventEmitter = require('events');
const myEvent = new EventEmitter();

myEvent.on('test-event', (data)=>{
    console.log('test event is fired');
    console.log(data);
})

const express = require("express");
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    myEvent.emit('test-event', {name: 'john', age: 30});
    res.send('Hello World');
})

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
})