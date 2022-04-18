const createError = require('http-errors');
const express = require('express');
const router = express.Router();

const books = require('../modules/books');
const url = require('url');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Books/:location', (req, res, next) => {
  const location = req.params.location;
  let tax = 0;
  if (location === "Raleigh") tax = 0.075;
  else if (location === "Durham") tax = 0.08;
  const raw = books.list();
  const result = raw.map(book => {
    book.price += book.price * tax;
    book.price = book.price.toFixed(2);
    return book;
  });
  res.setHeader('content-type', 'application/json');
  res.end(JSON.stringify(result));
});

module.exports = router;
