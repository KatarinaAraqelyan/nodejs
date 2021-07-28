const os = require('os')
const  fs = require('fs').promises
const path= require('path')

let file_name = os.userInfo().username
let data = JSON.stringify(os.userInfo())
fs.writeFile(file_name,data)