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

    getBikes().then(data => {
        res.send(data);
    }).catch(err => console.log(err));

});

async function getBikes() {
    return axios.get('http://localhost:3031/bikes/' + location)
        .then(response => {
            console.log(response.data);
            return response.data
        });
};

module.exports = router;
