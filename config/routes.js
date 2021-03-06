// ROUTES

const scrape = require('../scripts/scrape');

const articlesController = require('../controllers/articles');
const commentsController = require('../controllers/comments');

module.exports = router => {
  // takes us to the home page
  router.get('/', (req, res) => {
    res.render('home', {
      title: 'Home Page'
    });
  });

  // takes us to the saved page
  router.get('/saved', (req, res) => {
    res.render('saved', {
      title: 'Saved Page'
    });
  });

  // tells the router to do this every time we hit this route (call fetch and if it gives nothing tell the user)
  router.get('/api/fetch', (req, res) => {
    articlesController.fetch((err, docs) => {
      if (!docs || docs.insertedCount === 0) {
        res.json({
          message: 'No new articles at the moment, check back later!'
        });
      } else {
        res.json({
          message: `Added ${docs.insertedCount} new articles!`
        });
      }
    });
  });

  router.get('/api/headlines', (req, res) => {
    let query = {};
    // if the user is looking for saved articles, set the query to saved, else just give them all
    if (req.query.saved) {
      query = req.query;
    }
    // run the read function from the controller with "saved: true/false" as the query, so it gives all saved or all non-saved
    articlesController.read(query, data => {
      res.json(data);
    });
  });

  router.delete('api/headlines/:id', (req, res) => {
    let query = {};
    query._id = req.params.id;
    articlesController.delete(query, (err, data) => {
      res.json(data);
    });
  });

  // run the update function on whatever the user sends in req (update)
  router.patch('api/headlines', (req, res) => {
    articlesController.update(req.body, (err, data) => {
      res.json(data);
    });
  });

  // grab all notes associated with an article
  router.get('api/notes/:headline_id?', (req, res) => {
    let query = {};
    if (req.params.headline_id) {
      query._id = req.params.headline_id;
    }

    commentsController.get(query, (req, res) => {
      res.json(data);
    });
  });

  router.delete('api/comments/:id', (req, res) => {
    let query = {};
    query._id = req.params.id;

    commentsController.delete(query, (err, data) => {
      res.json(data);
    });
  });

  router.post('/api/comments', (req, res) => {
    commentsController.save(req.body, data => {
      res.json(data);
    });
  });
};
