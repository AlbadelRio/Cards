/* eslint-disable no-underscore-dangle */
const Card = require('../models/cardModel');
const PackCard = require('../models/packCardModel');

function handleError(error, status = 404) {
  this.status(status);
  this.send(error.message);
}

async function createCard({ params: { packCardId }, body }, res) {
  try {
    const createdCard = await Card.create(body);
    const foundPackCard = await PackCard.findById(packCardId);
    foundPackCard.packCard.push(createdCard._id);
    foundPackCard.save();
    res.json(createdCard);
  } catch (error) {
    handleError.call(res, error, 500);
  }
}

async function updateCardById({ params: { cardId }, body }, res) {
  try {
    const dataToUpdate = body;
    const updatedCard = await Card.findByIdAndUpdate(
      cardId,
      dataToUpdate,
      {
        new: true,
        useFindAndModify: false
      }
    );
    res.json(updatedCard);
  } catch (error) {
    handleError.call(res, error);
  }
}

async function deleteCard({ params: { cardId } }, res) {
  try {
    await Card.findByIdAndDelete(cardId);
    res.send('The user has been deleted');
  } catch (error) {
    handleError.call(res, error);
  }
}
module.exports = {
  createCard,
  updateCardById,
  deleteCard
};
