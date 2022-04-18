var express = require('express');
const request = require('request');
var router = express.Router();

/* Calculate Book Prices */
router.get('/:location', function(req, res, next) {

    var location = req.params.location;

    getBooks(location).then(data => {
        res.send(data);
    }).catch(err => console.log(err));
});

async function getBooks(location) {
    return axios.get('http://localhost:3034/books/' + location)
        .then(response => {
            console.log(response.data);
            return response.data
        });
};

module.exports = router;