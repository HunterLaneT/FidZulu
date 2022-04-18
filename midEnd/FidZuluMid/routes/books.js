var express = require('express');
const request = require('request');
var router = express.Router();

/* Calculate Book Prices */
router.get('/:location', function(req, res, next) {

    var location = req.params.location;
    let response;

    request('localhost:3032/books/' + location, {json: true}, (err, res, body) => {

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