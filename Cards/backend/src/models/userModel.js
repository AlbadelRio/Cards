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
      date: { type: Date, default: new Date() },
      timePlayed: [Number],
      percentage: [Number]
    }]
  }]
});

module.exports = model('User', userSchema);
