const http = require('http')
const config = require('./config.json')
const server = http.createServer(function (req,res){
    res.writeHead(200,{"Content-Type": "text"})
    res.write("Hello Korea")
    res.end()
});

server.listen(config.port)