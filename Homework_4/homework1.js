const fs = require('fs')
const stream = require('stream')
let reg = /^[a-zA-Z0-9_.-]*$/;
const readStream  = fs.createReadStream('text.txt',{
    highWaterMark:10
})
readStream.on("data",function (chunk){
      if(reg.test(chunk)) {
          console.log(chunk.toString())
      }
})