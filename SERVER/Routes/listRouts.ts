import express from 'express'
import { addList, getAllList } from '../Controllers/listController'
const listrouter=express.Router()

listrouter
.post('/addlist',addList)
.get("/getall",getAllList)
// .post("/updatelist/:id",updateList)

export default listrouter