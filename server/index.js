import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { randomUUID } from 'crypto'
import { getAll, get, update, createUsers } from '../server/controllers/Users.js'

let port = process.env.PORT || 7777
let development = process.env.NODE_ENV !== 'production'
let app = express()

app.use(
  cors(),
  bodyParser.urlencoded({ extended: true }),
  bodyParser.json()
)
app.listen(port, async () => {
  console.info('Server running, listening on port ', port)
  // genera usuarios falsos
  if (development) {
    await createUsers(100)
    console.info('Usuarios agregados')
  }
})

app.post('/login', async (req, res) => {
  // recibe email/contraseña
  const { email, password } = req.body
  // valida en base de datos
  const user = await get(email)
  console.log(user)
  // error 404 en caso de no encontrar correo
  if (!user) {
    res.status(404).send()
  // error 401 en caso de encontrar correo y no coincidir contraseña
  } else if (user.password !== password) {
    res.status(401).send()
  // devuelve un token en caso de exito
  } else {
    const token = randomUUID()
    await update(email, { token })
    res.status(200).send(token)
  }
})

app.get('/users', async (req,res) => {
  // TODO: recibe token de usuario en Header de autenticación
  // TODO: si token esta correcto retorna lista de usuarios paginada
  const { page, limit } = req.query
  res.send(await getAll(page, limit))
  // TODO: si esta incorrecto error 403
})
