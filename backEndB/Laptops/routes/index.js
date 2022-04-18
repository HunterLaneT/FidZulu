const createError = require('http-errors');
const express = require('express');
const router = express.Router();

const laptops = require('../modules/laptops');
const url = require('url');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/laptops/:location', (req, res, next) => {
    const location = req.params.location;
    let tax = 0;
    if (location === "Raleigh") tax = 0.075;
    else if (location === "Durham") tax = 0.08;
    const raw = laptops.list();
    const result = raw.map(laptop => {
      laptop.price += laptop.price * tax;
      laptop.price = laptop.price.toFixed(2);
      return laptop;
    });
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify(result));
  });

module.exports = router;
