const { Router } = require('express');
const passport = require('passport');
const {
  createPackCard,
  deletePackCard,
  findRandomBySubject,
  updateUserPackCard,
  findAllPackCards,
  findPackCardById
} = require('../controllers/packCardController');

const packCardRouter = new Router();

packCardRouter
  .route('/')
  .all(passport.authenticate('jwt', { session: false }))
  .post(createPackCard)
  .get(findAllPackCards);

packCardRouter
  .route('/:packCardId')
  .all(passport.authenticate('jwt', { session: false }))
  .delete(deletePackCard)
  .put(updateUserPackCard)
  .get(findPackCardById);
packCardRouter
  .route('/:subject')
  .all(passport.authenticate('jwt', { session: false }))
  .get(findRandomBySubject);

module.exports = packCardRouter;
