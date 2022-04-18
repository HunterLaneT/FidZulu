var express = require('express');
var router = express.Router();
const bikes = require('../modules/bikes');

/* GET home page. */
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
