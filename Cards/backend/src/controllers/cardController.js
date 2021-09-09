/* eslint-disable no-underscore-dangle */
const Card = require('../models/cardModel');
const PackCard = require('../models/packCardModel');

function handleError(error, status = 404) {
  this.status(status);
  this.send(error.message);
}

async function createCard({ params: { packCardId }, body }, res) {
  try {
    console.log('hola');
    const createdCard = await Card.create(body);
    console.log(createCard);
    const foundPackCard = await PackCard.findById(packCardId);
    console.log(foundPackCard);
    foundPackCard.packCards.push(createdCard._id);
    console.log('foundPackCard', foundPackCard);
    foundPackCard.save();
    res.json(createdCard);
    console.log('me voy al catch');
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
