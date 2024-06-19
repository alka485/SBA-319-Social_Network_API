const connection = require('../config/connection.mjs');
const {User, Thought} = require('../models');
const {getRandomName, email, getRandomThought } = require('./data');

connection.on('error' , (err) => err);

// Creates a connection to mongodb
connection.once('open', async () => {
    console.log('connected');
    // Delete the entries in the collection
    await User.deleteMany({});
    await Thought.deleteMany({});

    const thought = getRandomThought(5);
    const usernames = getRandomName(5);
    const emails = email;
    console.log(emails);

    
  // Wait for the thoughts to be inserted into the database
    await Thought.collection.insertMany(thought);
    var thoughts = await Thought.find();

    var users = [];

    for (let i = 0; i < 5; i++) {
        users.push({
            usernames: usernames[i],
            email : emails[i],
            thoughts:[thoughts[i]._id]
        })

    }
    
  // Wait for the users to be inserted into the database
    await User.collection.insertMany(users);
  
    // Log out a pretty table for users and thoughts
    console.table(users);
    console.table(thought);
    console.info('Seeding complete!');
    process.exit(0);
})