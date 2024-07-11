import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'

import userRoutes from './routes/user.js'
// import { connectToDatabase, closeConnection } from './db.js';



// Middleware to parse JSON bodies
dotenv.config()
const port = process.env.PORT
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())




app.use('/user', userRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost: ${port}`)
})