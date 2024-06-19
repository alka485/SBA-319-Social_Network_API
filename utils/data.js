const username =[
    'sal',
    'Lernantino',
    'Amiko',
    'Jordan',
    'Blake',
 ];

 const email = [
  'sal@hotmail.com',
  'lernantino@gmail.com',
  'amiko2k20@aol.com',
  'jordan99@msn.com',
  'the_blake@yahoo.com',
 ];

 const possibleThoughts = [
   'Whatever you are,be a good one.',
   'You do not find the happy life.You make it',
   'You are stronger than you think',
   'If you want to become big, stop thinking small.',
   'One small thought in the morning can change your whole day',
 ];

 const possibleReactions =[
         'Smile',
         'Like',
         'Angry',
         'Unlike',
         'Hate'
 ];

 // Get a random item given an array

 const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

 //Get Random Name

 const getRandomName = (int) => {
    if(int === 1){
        return getRandomArrItem(username);
    }
    let results = [];
    for(let i = 0; i < int; i++) {
        results.push({
            userId:getRandomArrItem(username),
            email:getRandomArrItem(email),
            username:getRandomArrItem(username),
            thoughts:[...getRandomThought(5),]
        });
    }
    return results;
 }

 // Get a random thought

 const getRandomThought = (int) => {
    if(int === 1) {
        return getRandomArrItem(possibleThoughts);
    }
    let results = [];
    for(let i = 0; i < int; i++) {
        results.push({
            thoughtText  : getRandomArrItem(possibleThoughts),
            username: getRandomName(),
            reactions:[...getRandomReaction(3)],
        });
    }
    return results;
 }

 //Get a Random Reaction

 const getRandomReaction = (int) => {
    if(int === 1) {
        return getRandomArrItem(possibleReactions);
    }
    let results = [];
    for(let i = 0; i < int; i++) {
        results.push({
            reactionBody : getRandomArrItem(possibleReactions),
            username: getRandomName(),
        });
    }
    return results;
 };

 // Export the functions for use in seed.js

 module.exports = {getRandomName, email, getRandomThought,getRandomReaction};
 