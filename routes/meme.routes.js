const {Router} = require('express')
const Meme = require('../models/Meme')
const router = Router()

router.get('/', async(req, res) => {
    try {
        const meme = await Meme.find({author: 'James'})
        res.status(200).json(meme)
    }  catch(e) {
        console.log('Error: ', e.message);
        
    }
})

router.post('/add', async (req, res) => {
    try {
        const author = req.body.author

        const meme = new Meme({
            id: 7,
            author: author,
            liked: false
        })

        await meme.save()
        res.status(201).json(meme)
        
    } catch(e) {
        console.log(e.message);
    }
})

module.exports = router