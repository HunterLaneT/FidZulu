const createError = require('http-errors');
const express = require('express');
const router = express.Router();

const books = require('../modules/books');
const url = require('url');
const team = {
  "team": "Back-End B",
  "membersNames": [
    "Will Berner",
    "Rahul Gawdi",
    "Matthew Yeakel",
    "Ryland Dreibelbis",
    "Conner Bluck"
  ]
}

router.get('/Books/all/:location', (req, res, next) => {
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

router.get('/Books/team', (req,res,next) => {
  res.setHeader('content-type', 'application/json');
  res.end(JSON.stringify(team));
});

module.exports = router;
