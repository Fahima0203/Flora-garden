const mongoose = require("mongoose")

const signupSchema = mongoose.Schema({
  name: String,  
  uname: String,
  email: String,
  password: String
  });


module.exports = signupModel = mongoose.model("SignupDetails", signupSchema)