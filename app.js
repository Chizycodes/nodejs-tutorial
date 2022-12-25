const http = require("node:http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(
			JSON.stringify({
				data: 'Hello World!',
			})
		);
})

console.log(`server is running on port 3000`)
server.listen(3000);