const fs = require('fs');

async function removeCommas() {
    const data = await fs.promises.readFile('./homework3.txt');
    await fs.promises.writeFile('replace.txt', data.toString().replace(/\,/g, ''));
    await fs.promises.unlink('./homework3.txt');
}

removeCommas().then().catch(err => console.error(err));