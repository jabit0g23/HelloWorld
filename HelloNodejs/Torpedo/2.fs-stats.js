const fs = require('node:fs');

const stats = fs.statSync('Torpedo/archivo.txt');

console.log(
    stats.isFile(), // si es un fichero
    stats.isDirectory(), // si es un directorio
    stats.isSymbolicLink(), // si es un link
    stats.isBlockDevice(), // si es un dispositivo de bloque
    stats.isCharacterDevice(), // si es un dispositivo de caracteres
    stats.isFIFO(), // si es un pipe
    stats.isSocket(), // si es un socket
    stats.size, // tamaño del fichero en bytes
);