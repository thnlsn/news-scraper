// CONTROLLER FOR ARTICLES (CRUD FUNCTIONALITY)

let scrape = require('../scripts/scrape');
let createDate = require('../scripts/date');

let Article = require('../models/Article');

// run scrape function and save the data to articles collection in the mongo database
module.exports = {
  // this entire function is a parameter for the scrape function and is run at the end of recieving the scrape info
  fetch: cb => {
    scrape(data => {
      let articles = data;
      for (let i = 0; i < articles.length; i++) {
        articles[i].date = createDate();
        articles[i].saved = false;
      }

      // mongo function takes in an array of articles from the scrape function and inserts them into the database
      Article.collection.insertMany(
        articles,
        { ordered: false },
        (err, docs) => {
          cb(err, docs);
        }
      );
    });
  },
  delete: (query, cb) => {
    Article.remove(query, cb);
  },
  read: (query, cb) => {
    Article.find(query)
      .sort({ _id: -1 }) // sorts by most recent to least recent
      .exec((err, doc) => {
        // exec is used when we have a dynamically created query
        // once done, pass all documents to callback
        cb(doc);
      });
  },
  update: (query, cb) => {
    Article.update(
      { _id: query._id },
      {
        $set: query
      },
      {},
      cb
    );
  }
};
