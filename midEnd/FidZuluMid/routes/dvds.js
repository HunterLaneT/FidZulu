var express = require('express');
const request = require('request');
var router = express.Router();

/* Calculate DVD Prices */
router.get('/:location', function(req, res, next) {

    let location = req.params.location;
    let response;

    request('localhost:3033/dvds/' + location, {json: true}, (err, resp, body) => {

        if(err) {
            console.log(err);
        }
        
        console.log(body);
        let statusCode = resp.statusCode;
        response = {
            statusCode,
            body
        }
    });

    res.send(response);
});

module.exports = router;