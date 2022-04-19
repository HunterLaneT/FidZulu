var express = require('express');
const request = require('request');
var router = express.Router();

/* Calculate Book Prices */
router.get('/:location', function(req, res, next) {

    var location = req.params.location;

    getBooks(location).then(data => {
        res.send(data);
    }).catch(err => res.sendStatus(err.response.status));
});

/* Add a Book */
router.post('/add', function(req, res, next) {

    var newBook = req.body;

    addBooks(newBook).then(data => {
        res.send(data);
    }).catch(err => res.sendStatus(err.response.status));
});

async function getBooks(location) {
    return axios.get('http://localhost:3034/books/' + location)
        .then(response => {
            console.log(response.data);
            return response.data
        });
};

async function addBooks(book) {
    return axios.post('http://localhost:3034/books/add', book)
    .then(response => {
        console.log(response.data);
        return response.data
    });
};

module.exports = router;