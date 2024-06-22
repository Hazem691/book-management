import { Router } from "express";
import { addAuthor, deleteAuthorById, getAllAuthors, getSingleAuthor, updateAuthorById } from "./author.controller.js";

const router = Router() ;

router.post('/addAuthor',addAuthor);

router.get('/getAllAuthors',getAllAuthors) ;

router.get('/getSingleAuthor/:id',getSingleAuthor) ;

router.patch('/updateAuthorById/:id',updateAuthorById) ;

router.delete('/deleteAuthorById/:id',deleteAuthorById) ;




export default router ;