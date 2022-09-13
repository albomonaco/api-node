const http = require("http");
const port = 3000;

const rotas = {
    '/': 'Hello World!',
    '/livros': 'Which book do you want?',
    '/autores': 'Listing authors',
    '/editora': 'Listing publishers'
}

const server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end(rotas[req.url]);
})


server.listen(port, () => {
    console.log(`Ouvindo em http://localhost:${port}`);
})



