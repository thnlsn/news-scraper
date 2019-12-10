// MONGOOSE SCHEMA FOR ARTICLES (INDICATES WHAT TO SAVE TO TABLE)

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const articleSchema = new Schema({
  headline: {
    type: String,
    required: true,
    unique: true // Unique makes it so tht we are not scraping the same articles over and over into out database
  },
  summary: {
    type: String,
    required: true
  },
  date: String,
  saved: {
    type: Boolean,
    default: false
  }
  /*   url: String */
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
