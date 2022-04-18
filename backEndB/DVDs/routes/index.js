const createError = require('http-errors');
const express = require('express');
const router = express.Router();

const dvds = require('../modules/dvds')
const url = require('url');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/dvds/:location', (req, res, next)=> {
  const raw = books.list();
//const result = books.list();
result.forEach(dvd => {
  
});
res.setHeader('content-type', 'application/json');
res.and(JSON.stringify(result));
});

module.exports = router;
