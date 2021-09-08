function DataChanges(body, userData, userFound) {
  switch (body.type) {
    case 'cardsAdquired':
      userData.cardsAdquired.push(body.cardId);
      userFound.save();
      break;

    case 'difficultCards':
      userData.difficultCards.push(body.cardId);
      userFound.save();
      break;
    case 'stats': {
      const existingDate = userData.stats.find((data) => data.date === body.date);
      if (!existingDate) {
        userData.stats.push(body);
        userFound.save();
      } else {
        existingDate.stats.update(
          {
            $push: { timePlayed: body.time, percentages: body.percentage },
            $sort: { score: -1 }
          }

        );
      } }
      break;
    default:
      break;
  }
}

module.exports = { DataChanges };
