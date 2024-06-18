const {Schema, model} = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText : {

        },
        createdAt: {

        },
        username : {

        }
    }
)

const Thought = model('Thought' , thoughtSchema);

module.exports = Thought;