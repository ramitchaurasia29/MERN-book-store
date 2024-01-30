import express from 'express';
import { PORT, mongoDBURL} from './config.js';
import mongoose, { Mongoose } from 'mongoose';
import cors from 'cors';

import booksRoute from './routes/booksRouter.js'

const app=express();
// Middleware for handling CORS POLICY
app.use(cors());

//Middleware for parsing request body
app.use(express.json());

app.use('/books',booksRoute);

mongoose.connect(mongoDBURL).then(()=>{
    console.log("connected to database");
    app.listen(PORT,()=>{
    console.log(`server ok running on ${PORT}`);
})
}).catch((err)=>{
    console.log(err);
})




app.get('/',(req,res)=>{
    console.log(req);
    return res.status(234).send('welcome')
});

