import express from 'express'
import dotenv from 'dotenv'
import router from './Routes/route'
import listrouter from './Routes/listRouts'

dotenv.config()
const app=express()
app.use(express.json())
app.use(express.urlencoded())

app.use('/api',router)
app.use('/api/list',listrouter)

const port=process.env.port||4000
app.listen(port,()=>console.log(`app run on ${port}`)
)