var express = require('express');
const request = require('request');
var router = express.Router();

/* Calculate DVD Prices */
router.get('/:location', function(req, res, next) {

    var location = req.params.location;

    getDVDs(location).then(data => {
        res.send(data);
    }).catch(err => console.log(err));
});

async function getDVDs(location) {
    return axios.get('http://localhost:3035/dvds/' + location)
        .then(response => {
            console.log(response.data);
            return response.data
        });
};

module.exports = router;