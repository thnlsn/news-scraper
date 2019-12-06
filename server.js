const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

let PORT = process.env.PORT || 8080;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Routing
app.get('/', (req, res) => {
  res.render('index', { layout: false });
});

app.listen(PORT, () =>
  console.log(
    `Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
  )
);
