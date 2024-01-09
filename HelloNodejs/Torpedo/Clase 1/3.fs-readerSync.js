const fs = require('node:fs')

const text = fs.readFileSync('Torpedo/archivo.txt', 'utf-8')

console.log(text)
