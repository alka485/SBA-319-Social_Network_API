const connection = require('../config/connection.mjs');
const {User, Thought} = require('../models');
const {getRandomName, email, getRandomThought } = require('./data');

connection.on('error' , (err) => err);