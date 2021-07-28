const http = require('http')
const url = require('url')
const fs = require('fs')
const server = http.createServer((req,res)=>{
    const url1 = url.parse(req.url, true)
    if(url1.query.file === "sunny"){
      fs.createReadStream('./sunny.txt').pipe(res)

    }
    else{
        res.writeHead(404)
        res.end("File not found")
    }

});
server.listen(3000)