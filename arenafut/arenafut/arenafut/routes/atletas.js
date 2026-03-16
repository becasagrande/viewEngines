var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('atletas', { title: 'Página de Atletas' });
});

module.exports = router;