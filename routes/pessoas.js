var express = require('express');
var router = express.Router();
var Pessoa = require('../model/pessoa');


router.get('/pessoas', function(req, res, next) {
	Pessoa.find(function (err, pessoas) {
  if (err) return console.error(err);
  console.log(pessoas);
	res.send(pessoas);
})

});


router.post('/pessoas', function(req, res, next) {
	console.log(req.params);
	res.json(req.params);
});

router.put('/pessoas/:id', function(req, res, next) {
  res.send('respond with a resource');
});

router.delete('/pessoas/:id', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
