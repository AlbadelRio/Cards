const { Router } = require('express');
const{ createCard, updateCardById, deleteCard} = require ('../controllers/cardController');


const cardRouter = new Router();

cardRouter
    .route('/')
    .post(createCard);
    
cardRouter
    .route('/:cardId')
    .put(updateCardById)
    .delete(deleteCard);

module.exports= cardRouter;