const { model, Schema } = require('mongoose');

const packCardSchema = Schema({
  title: String,
  image: String,
  subject: String,
  public: Boolean,
  results: {
    timesPlayed: Number,
    stat: Number
  },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  packCards: [{ type: Schema.Types.ObjectId, ref: 'Cards' }]

});

module.exports = model('PackCard', packCardSchema);
