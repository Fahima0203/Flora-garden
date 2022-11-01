const mongoose = require("mongoose")

const notesSchema = mongoose.Schema({
    plantName: String,
    image: String,
    desc: String
    // image:{
    //     data: Buffer,
    //     contentType: String
    // }    
});


module.exports = ImageModel = mongoose.model("Image", notesSchema)