var express = require('express');
var router = express.Router();
var createError = require('http-errors');
const toys = require("../modules/toys");
const team = require("../modules/toysTeam");

/* GET home page. */
router.get('/team', function(req, res, next) {
  console.log('got into /team');

  const result = team.list();
  if (result) {
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify(result));
  } else {
    next(createError(404));
  }
});

router.get('/:location', function(req, res, next) {
  const param = req.params.location;
  console.log('got into toys/:location ' + param);

  const result = toys.query_by_arg(
    param);
  if (result) {
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify(result));
  } else {
    next(createError(404));
  }
});

router.post('/add', function(req, res, next) {
  const newToy = req.body;
  console.log('got into toys/add ' + newToy);

  const result = toys.post_toy(newToy);
  if (result) {
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify(result));
  } else {
    next(createError(400));
  }
});

module.exports = router;
