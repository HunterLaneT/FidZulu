var express = require('express');
var router = express.Router();

/* Calculate Bike Prices */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
