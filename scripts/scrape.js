// SCRAPE SCRIPT

let axios = require('axios');
let cheerio = require('cheerio');
let fs = require('fs');

const scrape = cb => {
  axios.get(`https://techcrunch.com/`).then(
    response => {
      if (response.status === 200) {
        const html = response.data;
        const $ = cheerio.load(html);
        let articleList = [];

        $('.post-block').each(function(i, elem) {
          articleList[i] = {
            headline: $(this)
              .find('.post-block__title__link')
              .text()
              .trim(),
            summary: $(this)
              .find('.post-block__content')
              .text()
              .trim(),
            author: $(this)
              .find('span.river-byline__authors')
              .text()
              .trim(),
            ArticleUrl: $(this)
              .find('.post-block__title__link')
              .attr('href')
          };
        });
        console.log(articleList[0]);
        cb(articleList);
      }
    },
    error => console.log(error)
  );
};

module.exports = scrape;
