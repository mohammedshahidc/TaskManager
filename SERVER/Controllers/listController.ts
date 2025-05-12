
import { Request, Response } from "express";
import prisma from "../prisma/prisma"

export const addList = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;

    if (!title) {
       res.status(400).json({ error: true, message: "Title is required" });
       return
    }

    const newList = await prisma.list.create({  
      data: { title }
    });

    res.status(201).json({
      error: false,
      message: "List created successfully",
      data: newList,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: true,
      message: "Something went wrong",
      details: error,
    });
  }
};

export const getAllList=async (_req:Request,res:Response)=>{
   try {
    const lists=await prisma.list.findMany()
    if(!lists){
        res.status(400).json({ error: true, message: "List not found" })
        return
    }
    res.status(200).json({error:false,message:"all lists",data:lists})
   } catch (error) {
    res.status(400).json({ error: true, message:error });

   }

}

export const updateList=async(req:Request,res:Response)=>{
    try {
        const listId = parseInt(req.params.id)
        const { title, description } = req.body
    
        if (!title || !description) {
           res.status(400).json({ message: "Title and description are required" })
        }
        const list = await prisma.list.findUnique({ where: { id: listId } })
        if (!list) {
           res.status(404).json({ message: "List not found" })
        }
        const updatedList = await prisma.list.update({
            where: { id: listId },
            data: {
              cards: {
                create: {
                  title,
                  description,
                },
              },
            },
            include: {
              cards: true, 
            },
          });
      
          return res.status(200).json(updatedList);
    } catch (error) {
        console.error("Error updating list:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
