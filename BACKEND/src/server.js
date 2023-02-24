const http = require ('http');
const characters = require('./utils/data')

http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*'); //con esta línea le decimos que tenga acceso a varios servidores.

    if(req.url.includes('rickandmorty/character')){
    let id = req.url.split('/').at(-1);

    let characterFilter = characters.filter(char => char.id === Number(id))
    
    res.writeHead(200, {'Content-type': 'application/json'}).end(JSON.stringify(characterFilter[0]))
}

}).listen(3001, 'localhost');

