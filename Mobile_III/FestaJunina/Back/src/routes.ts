import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

interface IRequestBody {
   item: string,
   value: number,
   position: number
};

//get all items
router.get('/getAll', async (req, res) => {
   const getAll = await prisma.list.findMany()
   res.json(getAll)
})

//register an item
router.post('/register', async (req, res) => {
   const { item, value, position }: IRequestBody = req.body

   const createItem = await prisma.list.create({
      data: {
        item,
        value,
        position,
      },
    });
  
    res.json(createItem);
})

//delete an item
router.delete('/:id',async (req, res) => {
   const { id } = req.params

   const deleteItem = await prisma.list.delete({
      where: {
         id
      }
   })

   res.json(deleteItem)
})

export { router }