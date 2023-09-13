const http = require('http');

http.createServer((req,res)=>{
    res.write("Hello, world!");
    res.end();
}).listen(4000);



console.log("HABILITADO PUERTO 4000");