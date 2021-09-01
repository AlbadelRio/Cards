const { Router } = require('express');
const passport = require('passport');
const {
  getAllUsers, updatedUserById, getUserById, deleteUser, updateUserData
} = require('../controllers/userController');

const userRouter = new Router();

userRouter
  .route('/')
  .get(getAllUsers);

userRouter
  .route('/:userId')
  .all(passport.authenticate('jwt', { session: false }))
  .put(updatedUserById)
  .get(getUserById)
  .delete(deleteUser)
  .post(updateUserData);

module.exports = userRouter;
