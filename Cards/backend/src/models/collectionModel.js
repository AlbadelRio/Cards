const {model,Schema} = require('mongoose');

const collectionSchema = Schema({
    title:String,
    image:String,
    subject:String,
    user:{ type: Schema.Types.ObjectId, ref: 'User' },
    cardCollection:[{
        card:{type:Schema.Types.ObjectId, ref: 'Card'}
    }]
});

module.exports = model('Collection', collectionSchema);