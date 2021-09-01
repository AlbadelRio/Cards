const { model, Schema } = require('mongoose');

const userSchema = Schema({
  username: String,
  email: String,
  location: String,
  image: String,
  data: [{
    packId: String,
    cardsAdquired: [String],
    difficultCards: [String],
    stats: [{
      date: Date,
      timePlayed: Number,
      percentage: Number
    }]
  }]
});

module.exports = model('User', userSchema);
