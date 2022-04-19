const createError = require('http-errors');
const express = require('express');
const router = express.Router();

const laptops = require('../modules/laptops');
const url = require('url');

const team = {
  "team": "backEndB Team",
  "membersNames" : [
    "Matthew Yeakel",
    "Will Berner",
    "Rahul Gawdi",
    "Ryland Dreibelbis",
    "Conner Bluck"
]
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/laptops/team', (req, res, next) => {
  // result = team;
  res.setHeader('content-type', 'application/json');
  res.end(JSON.stringify(team));
});

router.post('/laptops/add', (req,res,next) => {
  const newLaptop = req.body;
  if (
    Object.keys(newLaptop).length === 5 && typeof(newLaptop.product) === 'string'
    && typeof (newLaptop.brand) === 'string' && typeof(newLaptop.CPU) === 'string'
    && typeof(newLaptop.memory) === 'string' && typeof(newLaptop.price) === 'number'
  ) {
    laptops.add_laptop(newLaptop);
    res_end();
  }
  else{
    res.sendStatus(400);
  }
});

router.get('/laptops/:location', (req, res, next) => {
    let location = req.params.location;
    let tax = 0;
    location = location.toLowerCase();
    if (location === "raleigh") tax = 0.075;
    else if (location === "durham") tax = 0.08;
    else next(createError(404)).send("Not found.");
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
