const fs  = require('node:fs/promises');

fs.readdir('/.')
.then(files => {
    files.forEach(file => {
        console.log(file);
    })
})
.catch(e => {
    if (e){
        console.log('error al leer el directorio', e);
        return;
    }
})

