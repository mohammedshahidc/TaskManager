import express from 'express'
import { addTodo, deleteTodo, getAllTodos, getTodoById, updateTodo } from '../Controllers/TodoController'
const router=express.Router()

router
.post('/addtodo',addTodo)
.get('/getTodos',getAllTodos)
.get('/getbyid/:id',getTodoById)
.put('/update/:id',updateTodo)
.delete('/delete/:id',deleteTodo)

export default router
