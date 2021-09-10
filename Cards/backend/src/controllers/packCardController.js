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
    const deletedPackCard = await PackCard.findByIdAndDelete(packCardId);
    res.json(deletedPackCard);
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
    const allPackCards = await PackCard.find(query).populate({
      path: 'packCards',
      select: ['question', 'answer']
    });
    res.json(allPackCards);
  } catch (error) {
    handleError.call(res, error);
  }
}
async function findPackCardById({ params: { packCardId } }, res) {
  try {
    const foundPackCard = await PackCard.findById(packCardId)
      .populate({
        path: 'packCards',
        select: ['question', 'answer']
      });
    res.json(foundPackCard);
  } catch (error) {
    handleError.call(res, error);
  }
}
async function updateUserPackCard({ params: { packCardId }, body }, res) {
  try {
    const dataToUpdate = body;
    const updatedPackCard = await PackCard.findById(packCardId);
    updatedPackCard.subscriptors.push(dataToUpdate);
    updatedPackCard.save();
    res.sendStatus(200);
  } catch (error) {
    handleError.call(res, error);
  }
}

module.exports = {
  createPackCard,
  deletePackCard,
  findRandomBySubject,
  updateUserPackCard,
  findAllPackCards,
  findPackCardById
};
