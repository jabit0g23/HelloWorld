const { readFile } = require('node:fs/promises')

console.log(process.cwd());

(
  async () => {
    console.log('leyendo el primer archivo...')
    const text = await readFile('./archivo.txt', 'utf-8')

    console.log('primero text: ', text)
    console.log('------> hacer cosas mientras se lee el archivo...')

    console.log('leyendo el segundo archivo...')
    const text2 = await readFile('./archivo2.txt', 'utf-8')
    console.log('segundo text: ', text2)
  }
)()
