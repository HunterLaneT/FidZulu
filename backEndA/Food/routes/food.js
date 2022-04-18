var express = require('express');
var router = express.Router();
const food = require('../modules/food');
const team = require('../modules/team');

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
  console.log('got into food/:location ' + param);

  const result = food.query_by_arg(
    param);
  if (result) {
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify(result));
  } else {
    next(createError(404));
  }
});

router.get('/add', function(req, res, next) {
  const food = req.body.food;
  console.log('got into food/add ' + food);

  const result = food.query_by_arg(
    param);
  if (result) {
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify(result));
  } else {
    next(createError(404));
  }
});

module.exports = router;
