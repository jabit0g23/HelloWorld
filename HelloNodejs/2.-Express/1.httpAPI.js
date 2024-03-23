const http = require('node:http')
const fs = require('node:fs')
const desiredPort = process.env.PORT ?? 3000

const processRequest = (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200 // ok
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<h1>Hola, bienvenido a la página general</h1>')
  } else if (req.url === '/imagen.png') {
    res.setHeader('Content-Type', 'image/png; charset=utf-8')

    fs.readFile('./cat.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>500 Internal Server Error</h1>')
      } else {
        res.setHeader('Content-Type', 'image/png; charset=utf-8')
        res.end(data)
      }
    })
  } else if (req.url === '/otra') {
    res.statusCode = 200 // ok
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<h1>Otra ruta distinta</h1>')
  } else {
    res.statusCode = 404 // ok
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<h1>Error 404 not found</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`)
})
