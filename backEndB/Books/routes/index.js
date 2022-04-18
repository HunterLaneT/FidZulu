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

router.get('/books/all/:location', (req, res, next) => {
  const location = req.params.location;
  let tax = 0;
  if (location.toLowerCase() === "raleigh") tax = 0.075;
  else if (location.toLowerCase() === "durham") tax = 0.08;
  const raw = books.list();
  const result = raw.map(book => {
    book.price += book.price * tax;
    book.price = parseFloat(book.price.toFixed(2));
    return book;
  });
  res.setHeader('content-type', 'application/json');
  res.end(JSON.stringify(result));
});

router.get('/books/team', (req, res, next) => {
  res.setHeader('content-type', 'application/json');
  res.end(JSON.stringify(team));
});

router.post('/books/add', (req, res, next) => {
  const newBook = req.body;
  if (
    Object.keys(newBook).length === 5 && typeof (newBook.Title) === 'string'
    && typeof (newBook.Author) === 'string' && typeof (newBook.price) === 'number'
    && typeof (newBook.ISBN) === 'string' && typeof (newBook.publisher) === 'string'
  ) {
    books.add_book(newBook);
    res.end();
  }
  else {
    res.sendStatus(400);
  }
});

module.exports = router;
