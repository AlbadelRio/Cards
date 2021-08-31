const { Router } = require('express');
const { createPackCard, deletePackCard, findRandomBySubject } = require('../controllers/packCardController');

const packCardRouter = new Router();

packCardRouter
  .route('/')
  .post(createPackCard)
  .get(findRandomBySubject);

packCardRouter
  .route('/:packCardId')
  .delete(deletePackCard);

module.exports = packCardRouter;
