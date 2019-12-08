const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const articleSchema = new Schema({
  _id: ObjectId,
  headline: String,
  summary: String,
  url: String
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
