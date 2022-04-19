var express = require('express');
const axios = require('axios');
var router = express.Router();

/* Calculate Food Prices */
router.get('/:location', function(req, res, next) {

    var location = req.params.location;

    getFoods(location).then(data => {
        res.send(data);
    }).catch(err => console.log(err));

});

router.get('/teams', async function(req, res, next) {
    getTeams().then(data => {
        res.send(data);
    }).catch(err => console.log(err));
});

async function getFoods(location) {
    return axios.get('http://localhost:3032/food/' + location)
        .then(response => {
            console.log(response.data);
            return response.data
        });
};

module.exports = router;