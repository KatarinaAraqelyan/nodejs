const fs = require('fs').promises
const os = require('os')
let old_name = os.userInfo().username
let new_name = new Date().getMonth()  + "_" + new Date().getDay() + "_" + new Date().getHours() + "_" + new Date().getMinutes() + "_" + new Date().getSeconds()

fs.rename(old_name,new_name)