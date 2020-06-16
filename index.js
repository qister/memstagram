const express = require('express');
const mongoose = require('mongoose')
const { Meme } = require('./models/Meme');

const app = express();

mongoose.connect(`mongodb+srv://qister:1q2w3e4r@cluster0-slbsc.azure.mongodb.net/test?retryWrites=true&w=majority`)
  .then(() => console.log('монга коннектед'));

// site.com/rjig/tnjgt?a=4&b=7

//https://robomongo.org/

Meme.find({}, (_, res) => {
  console.log('!!!', res)
});

// https://github.com/axios/axios

// http://expressjs.com/en/api.html#res.send
app.get('/', (request, response) => {
  Meme.find({}, (err, res) => {
    response.status(200).json(res);
  });
});

// app.post('/', (request, response) => {
//   const { a, b } = request.body;
//   response.status(200).send(a + b);
// });

app.listen(4567, () => console.log('сервер стартед'));

// https://mongoosejs.com/
// mongodb+srv://<username>:<password>@cluster0-zntym.mongodb.net/<dbname>?retryWrites=true&w=majority

