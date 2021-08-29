const { model, Schema } = require('mongoose');

const userSchema = Schema({
  username:String,
  email: String,
  location: String,
  image:String
});

module.exports = model('User', userSchema);
