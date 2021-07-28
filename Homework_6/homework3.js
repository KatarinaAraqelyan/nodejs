const http = require('http');
const users = require('./users.json');
const url = require('url');

http.createServer((req, res) => {
    const reqUrl = new URL(req.url, 'http://localhost:2020');
    const filter = reqUrl.searchParams.get('filter');
    console.log(filter);
    res.writeHead(200, {
        'ContentType': 'application/json'
    })
    if (filter){
        res.end(JSON.stringify(users.filter(user=> {
            return user['first_name'].includes(filter) || user['last_name'].includes(filter);
        })));
    } else {
        res.end(JSON.stringify(users));
    }
}).listen(2020);