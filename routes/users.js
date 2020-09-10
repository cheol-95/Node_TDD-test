var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  req.query.limit = parseInt(req.query.limit, 10);

  if (Number.isNaN(limit)) {
    res.status(400).end();
  } else {
    res.json(users.slice(0, limit));
  }
});

module.exports = router;
