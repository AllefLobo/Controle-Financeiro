var express = require('express');
var router = express.Router();
var Pessoa = require('../model/pessoa');



router.get('/pessoa', function(req, res) {
	Pessoa.buscar(function(erro, dados){
    if(erro)
      res.sendStatus(500);
    else {
      res.json(dados);
    }
  });
});

router.post('/pessoa', function(req, res) {
	var dados = req.body.pessoa;

  if(!dados)
    return res.sendStatus(400);

  var json = JSON.parse(dados);
  var pessoa = new Categoria(json);

  pessoa.save(function(err){
    if(err)
      res.sendStatus(500);
    else {
      res.sendStatus(200);
    }
  });
});

router.put('/pessoa', function(req, res) {
	var dados = req.body.pessoa;

  if(!dados)
    return res.sendStatus(400);

  var json = JSON.parse(dados);

  pessoaEditar = new Pessoa(json);

  Pessoa.buscarPorId(pessoaEditar._id, function(err, pessoa){
     if(err)
        return response.sendStatus(500);

        pessoa.nome = pessoaEditar.nome;
        pessoa.email = pessoaEditar.email;
				pessoa.senha = pessoaEditar.senha;


        pessoa.save(function(err){
          if(err)
            response.sendStatus(500);
          else{
            response.json(pessoaEditar);
          }
     });
   });
});

router.delete('/pessoa', function(req, res) {
	var dados = req.body.pessoa;

  if(!dados)
    return response.sendStatus(400);

  var json = JSON.parse(dados);

  var pessoaExcluir = new Pessoa(json);

  Pessoa.remove({_id:pessoaExcluir._id}, function(err){
    if(err)
      return response.sendStatus(500);

    response.sendStatus(200);
  });
});

module.exports = router;
