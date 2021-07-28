const fsExtra = require('fs-extra');
const fs = require('fs').promises;

async function moveDir() {
    const files = await  fs.readdir(__dirname);

    for (let file of files) {
        const stat  = await fs.stat(__dirname +"\\" +  file);
        if(stat.isFile() && stat.size > 40){
            await fsExtra.move('./newDir' +"\\" + file)
        }
    }
}
moveDir().catch(err => console.log(err))