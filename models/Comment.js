// MONGOOSE SCHEMA FOR COMMENTS (INDICATES WHAT TO SAVE TO TABLE)

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const commentSchema = new Schema({
  _id: ObjectId,
  text: String
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
