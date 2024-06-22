import { ObjectId } from "bson";
import bookModel from "../../../db/models/bookModel.js";

export const addBook = async (req, res) => {

    const {title,content, author,publishedDate} = req.body;
   
    const newBook = await bookModel.create(req.body);

    res.status(201).json({ message: 'done', newBook });

};


export const getAllBooks = async (req,res)=>{
    const books = await bookModel.find();
    res.status(201).json({message : 'done',books}) ;
};


export const getBookById = async(req,res)=>{
    const {id} = req.params ;
    const book = await bookModel.findById({_id :new ObjectId(id)}) ;
    if(!book){
        res.status(404).json({message : "This book Id is not exist ..."})
    }
   
    res.status(201).json({message : "done",book})
}


export const updateBookById = async(req,res)=>{
    const{id} = req.params ;
    const {title,content, author,publishedDate} = req.body ;
    const updateBook = await bookModel.findByIdAndUpdate({_id : new ObjectId(id)},{title,content, author,publishedDate},{new : true}) ;
    if(!updateBook){
        res.status(404).json({message : "This book Id is not exist ..."})
    }
    res.status(201).json({message : "done",updateBook})
}

export const deleteBookById = async(req,res)=>{
    const{id} = req.params ;
   
    const deleteBook = await bookModel.findByIdAndDelete({_id : new ObjectId(id)}) ;
    if(!deleteBook){
        res.status(404).json({message : "This book Id is not exist ..."})
    }
    res.status(201).json({message : "done"}) ;
}
