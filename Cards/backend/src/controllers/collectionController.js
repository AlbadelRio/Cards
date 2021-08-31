const { Collection } = require('mongoose');
const collection = require('../models/collectionModel');

function handleError(error, status = 500) {
    this.status(status);
    this.send(error.message);
}

async function createCollection({body},res) {
    try {
        const newCollection = await Collection.create(body);
        return res.json(newCollection);
    } catch (error) {
       handleError(res,error, 404);
    }
}

async function getAllCollections({ query }, res) {
    const 
}


module.exports = {createCollection , getAllCollections}