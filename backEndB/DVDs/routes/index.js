const createError = require('http-errors');
const express = require('express');
const router = express.Router();

const dvds = require('../modules/dvds')
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
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  
});

router.get('/DVDs/:location', (req, res, next) => {
  const location = req.params.location;
  let tax = 0;
  if (location === "Raleigh") tax = 0.075;
  else if (location === "Durham") tax = 0.08;
  const raw = dvds.list();
  const result = raw.map(dvd => {
    dvd.price += dvd.price * tax;
    dvd.price = dvd.price.toFixed(2);
    return dvd;
  });
res.setHeader('content-type', 'application/json');
res.end(JSON.stringify(result));
});

router.get('/dvds/team', (req,res,next) => {
  res.setHeader('content-type', 'application/json');
  res.end(JSON.stringify(team));
});

router.post('/dvds/add', (req,res,next) => {
  const newDVD = req.body;
  books.add_DVD(newDVD);
  res.end();
});

module.exports = router;
