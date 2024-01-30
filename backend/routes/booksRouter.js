import express from 'express';
import { Book } from '../models/bookModel.js';

const router=express.Router();

//Route for new book
router.post('/', async(req,res)=>{
    try {
        if(!req.body.title || !req.body.author ||  !req.body.publishYear ){
            return res.status(400).send({message:"all fields are required"})
        }
        const newBook={
            title:req.body.title,
            author:req.body.author,
            publishYear:req.body.publishYear,
        }
        const book=await Book.create(newBook);
        return res.status(201).send(book);
        

    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message});
    }
})
// Route for finding all books
router.get('/', async(req,res)=>{
    try {
        const books=await Book.find({})
        
        return res.status(200).send({
            count:books.length,
            data:books
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message});
    }
})

// Route for finding one books
router.get('/:id', async(req,res)=>{
    try {
        const {id}=req.params;
        const book=await Book.findById(id)
        if(!book){
            return res.status(404).send({message:"book not found"})
        }
        
        return res.status(200).send(book);

    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message});
    }
})
// Route for updating a book by an id
router.put('/:id', async(req,res)=>{
    try {
        const {id}=req.params;
        const update=await Book.findByIdAndUpdate(id,req.body);

        if(!update || ! req.body.title || !req.body.author ||  !req.body.publishYear ){
            return res.status(404).send({message:"Book not found"})
        }
        
        return res.status(200).send({message:"Book updated succesfully"});

    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message});
    }
})
// Route for delete a book by id
router.delete('/:id', async(req,res)=>{
    try {
        const {id}=req.params;
        const update=await Book.findByIdAndDelete(id);

        if(!update ){
            return res.status(404).send({message:"Book not found"})
        }
        
        return res.status(200).send({message:"Book deleted succesfully"});

    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message});
    }
})

export default router;