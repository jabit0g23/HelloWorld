const fs = require('node:fs/promises'); // es un módulo para trabajar con el sistema de archivos de manera asíncrona
const path = require('node:path'); // se utiliza para manejar rutas de archivos y directorios
const pc = require('picocolors');

// Obtiene el directorio que se va a listar desde los argumentos de la línea de comandos. Si no se proporciona ningún argumento, utiliza el directorio actual ('.') como valor por defecto.
const folder = process.argv[2] ?? '.'

// función asincrónica que toma un directorio como argumento.
async function ls (folder) {

  //Utiliza fs.promises.readdir para leer los nombres de los archivos y directorios en el directorio especificado. Si hay un error al leer el directorio, muestra un mensaje de error en rojo y sale del programa con un código de error.
  let files
  try {
    files = await fs.readdir(folder)
  } catch {
    console.error(pc.red(`No se pudo leer el directorio ${folder}`))
    process.exit(1)
  }

  //array filesPromises, cada archivo es una promesa de obtencion y procesamiento de info para un archivo en esta lista
  
  const filesPromises = files.map(async file => {
    // Construye la ruta completa del archivo o directorio
    const filePath = path.join(folder, file)
    // variable para almacenar información de estado
    let stats
    try {
      // Intenta obtener información del archivo o directorio
      stats = await fs.stat(filePath)
    } catch {
      console.error(`No se pudo leer el archivo ${filePath}`)
      process.exit(1)
    }

    // Determina si el elemento es un directorio (d) o un archivo (f)
    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : 'f'
    // Obtiene el tamaño del archivo como una cadena
    const fileSize = stats.size.toString()
    // Obtiene la fecha de modificación y la convierte en una cadena legible
    const fileModified = stats.mtime.toLocaleString()

    // Formatea la información del archivo con colores y estilos
    return `${pc.bgMagenta(fileType)} ${pc.blue(file.padEnd(20))} ${pc.green(fileSize.padStart(10))} ${pc.yellow(fileModified)}`
  })

  //función que toma un array de promesas (en este caso, filesPromises) y devuelve una nueva promesa que se resuelve cuando todas las promesas en el array se han resuelto. En este contexto, todas las promesas representan la obtención y procesamiento de información de archivos y directorios en el directorio especificado.
  const filesInfo = await Promise.all(filesPromises)

  //imprimir en la consola la información formateada de cada archivo y directorio en el directorio
  filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)