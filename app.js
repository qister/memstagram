const express = require('express')
const path = require('path')

const mongoose = require('mongoose')
const config = require('config')
const Meme = require('./models/Meme')
const app = express()

const PORT = config.get('port') || 5000
const URI = config.get('mongoUri')

app.use(express.json({extended: true}))

app.use('/api/meme', require('./routes/meme.routes'))

async function start() {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log('монга подключена ', new Date().toLocaleDateString());

        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch(e) {
        console.log('Server error: ', e.message);
        process.exit(1)
        
    }
}


start()