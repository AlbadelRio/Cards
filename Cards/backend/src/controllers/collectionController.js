const Collection = require('../models/collectionModel');

function handleError(error, status = 500) {
  this.status(status);
  this.send(error.message);
}

async function createCollection({ body }, res) {
  try {
    const newCollection = await Collection.create(body);
    res.json(newCollection);
  } catch (error) {
    handleError(res, error, 404);
  }
}

async function deleteCollection({ params: collectionId }, res) {
  try {
    await Collection.findByIdAndDelete(collectionId);
    res.json('The collection has been deleted');
  } catch (error) {
    handleError.call(res, error);
  }
}
module.exports = { createCollection, deleteCollection };
