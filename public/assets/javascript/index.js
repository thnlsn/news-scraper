$(document).ready(() => {
  let articleContainer = $('.article-container');
  $(document).on('click', '.btn.save', handleArticleSave);
  $(document).on('click', '.scrape-new', handleArticleScrape);

  initPage();

  const initPage = () => {
    articleContainer.empty();
    $.get('api/headlines?saved=false').then(data => {
      if (data && data.length) {
        renderArticles(data);
      } else {
        renderEmpty();
      }
    });
  };

  const renderArticles = articles => {
    let articlePanels = [];
    for (let i = 0; i < articles.length; i++) {
      articlePanels.push(createPanel(articles[i]));
    }
    articleContainer.append(articlePanels);
  };

  const createPanel = article => {
    let panel = $(
      [
        "<div class='panel panel-default'>",
        "<div class='panel-heading'>",
        '<h3>',
        article.headline,
        "<a class='btn btn-success save'>",
        'Save Article',
        '</a>',
        '</h3>',
        '</div>',
        "<div class='panel-body'>",
        article.summary,
        '</div>',
        '<div>'
      ].join('')
    );

    panel.data('_id', article._id);
    return panel;
  };

  const renderEmpty = () => {
    let emptyAlert = $(
      [
        "<div class='alert alert-warning text-center'>",
        '<h4>Sorry, there are no new articles at the moment.</h4>',
        '</div>',
        "<div class='panel panel-default'>",
        "<div class='panel-heading text center'>",
        '<h3>What would you like to do?</h3>',
        '</div>',
        "<div class='panel-body text-center'>",
        "<h4><a class='scrape-new'>Try scraping new articles</a></h4>",
        "<h4><a href='/saved'>Go to saved articles</a></h4>",
        '</div>',
        '</div>'
      ].join('')
    );
    articleContainer.append(emptyAlert);
  };
});
