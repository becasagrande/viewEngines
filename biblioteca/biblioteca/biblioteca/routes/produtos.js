var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Produtinhos!' });
});

router.get('/camisetas', function(req, res, next) {
  res.render('camisetas', { title: 'Camisetas' });
});

module.exports = router;
