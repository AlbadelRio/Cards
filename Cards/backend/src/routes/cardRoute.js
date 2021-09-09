const { Router } = require('express');
const passport = require('passport');
const { createCard, updateCardById, deleteCard } = require('../controllers/cardController');

const cardRouter = new Router();

cardRouter
  .route('/')
  .all(passport.authenticate('jwt', { session: false }));

cardRouter
  .route('/:cardId')
  .all(passport.authenticate('jwt', { session: false }))
  .put(updateCardById)
  .delete(deleteCard);
cardRouter
  .route('/:packCardId')
  .post(createCard);
module.exports = cardRouter;
