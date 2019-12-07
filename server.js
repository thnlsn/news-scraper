const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const mongoose = require('mongoose');

let PORT = process.env.PORT || 8080;

/* mongoose.connect(`mongodb://localhost:${PORT}/scraper-test`, {
  useNewUrlParser: true
}); */

let MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost/mongoHeadlines';

mongoose.connect(MONGODB_URI);

app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/boilerplate')
  })
);
app.set('view engine', 'handlebars');

// Routing
app.get('/', (req, res) => {
  res.render('index', {
    layout: false,
    title: 'Home Page',
    name: 'Thomas Nelson'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    layout: false,
    title: 'About Page'
  });
});

app.listen(PORT, () =>
  console.log(
    `Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
  )
);
