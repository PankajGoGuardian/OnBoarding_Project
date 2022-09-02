const mongoose = require("mongoose")
require("./config")

const schema= mongoose.Schema({
    "username":String,
    "classId": String,
    "role": String
})

module.exports = mongoose.model("enrolment", schema)