var express = require('express');
const axios = require('axios');
var router = express.Router();

/* Calculate Toys Prices */
router.get('/:location', function(req, res, next) {

    var location = req.params.location;

    getToys(location).then(data => {
        res.send(data);
    }).catch(err => console.log(err));
});

router.get('/teams', async function(req, res, next) {
    getTeams().then(data => {
        res.send(data);
    }).catch(err => console.log(err));
});

async function getToys(location) {
    return axios.get('http://localhost:3033/toys/' + location)
        .then(response => {
            console.log(response.data);
            return response.data
        });
};

async function getTeams() {
    return axios.get('http://localhost:3033/toys/teams/')
        .then(response => {
            console.log(response.data);
            return response.data
        });
}

module.exports = router;