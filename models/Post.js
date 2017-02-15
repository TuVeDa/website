
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  body: {
    type: String
  }
});

var Post = mongoose.model("Post", PostSchema);
module.exports = Post;
