import { Schema, model } from "mongoose";

const bookSchema = new Schema({
    title: {
        type: String,  
        required: true
    },
    content: {
        type: String, 
        required: true
    },
    author: {
        type: String,  
        required: true
    },
    publishedDate: {
        type: Date, 
        default: Date.now 
    }
});

const bookModel = model("Book", bookSchema);

export default bookModel;
