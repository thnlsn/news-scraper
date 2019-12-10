// MONGOOSE SCHEMA FOR COMMENTS (INDICATES WHAT TO SAVE TO TABLE)

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const commentSchema = new Schema({
  _headlineId: {
    type: Schema.Types.ObjectId,
    ref: 'Headline'
  },
  date: String,
  commentText: String
  /*   url: String */
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
