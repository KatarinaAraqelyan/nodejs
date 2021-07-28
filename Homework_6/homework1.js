const http = require('http')
const server = http.createServer((req,res)=>{
    if (req.url === '/sunny'){
        console.log("Yes.")
    }
});
server.listen(3000)