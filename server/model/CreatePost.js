

const mongoose = require("mongoose")

let postSchema = mongoose.Schema({
    file:{type:String}
})

const post = mongoose.model("post", postSchema)

module.exports = post