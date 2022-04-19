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

router.post('/add', function(req, res, next) {

    var newToy = req.body;

    addToys(newToy).then(data => {
        res.send(data);
    }).catch(err => res.sendStatus(err.response.status));
});

async function getToys(location) {
    return axios.get('http://localhost:3033/toys/' + location)
        .then(response => {
            console.log(response.data);
            return response.data
        });
};
async function addToys(toy) {
    return axios.post('http://localhost:3034/toys/add', toy)
    .then(response => {
        console.log(response.data);
        return response.data
    });
};

module.exports = router;