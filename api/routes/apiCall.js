var express = require('express');
var router = express.Router();
var fetch = require('node-fetch')

router.get('/', function(req, res, next) {
  const url ='https://api.deezer.com/chart/0/tracks';
  fetch(url)
  .then(res => res.json())
  .then(data => res.send(data))
});

module.exports = router;
