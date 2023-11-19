import mongoose from "mongoose";

const userSchema = mongoose.Schema(
{
    name:{
        type: String,
        require: true,
    },

    email:{
        type: String,
        require: true,
    },
    sex:{
        type: String,
        require: true,
    },
    age:{
        type: Number,
        require: true,
    },

}
)








export const Users = mongoose.model('User', userSchema);