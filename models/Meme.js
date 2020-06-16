const {Schema, model} = require('mongoose')

const memeSchema = new Schema({
    id: Number,
    author: String,
    liked: Boolean
  }
);

module.exports = model('Meme', memeSchema);

