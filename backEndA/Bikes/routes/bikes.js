var express = require('express');
var router = express.Router();
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

module.exports = router;
