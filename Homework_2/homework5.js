const fs = require('fs')
const os = require('os')
const name = os.platform +"_" + new Date().getHours() + "_" + new Date().getMinutes() + "_" + new Date().getSeconds()

const path = require('path')
const currentDir = path.resolve()
const file_path = path.join(currentDir,name)
let data = " "
try {
    for (let i = 1; i < 5; i++) {
        data += fs.readFileSync('homework' + i + '.js');
    }

    fs.writeFileSync(name, data);
} catch (e) {
    console.log(e);
}