var express = require('express');
const axios = require('axios');
var router = express.Router();

/* Get the teams*/
router.get('/teams', async function(req, res, next) {

    getTeams().then(data => {
        res.send(data);
    }).catch(err => console.log(err));
});

/* Calculate DVD Prices */
router.get('/:location', function(req, res, next) {

    var location = req.params.location;

    getDVDs(location).then(data => {
        res.send(data);
    }).catch(err => console.log(err));
});

/* Add a DVD */
router.post('/add', function(req, res, next) {

    var newDVD = req.body;

    addDVDs(newDVD).then(data => {
        res.send(data);
    }).catch(err => res.sendStatus(err.response.status));
});

async function getDVDs(location) {
    return axios.get('http://localhost:3035/dvds/' + location)
        .then(response => {
            console.log(response.data);
            return response.data
        });
};

async function addDVDs(DVD) {
    return axios.post('http://localhost:3035/dvds/add', DVD)
    .then(response => {
        console.log(response.data);
        return response.data
    });
};

async function getTeams() {
    return axios.get('http://localhost:3035/dvds/team')
        .then(response => {
            console.log(response.data);
            return response.data
        });
};

module.exports = router;