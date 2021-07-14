const os = require('os')
const fs = require('fs')
const path = require('path')
const currentDir = path.resolve()
const file_path = path.join(currentDir,"write.txt")
 fs.readFile('input.txt',"utf8",function (error,text){
   let result = text.replace(/ /g,"_")
     fs.promises.writeFile(file_path,result)
})
