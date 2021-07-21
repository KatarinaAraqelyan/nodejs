const fs = require('fs')
const stream = require('stream')
const letters = require('./letters.json')
const readStream  = fs.createReadStream('homework4Eng.txt',{
    highWaterMark:1
})
readStream.on("data",function (chunk){
    for (const [key,value] of Object.entries(letters)) {
        if (chunk == key){
            console.log(value)
        }
    }
})
