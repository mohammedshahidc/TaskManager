import { Request,Response } from "express";
import prisma from "../prisma/prisma";

export const addTodo=async(req:Request,res:Response)=>{
    try {
        const {title,description,listId}=req.body
        if(!title||!description){
            res.status(400).json({error:true,message:"All Feiled are required"})

        }
        const todo=await prisma.todo.create({
            data:{
                title,description,listId
            }
        })
        res.status(200).json({error:false,message:"Todo added successfully",data:todo})
    } catch (error) {
        res.status(400).json({error:true,message:error})
        console.log(error);
        
    }
}

export const getAllTodos=async(_req:Request,res:Response)=>{
    try {
        const allTodos=await prisma.todo.findMany()
        if(!allTodos){
            res.status(400).json({error:true,message:"Datas not found"})
        }
        res.status(200).json({error:false,message:"all todos",data:allTodos})
    } catch (error) {
        console.log(error);
        res.status(400).json({error:true,message:error})

    }
}

export const getTodoById=async(req:Request,res:Response)=>{
    try {
        const id=parseInt(req.params.id)
        if(!id){
            res.status(400).json({error:true,message:"id is required"})
  
        }
        const todo=await prisma.todo.findUnique({where:{id}})
        res.status(200).json({error:false,message:'todo',data:todo})
    } catch (error) {
        console.log(error);
        res.status(400).json({error:true,message:error})

        
    }
}

export const updateTodo=async(req:Request,res:Response)=>{
    try {
        const id=parseInt(req.params.id)
        const updatedTodo=await prisma.todo.update({
            where:{id},
            data:{completed:true}
        })
        res.status(200).json({error:false,message:'todo',data:updatedTodo})

    } catch (error) {
        console.log(error);
        res.status(400).json({error:true,message:error})

    }
}

export const deleteTodo=async(req:Request,res:Response)=>{
   try {
    const id=parseInt(req.params.id)
    const deletedTodo=await prisma.todo.delete({where:{id}})
    res.status(200).json({error:false,message:'todo',data:deletedTodo})

   } catch (error) {
    res.status(400).json({error:true,message:error})

   }
}
