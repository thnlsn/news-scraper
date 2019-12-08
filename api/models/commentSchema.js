const mongoose = require('mongoose');
const Schema = mongoose.Schema;
S;

const commentSchema = new Schema({
  _id: ObjectId,
  text: String
});

module.exports = commentSchema;
