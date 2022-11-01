const mongoose = require("mongoose")

const loginSchema = mongoose.Schema({
    username: String,
    password: String
  });


module.exports = loginModel = mongoose.model("LoginDetails", loginSchema)