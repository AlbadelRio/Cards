const { model, Schema } = require('mongoose');

const cardSchema = Schema({
    title:String,
    image_url:String,
    question:String,
    answer:String,
    acquiredKnowledge:Boolean
});

module.exports= model('Card', cardSchema );