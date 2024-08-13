import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'

import userRoutes from './routes/user.js'
import userDiscussion from './routes/Discussion.js'
// import { connectToDatabase, closeConnection } from './db.js';



// Middleware to parse JSON bodies
dotenv.config()
const port = process.env.PORT | 8000

const app = express()
app.use(cors())
// app.use(helmet())
// app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(express.json({ limit: '10mb' }))
app.use(bodyParser.json({ limit: '10mb' })); // Increase limit as needed
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));




app.use('/user', userRoutes);
app.use('/discussion', userDiscussion)


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost: ${port}`)
})