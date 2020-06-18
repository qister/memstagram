const {Router} = require('express')
const Meme = require('../models/Meme')
const router = Router()
const multer = require('multer')


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


const storage = multer.diskStorage({
    
    destination: function (req, file, cb) {
    cb(null, 'memes')
    },

    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
    }
})

var upload = multer({ storage: storage }).single('file')

let id = 8

router.post('/addpic', (req, res) => {
     
    upload(req, res, async (err) => {

            if (err instanceof multer.MulterError) {
                return res.status(500).json(err)
            } else if (err) {
                return res.status(500).json(err)
            }

        const body = JSON.stringify(req.body, null, 2)
        const trueBody = JSON.parse(body)

        const meme = new Meme({
            id: id++,
            author: trueBody.author,
            description: trueBody.description,
            imgUrl: req.file.path,
            liked: false,
            created: Date.now()
        })

        await meme.save()
    
        return res.status(200).send(req.file)

    })

});

router.get('/show', async(req, res) => {
    console.log(req.query.id);
    
    try {
        const meme = await Meme.find({author: 'James'})
        res.status(200).json(meme)
    }  catch(e) {
        console.log('Error: ', e.message);
        
    }
})


// router.post('/addpic', async (req, res) => {
//     try {
//         console.log(req.file);
//         res.status(201).send(req.file)
//     } catch(e) {
//         console.log(e.message);
//     }
// })

module.exports = router