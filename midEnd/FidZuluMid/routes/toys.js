var express = require('express');
const request = require('request');
var router = express.Router();

/* Calculate Toys Prices */
router.get('/:location', function(req, res, next) {

    var location = req.params.location;

    getToys(location).then(data => {
        res.send(data);
    }).catch(err => console.log(err));
});

async function getToys(location) {
    return axios.get('http://localhost:3031/toys/' + location)
        .then(response => {
            console.log(response.data);
            return response.data
        });
};

module.exports = router;