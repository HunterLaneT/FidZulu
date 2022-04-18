var express = require('express');
const request = require('request');
var router = express.Router();

/* Calculate Laptop Prices */
router.get('/:location', function(req, res, next) {

    var location = req.params.location;

    getLaptops(location).then(data => {
        res.send(data);
    }).catch(err => console.log(err));
});

async function getLaptops(location) {
    return axios.get('http://localhost:3031/laptops/' + location)
        .then(response => {
            console.log(response.data);
            return response.data
        });
};

module.exports = router;