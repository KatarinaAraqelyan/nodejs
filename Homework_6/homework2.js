const express = require('express');
const router = express.Router();
const app = express()
const http = require('http')
const hour = new Date().getHours()
router.route('/users').get((req,res) =>{
    res.end('GET' + "   " + hour)
}).post((req,res) => {
    res.end('POST' + "   " + hour)
}).put((req,res) => {
    res.end('PUT' + "   " + hour)
}).delete((req,res) => {
    res.end('DELETE' + "   " + hour)
})

app.use(router)
http.createServer(app).listen(2020)