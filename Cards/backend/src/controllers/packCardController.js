const PackCard = require('../models/packCardModel');

function handleError(error, status = 500) {
  this.status(status);
  this.send(error.message);
}

async function createPackCard({ body }, res) {
  try {
    const newPackCard = await PackCard.create(body);
    res.json(newPackCard);
  } catch (error) {
    handleError(res, error, 404);
  }
}

async function deletePackCard({ params: { packCardId } }, res) {
  try {
    await PackCard.findByIdAndDelete(packCardId);
    res.json('The packCard has been deleted');
  } catch (error) {
    handleError.call(res, error);
  }
}

async function findRandomBySubject({ query: { subject } }, res) {
  try {
    const foundPackCard = await PackCard.aggregate([{ $match: { subject } }]).sample(1);
    res.json(foundPackCard);
  } catch (error) {
    handleError.call(res, error);
  }
}
module.exports = { createPackCard, deletePackCard, findRandomBySubject };
