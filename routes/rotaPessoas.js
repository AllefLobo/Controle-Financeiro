var express = require('express');
var router = express.Router();
var Pessoa = require('../model/pessoa');


router.get('/pessoas', function(req, res, next) {
  res.send(Pessoa.list);
});

router.get('/pessoas/:id', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/pessoas', function(req, res, next) {
  res.send(req.params());
});

router.put('/pessoas/:id', function(req, res, next) {
  res.send('respond with a resource');
});

router.delete('/pessoas/:id', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
