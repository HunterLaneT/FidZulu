var express = require('express');
const axios = require('axios');
var router = express.Router();

/* Calculate Bike Prices */
router.get('/:location', async function(req, res, next) {

    var location = req.params.location;
    let response;

    // request('http://localhost:3031/bikes/' + location, { json: true }, (err, res, body) => {
        
    //     if(err) {
    //         response = err;
    //     } else {
    //       console.log(body);
    //       response = body;
    //     }

    // });

    axios.get('http://localhost:3031/bikes/' + location)
        .then(response => {
            console.log(response.data);
            response = response.data;
        });

    res.write(response);
    res.end();
});


module.exports = router;
