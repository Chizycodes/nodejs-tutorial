const http = require('node:http');

const server = http.createServer((req, res) => {
	console.log(req.url);
	if (req.url === '/') {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write('<h1>Home Page</h1>');
		res.end();
	}
	if (req.url === '/about') {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write('<h1>About Page</h1>');
		res.end();
	} else {
		res.writeHead(404, { 'Content-Type': 'text/html' });
		res.write('<h1>404 Page Not Found</h1>');
		res.end();
	}
});

console.log(`server is running on port 3000`);
server.listen(3000);
