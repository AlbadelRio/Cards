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

module.exports ={
    createUser,
    getAllUsers
};