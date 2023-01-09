// Node js is provides the javascript runtime evironment to executes JavaScript code outside a web browser. it is also used to making a custom server
// how to run js code : simply type node filename.js
// exit from jre .exit command

// Making server in node js
const http = require('http'); // we have included http module

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World'); // we can add html here
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});