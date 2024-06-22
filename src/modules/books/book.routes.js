import { Router } from "express";
import { addBook, deleteBookById, getAllBooks, getBookById, updateBookById } from "./book.controller.js";


const router = Router() ;

router.post('/addBook',addBook );

router.get('/getAllBooks',getAllBooks);

router.get('/getBookById/:id',getBookById)

router.patch('/updateBookById/:id',updateBookById);

router.delete('/deleteBookById/:id',deleteBookById) ;

export default router ;