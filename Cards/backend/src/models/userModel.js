const { model, Schema } = require('mongoose');

const userSchema = Schema({
  username: String,
  email: String,
  password: String,
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
function isValidPassword(password) {
  return password === this.password;
}
userSchema.methods.isValidPassword = isValidPassword;

module.exports = model('User', userSchema);
