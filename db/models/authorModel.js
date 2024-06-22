import { Schema,model } from "mongoose";

const authorSchema = new Schema({
    name : {
        type : String,
        unique : true,
        required : true
    },
    bio : String ,
    birthDate : Date ,
    books : [{
        type : Schema.Types.ObjectId ,
        ref  : 'Book'
    }]
}) ;


const authorModel = model('Author',authorSchema) ;

export default authorModel ;