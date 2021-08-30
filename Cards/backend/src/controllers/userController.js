const User = require('../models/userModel');

function handleError(error, status) {
    this.status(status);
    this.send(error.message);
}

async function createUser({body}, res){
    try {
        const createdUser= await User.create(body);
        res.json(createdUser);
    } catch (error) {
        handleError(error, status = 500);
    }
}

async function getAllUsers({query}, res){
    try {
        const users= await User.find(query);
        res.json(users);
    } catch (error) {
        handleError(error, status = 500);
    }
}

async function updatedUserById ({ params: {userId}, body}, res){
    try {
        const dataToUpdate = body;
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            dataToUpdate,
            {  new: true }
            );
        res.json(updatedUser);
    } catch (error) {
        handleError(error, status = 404);
    }
}
async function getUserById( { params: { userId } }, res){
    try {
        const user= await User.findById(userId);
        res.json(user);
    } catch (error) {
        handleError(error,status= 404);
    }

}

async function deleteUser({ params: { userId } }, res){
    try {
        await User.findByIdAndDelete(userId);
        res.json('The user has been deleted');
    } catch (error) {
        handleError(error,status= 404);
    }
}
module.exports = {
    createUser,
    getAllUsers,
    updatedUserById,
    getUserById,
    deleteUser
}; 