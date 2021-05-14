let PORT = 3000;
const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) =>{
    if(req.url === '/'){
        res.writeHead(200, {'content-type':'text/html'});
        const homePage = fs.readFileSync('index.html');
        res.write(homePage);
        res.end();
    } else{
        res.writeHead(404, {'content-type':'text/html'});
        const error = fs.readFileSync('error.html');
        res.write(error);
        res.end();
    }
});

server.listen(PORT, ()=>{
    console.log(`Server working on 127.0.0.1:${PORT}`);
});