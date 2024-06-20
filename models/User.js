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

        },
        thoughts :[
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],    
    },
        {
            toJSON: {
                virtuals: true,
                getters: true,
            },
       
        }     // id:false,
)

const User = model('user' , userSchema);

module.exports= User;