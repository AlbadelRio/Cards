const Card = require('../models/userModel');

function handleError(error, status = 500) {
    this.status(status);
    this.send(error.message);
}

async function createCard({body}, res){
    try {
        const createdCard= await Card.create(body);
        res.json(createdCard);
    } catch (error) {
        handleError.call(res, error);
    }
}

async function updateCardById ({ params: { CardId }, body}, res){
    try {
        const dataToUpdate = body;
        const updatedCard = await Card.findByIdAndUpdate(
            cardId,
            dataToUpdate,
            {  new: true }
            );
        res.json(updatedCard);
    } catch (error) {
        handleError.call(res, error, 404);
    }
}

module.exports = {
    createCard,
    updateCardById,

}