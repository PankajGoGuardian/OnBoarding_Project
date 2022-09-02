const mongoose = require("mongoose")
require("./config")

const schema = mongoose.Schema({
    "role": String,
    "name":String,
    "userId": String,
    "userName": String,
    "status": String
})

module.exports = mongoose.model("userInfo", schema)