import express from 'express'
import {Users} from '../models/user.js'


const router = express.Router();


router.post('/', async (request, response) =>{
    try {
        if(
            !request.body.name ||
            !request.body.email ||
            !request.body.sex ||
            !request.body.age 
            ){
            return response.status(400).send({
                message: 'send all required fields: name, age, favoriteFoods'
            })
        }
        const newUsers ={
            name: request.body.name,
            email: request.body.email,
            sex: request.body.sex,
            age: request.body.age
        }

            const user = await Users.create(newUsers)
        return response.status(200).send(user)
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
})


//routes to GET all users 

router.get('/', async(request, response) =>{
    try {
        const users = await Users.find();
        return response.status(200).json({
            count : books.length,
            data : books
        })
    } catch (error) {
        console.log(error.message)
        return response.status(500).send({message: error.message});
    }
})


//routes to get a single book

router.get('/:id', async(request, response) =>{
    try {

        const {id} = request.params;
            
        const user = await Users.findById(id);
        return response.status(200).json(book)
    } catch (error) {
        console.log(error.message)
        return response.status(500).send({message: error.message});
    }
})


//routes to update user

router.put('/:id', async (request, response)=>{
    try {
        if(
            !request.body.name ||
            !request.body.email ||
            !request.body.sex ||
            !request.body.age 
        ) {
            return response.status(400).send({
                message: 'send all required fields'
            });
        }
        const {id} =request.params;
        const result = await Users.findByIdAndUpdate(id, request.body);

        if(!result){
            return response.status(400).json({message: 'user not found'})
        }
        return response.status(200).send({message: 'user updated successfully'})
    } catch (error) {
        console.log(error.message)
        response.status(500).send({message:error.message})
    }
})

//routes to delete a user
router.delete('/:id', async (request, response) =>{
    try {

        const {id} =request.params;

        const result = await Users.findByIdAndDelete(id);
        if(!result){
            return response.status(404).json({message: 'Book not found'})
        }
        return response.status(200).send({message: 'Book deleted successfully'})
    } catch (error) {
        console.log(error.message)
        response.status(500).send({message:error.message})
    }
})

export default router;