var express = require('express');
var router = express.Router();
const team = require('../modules/team');

/* GET home page. */

router.get('/', function(req, res, next) {
    console.log('got into /team');
  
    const result = team.list();
    if (result) {
      res.setHeader('content-type', 'application/json');
      res.end(JSON.stringify(result));
    } else {
      next(createError(404));
    }
  });


module.exports = router;
