var express = require('express');
const axios = require('axios');
var router = express.Router();

/* Calculate Bike Prices */
router.get('/:location', async function(req, res, next) {

    var location = req.params.location;

    getBikes(location).then(data => {
        res.send(data);
    }).catch(err => console.log(err));

});

router.get('/teams', async function(req, res, next) {
    getTeams().then(data => {
        res.send(data);
    }).catch(err => console.log(err));
});

async function getBikes(location) {
    return axios.get('http://localhost:3031/bikes/' + location)
        .then(response => {
            console.log(response.data);
            return response.data
        });
};

async function getTeams() {
    return axios.get('http://localhost:3031/bikes/teams')
        .then(response => {
            console.log(response.data);
            return response.data
        });
};

module.exports = router;
