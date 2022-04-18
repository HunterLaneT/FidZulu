var express = require('express');
const request = require('request');
var router = express.Router();

/* Calculate Food Prices */
router.get('/:location', function(req, res, next) {

    var location = req.params.location;

    getFoods(location).then(data => {
        res.send(data);
    }).catch(err => console.log(err));
});

async function getFoods(location) {
    return axios.get('http://localhost:3031/food/' + location)
        .then(response => {
            console.log(response.data);
            return response.data
        });
};

module.exports = router;