// ROUTES
module.exports = router => {
  router.get('/', (req, res) => {
    res.render('home', {
      title: 'Home Page'
    });
  });

  router.get('/saved', (req, res) => {
    res.render('saved', {
      title: 'Saved Page'
    });
  });
};
