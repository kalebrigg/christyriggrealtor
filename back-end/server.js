const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/selfies', {
  useNewUrlParser: true
});

// Configure multer so that it will upload to '../front-end/public/images'
const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/assets/images/selfies/',
  limits: {
    fileSize: 10000000
  }
});

// Create a scheme for items in the museum: a title and a path to an image.
const itemSchema = new mongoose.Schema({
  title: String,
  path: String,
  description: String,
});

const storySchema = new mongoose.Schema({
  author: String,
  story: String,
});

// Create a model for items in the museum.
const Item = mongoose.model('Item', itemSchema);
const Story = mongoose.model('Story', storySchema);

// Upload a photo. Uses the multer middleware for the upload and then returns
// the path where the photo is stored in the file system.
app.post('/api/photos', upload.single('photo'), async (req, res) => {
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/assets/images/selfies/" + req.file.filename
  });
});

// // Create a new item in the selfies collection: takes a title and a path to an image.
app.post('/api/items', async (req, res) => {
  const item = new Item({
    title: req.body.title,
    path: req.body.path,
    description: req.body.description
  });
  try {
    await item.save();
    res.send(item);
  } catch (error) {
//    console.log(error);
    res.sendStatus(500);
  }
});
// // Create a new story in the stories collection
app.post('/api/stories', async (req, res) => {
  const item = new Story({
    author: req.body.author,
    story: req.body.story,
  });
  try {
    console.log("caught in backend");
    await item.save();
    res.send(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Get a list of all of the items in the selfies db.
app.get('/api/items', async (req, res) => {
  try {
    let items = await Item.find();
    res.send(items);
  } catch (error) {
  //  console.log(error);
    res.sendStatus(500);
  }
});

// Get a list of all of the items in the selfies db.
app.get('/api/stories', async (req, res) => {
  try {
    let items = await Story.find();
    res.send(items);
  } catch (error) {
  //  console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/items/:id', async (req, res) => {
  try {
    await Item.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
  //  console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/items/:id', async (req, res) => {
  try {
    //console.log(req.params.id);
    let item = await Item.findOne({
      _id: req.params.id
    });
    //console.log(item);
     item.title = req.body.title;
     item.save();
     res.sendStatus(200);
  } catch (error) {
  //  console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
