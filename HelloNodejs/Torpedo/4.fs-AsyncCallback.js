const fs = require('node:fs')

console.log("leyendo primer archivo...")
fs.readFile('Torpedo/archivo.txt', 'utf8', (err, data) => { //ejecutas este callback
    console.log("primer archivo: ", data);
});

console.log("Haciendo cosas en medio...");

console.log("leyendo segundo archivo...");
fs.readFile('Torpedo/archivo2.txt', 'utf8', (err, data) => { //ejecutas este callback
    console.log("segundo archivo: ", data);
});