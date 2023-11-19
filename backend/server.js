import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { mongoDBURL } from './connect.js';
// import {Users} from './models/user.js'
import usersRoute from './Routes/usersRoute.js'

const app = express();
dotenv.config();
app.use(express.json)

app.use('/users', usersRoute);

app.get('/', (request, response) =>{
    console.log(request)
    return response.status(234).send('Welcome to khosi page')
})

//Route for creating a new person


// app.listen(process.env.PORT, () => {
//     console.log(`App is listening to Port ${process.env.PORT}`)
// })

mongoose.connect(mongoDBURL)
.then(() => {
    console.log('App is connected to database' )
    app.listen(process.env.PORT, () => {
        console.log(`App is listening to Port ${process.env.PORT}`)
    })
}).catch((error) =>{
    console.log(error)
})

// connectMDB = async () => mongoose.connect(process.env.MONGO_URI)


// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("App connected to database");
//     app.listen(PORT, () => {
//       console.log(`App is listening to port: ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });