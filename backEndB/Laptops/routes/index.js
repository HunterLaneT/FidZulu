const createError = require('http-errors');
const express = require('express');
const router = express.Router();

const laptops = require('../modules/laptops');
const url = require('url');

const team = {
  "team": "backEndB Laptop",
  "membersNames" : [
    "Matthew Yeakel"
]
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/laptops/all/:location', (req, res, next) => {
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

  router.get('/laptops/team', (req, res, next) => {
    // result = team;
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify(team));
  })

module.exports = router;
