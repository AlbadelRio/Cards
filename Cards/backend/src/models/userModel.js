const { model, Schema } = require('mongoose');

const userSchema = Schema({
  username: String,
  email: String,
  location: String,
  image: String,
  info: [{
    packTittle: String,
    cardsAdquired: [{
      packId: 'String',
      cards: []
    }],
    difficultCards: [{
      packId: 'String',
      cards: []
    }],
    stats: [{
      date: Date,
      timePlayed: Number,
      percentage: Number
    }]

  }]
});

module.exports = model('User', userSchema);
