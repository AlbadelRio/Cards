const {Router} = require('express');
const {createUser, getAllUsers} = require ('../controllers/userController');

const userRouter = new Router();

userRouter
    .route('/')
    .get(getAllUsers)
    .post(createUser);

module.exports = userRouter;