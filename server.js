

const http = require('http'); 


const server = http.createServer((req, res) => {

  res.write("Hello World!");
  res.end(); 
});


server.listen(8080, 'localhost', () => {
  console.log('Server running at http://localhost:8080/');
});
