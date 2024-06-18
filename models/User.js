const {Schema, model} = require('mongoose')

const userSchema  = new Schema (
    {
        username : {
            type: String,
            unique:false,
            required: true,
            trim: true,
        },
        email : {
            type: String,
            required: true,
            unique: false,

        }
        
    }
)

const User = model('user' , userSchema);

module.exports= User;