const { Router } = require('express');
const {
  createPackCard,
  deletePackCard,
  findRandomBySubject,
  updatePackCard,
  findAllPackCards,
  findPackCardById
} = require('../controllers/packCardController');

const packCardRouter = new Router();

packCardRouter
  .route('/')
  .post(createPackCard)
  .get(findAllPackCards);

packCardRouter
  .route('/:packCardId')
  .delete(deletePackCard)
  .post(updatePackCard)
  .get(findPackCardById);
packCardRouter
  .route('/:subject')
  .get(findRandomBySubject);

module.exports = packCardRouter;
