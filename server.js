const http = require('node:http')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello Node!!!</h1>\n');
});



const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running at http at http://localhost:${PORT}/`);
})