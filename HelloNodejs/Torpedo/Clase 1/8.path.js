const path = require('node:path')

// Barra separadora de carpetas según os
console.log(path.sep)

// unir rutas con path.join
// eslint-disable-next-line no-unused-vars
const filePath = path.join('content', 'subfolder', 'test.txt')

const base = path.basename('/tmp/secreto/password.txt')
console.log(base)

const filemane = path.basename('/tmp/secreto/password.txt', '.txt')
console.log(filemane)

const extension = path.extname('my.super.image.jpg')
console.log(extension)
