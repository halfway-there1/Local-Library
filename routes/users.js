const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool', function (req, res, next) {
  res.send("You're are so cool");
});

router.get('/:userId/books/:bookId', function (req, res) {
  // res.send(`${req.params.userId}, ${req.params.bookId}`);
  res.send(req.params);
});

module.exports = router;
