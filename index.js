import express  from 'express';
import connectionDb from './db/models/connection.db.js';
import bookRouter from './src/modules/books/book.routes.js';
import authorRouter from './src/modules/authors/author.routes.js';

const app = express()
const port = 3000 ;


connectionDb();
app.use(express.json())

app.use(bookRouter);
app.use(authorRouter) ;
app.use('*',(req,res)=>{
    res.status(404).json({message : "The page is Not found"})
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))