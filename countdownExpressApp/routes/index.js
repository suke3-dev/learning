var express = require('express');
var router = express.Router();
var launchTime = new Date("12/29/2019 10:00").getTime();

/* GET home page. */
router.get('/', function (req, res, next) {
  var currentTime = new Date().getTime();
  var numberOfMilliseconds = parseInt(launchTime - currentTime);
  var numberOfDays = parseInt(numberOfMilliseconds/(24 * 3600 * 1000));
  res.render('index', { title: 'Countdown to Launch', countDown: numberOfDays });
});

module.exports = router;
