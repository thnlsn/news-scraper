// NODE SERVER AND ROUTE INCLUSIONS
console.log(
  '\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓'
);

const express = require('express');
const exphbs = require('express-handlebars');

// Allows the port to be either the hosts designated port OR if that doesnt exist, 8080
let PORT = process.env.PORT || 8080;

const app = express();
const router = express.Router();

const path = require('path');
const mongoose = require('mongoose');

/* mongoose.connect(`mongodb://localhost:${PORT}/scraper-test`, {
  useNewUrlParser: true
}); */

const scrape = require('./scripts/scrape');
scrape();

const createDate = require('./scripts/date');
createDate();

app.use(express.static(`${__dirname}/public`));

app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main'
  })
);
app.set('view engine', 'handlebars');

// This makes every request go through the router middleware
app.use(router);

// This allows the routes set in config/routes.js to be used
require('./config/routes')(router);

// Allows the app to use the deployed database IF exists, otherwise it will use a local one (mongoHeadlines)
let db = process.env.MONGODB_URI || 'mongodb://localhost/mongoHeadlines';

// Connects mongoose to our database
mongoose.connect(db, err => {
  if (err) {
    console.log(err);
  } else {
    console.log('▓▓ Mongoose connection successful.');
  }
});

// Listen on a port
app.listen(PORT, () =>
  console.log(
    `▓▓ Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
  )
);
