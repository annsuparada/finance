import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import mongoose from 'mongoose'
import router from '../router'
import { config } from 'dotenv'

config()

const app = express()

app.use(
  cors({
    credentials: true,
  }),
)

app.use(compression())
app.use(cookieParser())
app.use(bodyParser())

const server = http.createServer(app)
const port = 8081
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`)
})

const dbUsername = process.env.DB_USERNAME
const dbPassward = process.env.DB_PASSWORD
const MONGO_URL = `mongodb+srv://${dbUsername}:${dbPassward}@finance.dv8bx0d.mongodb.net/?retryWrites=true&w=majority`

mongoose.Promise = Promise
mongoose.connect(MONGO_URL)
mongoose.connection.on('error', (error: Error) => console.log(error))

app.use('/', router())
