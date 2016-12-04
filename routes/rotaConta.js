var express = require('express');
var router = express.Router();
var Conta = require('../model/conta');



router.get('/', function(req, res) {
	Conta.buscar(function(erro, dados){
    if(erro)
      res.sendStatus(500);
    else {
      res.json(dados);
    }
  });
});

router.post('/', function(req, res) {
	var dados = req.body.Conta;

  if(!dados)
    return res.sendStatus(400);

  var json = JSON.parse(dados);
  var Conta = new Categoria(json);

  Conta.save(function(err){
    if(err)
      res.sendStatus(500);
    else {
      res.sendStatus(200);
    }
  });
});

router.put('/', function(req, res) {
	var dados = req.body.Conta;

  if(!dados)
    return res.sendStatus(400);

  var json = JSON.parse(dados);

  ContaEditar = new Conta(json);

  Conta.buscarPorId(ContaEditar._id, function(err, Conta){
     if(err)
        return response.sendStatus(500);

        Conta.titulo = ContaEditar.titulo;
        Conta.prazo = ContaEditar.prazo;
				Conta.valor = ContaEditar.valor;
				Conta.status = ContaEditar.status;
				Conta.descricao = ContaEditar.descricao;


        Conta.save(function(err){
          if(err)
            response.sendStatus(500);
          else{
            response.json(ContaEditar);
          }
     });
   });
});

router.delete('/', function(req, res) {
	var dados = req.body.Conta;

  if(!dados)
    return response.sendStatus(400);

  var json = JSON.parse(dados);

  var ContaExcluir = new Conta(json);

  Conta.remove({_id:ContaExcluir._id}, function(err){
    if(err)
      return response.sendStatus(500);

    response.sendStatus(200);
  });
});

module.exports = router;
