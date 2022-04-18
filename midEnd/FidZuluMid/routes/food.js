var express = require('express');
const request = require('request');
var router = express.Router();

/* Calculate Food Prices */
router.get('/:location', function(req, res, next) {

    var location = req.params.location;
    let response;

    request('localhost:3034/food/' + location, {json: true}, (err, res, body) => {

        if(err) {
            console.log(err);
        }
        
        console.log(body);
        let statusCode = res.statusCode;
        response = {
            statusCode,
            body
        }
    });

    res.send(response);
});

module.exports = router;