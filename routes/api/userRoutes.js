const router = require('express').Router();
const{body,validationResult} = require('express-validator')
const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser,
    addUserFriend,
    removeUserFriend
} = require('../../controllers/userController');

//   /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addUserFriend);

router.route('/:userId/friends/:friendId').delete(removeUserFriend);

module.exports = router;