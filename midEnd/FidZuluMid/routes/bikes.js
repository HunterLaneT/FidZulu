var express = require('express');
const axios = require('axios');
var router = express.Router();


router.get('/teams', async function(req, res, next) {
    getTeams().then(data => {
        res.send(data);
    }).catch(err => console.log(err));
});

/* Calculate Bike Prices */
router.get('/:location', async function(req, res, next) {

    var location = req.params.location;

    getBikes(location).then(data => {
        res.send(data);
    }).catch(err => console.log(err));
});

/* Add a Bike */
router.post('/add', function(req, res, next) {

    var newBike = req.body;

    addBikes(newBike).then(data => {
        res.send(data);
    }).catch(err => res.sendStatus(err.response.status));
});

async function getBikes(location) {
    return axios.get('http://localhost:3031/bikes/' + location)
        .then(response => {
            console.log(response.data);
            return response.data
        });
};

async function getTeams() {
    return axios.get('http://localhost:3031/bikes/team')
        .then(response => {
            console.log(response.data);
            return response.data
        });
};

async function addBikes(book) {
    return axios.post('http://localhost:3031/bikes/add', book)
    .then(response => {
        console.log(response.data);
        return response.data
    });
};

module.exports = router;
