function dataChanges(body, userData, userFound) {
  switch (body.type) {
    case 'cardsAdquired':
      userData.cardsAdquired.push(body.cardId);
      userFound.save();
      break;

    case 'difficultCards':
      userData.difficultCards.push(body.cardId);
      userFound.save();
      break;
    default:
      break;
  }
}

module.exports = { dataChanges };
