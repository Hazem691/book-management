import { ObjectId } from "bson";
import authorModel from "../../../db/models/authorModel.js";


export const addAuthor = async(req,res)=>{
    
    const author = await authorModel.create(req.body) ;
    res.json({message : "Author added successfully ..." , author}) ;
}


export const getAllAuthors = async(req,res)=>{
    const author = await authorModel.find().populate("books","-_id")
    res.json({message : "done",author});
}


export const getSingleAuthor = async(req,res)=>{
    const {id} = req.params ;
    const author = await authorModel.findById({_id :new ObjectId(id)}) ;
    if(!author){
        res.status.json({message : "Author Id is not found ..."});
    }
    res.json({message : "done",author});
}



export const updateAuthorById = async(req,res)=>{
    const{id} = req.params ;
    const {name,bio, birthDate} = req.body ;
    const updateAuthor = await authorModel.findByIdAndUpdate({_id : new ObjectId(id)},{name,bio, birthDate},{new : true}) ;
    if(!updateAuthor){
        res.status(404).json({message : "This book Id is not exist ..."})
    }
    res.status(201).json({message : "done",updateAuthor})
}


export const deleteAuthorById = async(req,res)=>{
    const{id} = req.params ;
   
    const deleteAuthor = await authorModel.findByIdAndDelete({_id : new ObjectId(id)}) ;
    if(!deleteAuthor){
        res.status(404).json({message : "This book Id is not exist ..."})
    }
    res.status(201).json({message : "done"}) ;
}




