const fs = require('fs')
const {Transform} = require('stream').Transform

class RemoveSpecialChars extends Transform{
    _transform(chunk, encoding, callback) {
        const result = chunk.toString().replace(/[^a-zA-Z ]/g, "")
        console.log(result)
    }
}
let obj = new RemoveSpecialChars()
fs.createReadStream('homework4Eng.txt')
    .pipe(obj)


