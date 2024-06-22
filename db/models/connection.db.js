import mongoose from "mongoose";


const connectionDB = async ()=>{
    return await mongoose.connect('mongodb://localhost:27017/bookManager').then(()=>{
        console.log('connected to database');
    }).catch((err)=>{
        console.log('Not connected to database',err) ;
    })
}

export default connectionDB;