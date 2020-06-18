const {Schema, model} = require('mongoose')

const memeSchema = new Schema({
    id: Number,
    author: String,
    description: String,
    imgUrl: String,
    liked: Boolean,
    created: Date
  }
);

module.exports = model('Meme', memeSchema);

