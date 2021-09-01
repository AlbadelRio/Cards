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
    handleError.call(res, error);
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
    const foundPackCard = await PackCard.aggregate([{ $match: { subject } }]).sample(1).populate('cards');
    res.json(foundPackCard);
  } catch (error) {
    handleError.call(res, error);
  }
}
async function findAllPackCards({ query }, res) {
  try {
    const allPackCards = await PackCard.find(query);
    res.json(allPackCards);
  } catch (error) {
    handleError.call(res, error);
  }
}
async function findPackCardById({ params: { packCardId } }, res) {
  try {
    const foundPackCard = await PackCard.findById(packCardId)
      .populate({
        path: 'cards',
        select: ['image_url', 'question', 'answer']
      });
    res.json(foundPackCard);
  } catch (error) {
    handleError.call(res, error);
  }
}
async function updatePackCard({ params: { packCardId } }, res) {
  try {
    const unpdatedPackCard = await PackCard.findByIdAndUpdate(packCardId);
    res.json(unpdatedPackCard);
  } catch (error) {
    handleError.call(res, error);
  }
}

module.exports = {
  createPackCard,
  deletePackCard,
  findRandomBySubject,
  updatePackCard,
  findAllPackCards,
  findPackCardById
};
