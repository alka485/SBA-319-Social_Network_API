const {Schema, model} = require('mongoose');
const Reaction = require('./Reaction')

const thoughtSchema = new Schema(
    {
        thoughtText : {
            type:String,
            required: true,
            maxlength: 280,

        },
        createdAt: {
            type:Date,
            default: Date.now,

        },
        username : {
            type: String,
            required : true,
        },
        reactions: [Reaction],
    },
    {
        toJSON: {
            virtuals: true,
        },
        //id: false,
       } 
)

const Thought = model('Thought' , thoughtSchema);

module.exports = Thought;