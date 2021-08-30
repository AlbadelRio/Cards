const {model,Schema} = require('mongoose');

const collectionSchema = Schema({
    title:String,
    image:String,
    subject:String,
    Public:Boolean,
    user:{ type: Schema.Types.ObjectId, ref: 'User' },
    cardCollection:[{
        collection:[{ type:Schema.Types.ObjectId, ref: 'Cards' }]
    }]
});

module.exports = model('Collection', collectionSchema);