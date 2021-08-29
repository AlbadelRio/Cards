const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = Schema({
  email: String,
  location: String,
  cardCollections:[{
      Cards: {type: Schema.Types.ObejectId, ref: 'Cards'}
  }] 
});
module.exports = mongoose.model('User', userSchema);
