const http = require('node:http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	console.log(req.url);
	if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
		fs.readFile('pages/home.html', 'utf8', (err, data) => {
			if (err) throw err;
			res.write(data);
			res.end();
		});
	} else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
		fs.readFile('pages/about.html', 'utf8', (err, data) => {
			if (err) throw err;
			res.write(data);
			res.end();
		});
	} else {
        res.writeHead(404, {'Content-Type': 'text/html'});
		fs.readFile('pages/404.html', 'utf8', (err, data) => {
			if (err) throw err;
			res.write(data);
			res.end();
		});
	}
});

console.log(`server is running on port 3000`);
server.listen(3000);
