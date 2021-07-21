const fs = require('fs').promises
async function foo(){
    const text = await fs.readFile('homework4Eng.txt',"utf8");
    let arr= await text.split(" ")
    let new_arr = []
    for (const arrKey of arr) {
        new_arr.push(arrKey[0].toUpperCase() + arrKey.slice(1))
    }
    console.log(new_arr.toString().replace(/,/g," "))
}
foo()