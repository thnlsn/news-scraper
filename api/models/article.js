const mongoose = require('mongoose');
const Schema = mongoose.Schema;
S;

const articleSchema = new Schema({
  _id: ObjectId,
  headline: String,
  summary: String,
  url: String
});

module.exports = articleSchema;
