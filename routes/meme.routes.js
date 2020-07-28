const { Router } = require("express");
const Meme = require("../models/Meme");
const router = Router();
const multer = require("multer");

router.get("/", async (req, res) => {
  try {
    const meme = await Meme.find({ author: "James" });
    res.status(200).json(meme);
  } catch (e) {
    console.log("Error: ", e.message);
  }
});

router.post("/add", async (req, res) => {
  try {
    const author = req.body.author;

    const meme = new Meme({
      id: 7,
      author: author,
      liked: false,
    });

    await meme.save();
    res.status(201).json(meme);
  } catch (e) {
    console.log(e.message);
  }
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

var upload = multer({ storage: storage }).single("file");

router.post("/addpic", (req, res) => {
  console.log("req body", req.body);

  upload(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }

    const body = JSON.stringify(req.body, null, 2);
    const trueBody = JSON.parse(body);

    const allMemes = await Meme.find({});
    const nextId = allMemes.length;

    const meme = new Meme({
      id: nextId,
      author: trueBody.author,
      description: trueBody.description,
      imgUrl: req.file.path,
      liked: false,
      created: Date.now(),
    });

    await meme.save();

    return res.status(200).send(req.file);
  });
});

router.get("/show", async (req, res) => {
  try {
    const meme = await Meme.find({ id: req.query.id });

    res.status(200).json(meme);
    // console.log(res);
  } catch (e) {
    console.log("Error: ", e.message);
  }
});

router.get("/getlist", async (req, res) => {
  try {
    const allMemes = await Meme.find({});

    res.status(200).json(allMemes);
  } catch (e) {
    console.log("Error", e.message);
  }
})

router.post("/likememe", async (req, res) => {
  try {
    console.log('meme to like: ', req.body)
    const {id, email} = req.body
    const memeBefore = await Meme.findOne({id: id})
    if (memeBefore.likedBy.some(user => user === email)) {
      await Meme.updateOne({id: id}, {likedBy: memeBefore.likedBy.filter(user => user !== email)})
      res.status(201).json(`Meme with id ${id} was disliked`)
    } else {
      await Meme.updateOne({id: id}, {likedBy: [...memeBefore.likedBy, email]})
      res.status(201).json(`Meme with id ${id} was liked`)
    }
  } catch (e) {
    console.log("Error", e.message);
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

module.exports = router;
