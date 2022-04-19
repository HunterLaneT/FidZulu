const createError = require('http-errors');
const express = require('express');
const router = express.Router();

const books = require('../modules/books');
const url = require('url');
const team = [
  {
    "team": "Back-End B",
    "membersNames": [
      "Will Berner",
      "Rahul Gawdi",
      "Matthew Yeakel",
      "Ryland Dreibelbis",
      "Conner Bluck"
    ]
  },
  {
    "team": "Mid-End",
    "membersNames": []
  },
  {
    "team": "Front-end",
    "membersNames": []
  }
];
const tax_rates = {
  "raleigh": 0.075,
  "durham": 0.08
};

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
    next(createError(400));
  }
});

router.get('/books/team', (req, res, next) => {
  res.setHeader('content-type', 'application/json');
  res.end(JSON.stringify(team));
});

router.get('/books/:location', (req, res, next) => {
  const location = req.params.location.toLowerCase();
  const tax = tax_rates[location];
  if (tax) {
    const raw = books.list();
    const result = raw.map(book => {
      book.price = book.price * (1 + tax);
      book.price = parseFloat(book.price.toFixed(2));
      return book;
    });
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify(result));
  }
  else next(createError(404));
});

module.exports = router;
