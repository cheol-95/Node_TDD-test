var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.json({ name: 'test1' });
  res.send('test string');
  // res.render('index', { title: 'Express' });
});

module.exports = router;
