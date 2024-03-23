const express = require('express')
const ditto = require('./pokemon/ditto.json')

const app = express()
app.disable('x-powered-by')

const PORT = process.env.PORT ?? 3000

app.use((req, res, next) => {
  console.log('mi primer middleware')
  // Revisar si el usuario tiene cookies
  // Trackear la request a la base de datos
  next()
})

// app.use(express.json()) -> soluciona todo lo de abajo

app.use((req, res, next) => {
  if (req.method !== 'POST') return next()
  if (req.headers['content-type'] !== 'application/json') return next()
  // solo llegan las request que son POST y tienen el header Content-Type: application/json

  let body = ''

  req.on('data', chunk => {
    body += chunk.toString() // convertir a string el chunk recibido
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    // mutamos la request y metemos la info en el req.body
    req.body = data
    next()
  })
})

app.get('/', (req, res) => {
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  // Con req.body deberiamos guardar en la base de datos
  res.status(201).json(req.body)
})

// Error 404 general para todas las rutas no encontradas, va al final porque es la ultima en revisarse

app.use((req, res) => {
  res.status(404).send('<h1>404</h1>')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
