var Transacao = require('../model/transacao');

var express = require('express');
var router = express.Router();

router.get("/", function(req, res){
  Transacao.buscar(function(erro, dados){
    if(erro)
      res.sendStatus(500);
    else {
      res.json(dados);
    }
  });
});

router.post("/cadastrar", function(req, res){
  var dados = req.body.transacao;

  if(!dados)
    return res.sendStatus(400);

  var json = JSON.parse(dados);

  transacao = new Transacao(json);

  transacao.save(function(err){
    if(err)
      res.sendStatus(500);
    else {
      res.sendStatus(200);
    }
  });
});

router.put("/editar", function(req, res){
  var dados = req.body.transacao;

  if(!dados)
    return res.sendStatus(400);

  var json = JSON.parse(dados);

  transacaoEditar = new Transacao(json);

  Transacao.buscarPorId(transacaoEditar._id, function(err, transacao){
     if(err)
        return response.sendStatus(500);

        transacao.titulo = transacaoEditar.titulo;
        transacao.tipo = transacaoEditar.tipo;
        transacao.valor = transacaoEditar.valor;

        transacao.save(function(err){
          if(err)
            response.sendStatus(500);
          else{
            response.json(transacaoEditar);
          }
     });
   });
});

router.delete("/excluir", function(req, res){
  var dados = req.body.transacao;

  if(!dados)
    return response.sendStatus(400);

  var json = JSON.parse(dados);

  transacaoExcluir = new Transacao(json);

  Transacao.remove({_id:transacaoExcluir._id}, function(err){
    if(err)
      return response.sendStatus(500);

    response.sendStatus(200);
  });
});

module.exports = router;
