// Esto comentado solo en los modulos nativos
// que no tienen promesas nativas

// const { promisify } = require("mode:util");
// const readFilePromise = promisify(fs.readFile);

import { readFile } from 'node:fs/promises'

console.log('leyendo el primer archivo...')
const text = await readFile('Torpedo/archivo.txt', 'utf-8')
console.log('primero text: ', text)
console.log('------> hacer cosas mientras se lee el archivo...')

console.log('leyendo el segundo archivo...')
const text2 = await readFile('Torpedo/archivo2.txt', 'utf-8')
console.log('segundo text: ', text2)
