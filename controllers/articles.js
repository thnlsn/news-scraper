// CONTROLLER FOR ARTICLES (CRUD FUNCTIONALITY)

let scrape = require('../scripts/scrape');
let date = require('../scripts/date');

let Article = require('../models/Article');

module.exports = {
  fetch: cb => {
    scrape(data => {
      let articles = data;
      for (let i = 0; i < articles.length; i++) {
        articles[i].date = createDate();
        articles[i].saved = false;
      }
    });
  }
};
