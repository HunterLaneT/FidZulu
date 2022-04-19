var express = require('express');
var router = express.Router();
var createError = require('http-errors');
const bikes = require('../modules/bikes');
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
  console.log('got into bikes/:location ' + param);

  const result = bikes.query_by_arg(
    param);
  if (result) {
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify(result));
  } else {
    next(createError(404));
  }
});

router.post('/add', function(req, res, next) {
  const newBike = req.body;
  console.log('got into bikes/add ' + newBike);
  const result = bikes.post_bike(newBike);
 if (result) {
  res.setHeader('content-type', 'application/json');
  res.end(JSON.stringify(result));
} else {
  next(createError(400));
}
});

module.exports = router;
