let path_name = ""
for (let i = 0; i < 8; i++) {
    path_name += Math.floor(Math.random() * 9)
}
const os = require('os')
const fs = require('fs')
const path = require('path')
const currentDir = path.resolve()
const file_path = path.join(currentDir,path_name)
const text = os.cpus()
const js = JSON.stringify(text)
fs.promises.writeFile(file_path,js)
console.log(text.toString())