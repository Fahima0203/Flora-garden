const express = require("express")
const router = express.Router();
const Note = require("../models/nodeModel")

router.route("/create").post((req, res) =>
{
  const plantName = req.body.plantName;
  const image = req.body.image
  const newNote = new Note({
    plantName,
    image, 
    desc
  });
  newNote.save();
})

module.exports = router;