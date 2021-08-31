const { Collection } = require('mongoose');

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

module.exports = { createCollection };
