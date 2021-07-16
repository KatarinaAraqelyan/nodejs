const fs = require('fs').promises
async function foo(){
    const text = await fs.readFile('input.txt',"utf8");
    Promise.all([
        fs.writeFile('output1.txt',text.slice(0,text.length/2)),
        fs.writeFile('output2.txt',text.slice(text.length/2,text.length))

    ])
}
foo()
