const createError = require('http-errors');
const express = require('express');
const router = express.Router();

const dvds = require('../modules/dvds')
const url = require('url');
const team = [{
  "team": "Back-End B",
  "membersNames": [
    "Will Berner",
    "Rahul Gawdi",
    "Matthew Yeakel",
    "Ryland Dreibelbis",
    "Conner Bluck"
  ]

},
{"team": "Back End A",
"membersNames": [
  "Miles Walker",
  "Emanuel Aguirre-Franco",
  "Jared Solomon",
  "Lorenzo Battigelli",
  "Brian King"
]
},
{
  "team": "Mid-End",
  "membersNames": [
    ""
  ]
},
{
  "team": "Front-end",
  "membersNames": [
    ""
  ]
}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  
});

const tax_rates={
  "raleigh":0.075,
  "durham":0.08
};
//get teams
router.get('/dvds/team', (req,res,next) => {
  res.setHeader('content-type', 'application/json');
  res.end(JSON.stringify(team));
});

router.get('/dvds/:location', (req, res, next) => {
  const location = req.params.location;
  const tax = tax_rates[location.toLowerCase()];
  if (tax) {
    const raw = dvds.list();
    const result = raw.map(dvd => {
      dvd.price = dvd.price * (1 + tax);
      dvd.price = parseFloat(dvd.price.toFixed(2));
      return dvd;
    });
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify(result));
  }
  else next(createError(404));
});



router.post('/dvds/add', (req,res,next) => {
const newDVD = req.body;
if (
  Object.keys(newDVD).length === 5 && typeof (newDVD.title) === 'string'
  && typeof (newDVD.mpaa_rating) === 'string' && typeof (newDVD.studio) === 'string'
  && typeof (newDVD.time) === 'number' && typeof (newDVD.price) === 'number'
) {
  dvds.add_dvd(newDVD);
  res.end();
}
else {
  next(createError(400));
}
});

module.exports = router;
