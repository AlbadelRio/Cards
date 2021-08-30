const {Router} = require('express');
const {createUser, getAllUsers,updatedUserById,getUserById,deleteUser} = require ('../controllers/userController');

const userRouter = new Router();

userRouter
    .route('/')
    .get(getAllUsers)
    .post(createUser);

userRouter
    .route('/:userId')
    .put(updatedUserById)
    .get(getUserById)
    .delete(deleteUser)

module.exports = userRouter;