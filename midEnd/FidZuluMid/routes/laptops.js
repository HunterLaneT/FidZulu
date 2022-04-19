var express = require('express');
const axios = require('axios');
var router = express.Router();

/* Calculate Laptop Prices */
router.get('/:location', function(req, res, next) {

    var location = req.params.location;

    getLaptops(location).then(data => {
        res.send(data);
    }).catch(err => console.log(err));
});

router.get('/teams', async function(req, res, next) {
    getTeams().then(data => {
        res.send(data);
    }).catch(err => console.log(err))
});
router.post('/add', function(req, res, next) {

    var newLaptop = req.body;

    addLaptops(newLaptop).then(data => {
        res.send(data);
    }).catch(err => res.sendStatus(err.response.status));
});

async function getLaptops(location) {
    return axios.get('http://localhost:3036/laptops/' + location)
        .then(response => {
            console.log(response.data);
            return response.data
        });
};

async function getTeams() {
    return axios.get('http://localhost:3036/laptops/teams')
        .then(response => {
            console.log(response.data);
            return response.data
        });
    };
async function addLaptops(laptop) {
    return axios.post('http://localhost:3036/laptops/add', laptop)
    .then(response => {
        console.log(response.data);
        return response.data
    });
};

module.exports = router;