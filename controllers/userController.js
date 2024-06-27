const User = require('../models/User');
const router = require('express').Router();
const{body,validationResult} = require('express-validator')

module.exports = {
    getUsers(req, res) {
        User.find() 
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
    getSingleUser(req,res) {
        User.findOne({_id:req.params.userId})
        .select('-_v')
        .then((user) => 
            !user
             ? res.status(404).json({message: 'No user with that ID'})
             : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    //create a new user
    createUser(req, res) {
        User.create(req.body)
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => res.status(500).json(err));
    },

   



    //Delete User

    deleteUser(req,res) {
        User.findOneAndRemove({_id: req.params.userId})
        .then((user) => 
        !user
         ?res.status(404).json({message: 'No user with this id!'})
         :User.findOneAndUpdate(
            { User: req.params.userId },
            { $pull: {users: req.params.userId} },
            {new: true }
         )
        )
        .then ((user) => 
        !user
         ? res
             .status(404)
             .json({message: 'User created without userid!'})
          : res.json({message: 'User successfully deleted!'})   
    )
    .catch((err) => res.status(500).json(err))
    },

    //Update User
  updateUser(req,res){
    User.findOneAndUpdate(
        {_id:req.params.userId},
        { $set:req.body },
        { runValidators:true, new: true}
    )
    .then((user) =>
    !user
      ? res.status(404).json({ message: 'No user with this id!' })
      : res.json(user)
    )
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      })
},

// Add User friend
addUserFriend(req,res) {
  User.findOneAndUpdate(
    { _id: req.params.userId},
    { $addToSet: {friends : req.params.friendId}},
    {runValidators: true, new: true}
  )
  .then((user) => 
    !user
    ? res.status(404).json({ message : 'No friend with this id!' })
    : res.json(user)
  
  )
  .catch((err) => {console.log(err);res.status(500).json(err)});
},

// Remove User Friend
removeUserFriend(req,res){
  User.findOneAndUpdate(
    { _id: req.params.userId},
    { $pull: { friends: { friendId: req.params.friendId } } },
    { runValidators: true, new: true }
  )
    .then((user) =>
      !user
        ? res.status(404).json({ message: 'No friends with this id!' })
        : res.json({message : 'Friend record sucessfully deleted'})
    )
    .catch((err) => res.status(500).json(err));
},
};