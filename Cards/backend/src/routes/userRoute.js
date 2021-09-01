const { Router } = require('express');
const {
  createUser, getAllUsers, updatedUserById, getUserById, deleteUser, updateUserData
} = require('../controllers/userController');

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
  .post(updateUserData);

module.exports = userRouter;
