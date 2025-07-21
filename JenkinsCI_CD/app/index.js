const http = require('http');
http.createServer((req, res) => {
  res.write("Hello from Jenkins CI/CD pipeline!");
  res.end();
}).listen(3000);
