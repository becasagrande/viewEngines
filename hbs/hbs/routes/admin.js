var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Você está na aba do administrador' });
});

router.get('/funcoes', function(req, res, next) {
  res.render('index', { title: 'Você está na aba de funções do admin' });
});

module.exports = router;