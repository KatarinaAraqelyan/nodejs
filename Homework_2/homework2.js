const os = require('os')
const networks = os.networkInterfaces();

networks['Wi-Fi']?.forEach(item => {
    if(item.family === 'IPv4'){
        console.log(item.address)
    }
});
