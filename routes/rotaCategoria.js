var Categoria= require('../model/categoria');
var Transacao= require('../model/transacao');

var express = require('express');
var router = express.Router();

router.get("/", function(req, res){
  Categoria.buscar(function(erro, dados){
    if(erro)
      res.sendStatus(500);
    else {
      res.json(dados);
    }
  });
});

router.post("/", function(req, res){
  var dados = req.body.categoria;

  if(!dados)
    return res.sendStatus(400);

  var json = JSON.parse(dados);

  categoria = new Categoria(json);

  categoria.save(function(err){
    if(err)
      res.sendStatus(500);
    else {
      res.sendStatus(200);
    }
  });
});

router.put("/", function(req, res){
  var dados = req.body.categoria;

  if(!dados)
    return res.sendStatus(400);

  var json = JSON.parse(dados);

  categoriaEditar = new Categoria(json);

  Categoria.buscarPorId(categoriaEditar._id, function(err, categoria){
     if(err)
        return response.sendStatus(500);

        categoria.titulo = categoriaEditar.titulo;
        categoria.tipo = categoriaEditar.tipo;
        categoria.estimativaGastos = categoriaEditar.estimativaGastos;

        categoria.save(function(err){
          if(err)
            res.sendStatus(500);
          else{
            res.json(categoriaEditar);
          }
     });
   });
});

router.delete("/", function(req, res){
  var dados = req.body.categoria;

  if(!dados)
    return response.sendStatus(400);

  var json = JSON.parse(dados);

  categoriaExcluir = new Categoria(json);

  Categoria.remove({_id:categoriaExcluir._id}, function(err){
    if(err)
      return res.sendStatus(500);

    res.sendStatus(200);
  });
});

router.post("/add-transacao", function(req, res){
  var idCategoria = req.body.categoria;
  var dados = req.body.transacao;
  console.log(idCategoria);
  console.log(dados);
  if(!idCategoria || !dados)
    return res.sendStatus(400);

  var jsonCategoria = JSON.parse(dados);
  categoria = new Categoria(jsonCategoria);

  var jsonTransacao = JSON.parse(dados);
  transacao = new Transacao(jsonTransacao);

  Categoria.buscarPorId(categoria._id, function(err, categoria){
     if(err)
        return res.sendStatus(500);

    Transacao.buscarPorId(transacao._id, function(err, transacaoServer){
      if(err)
         return res.sendStatus(500);
      if(transacaoServer == null){
        transacao.save(function(err){
          if(err)
            res.sendStatus(500);

            Categoria.update({_id:categoria._id}, {$push : {transacoes: transacao }}, function(err){
              if(err)
                return res.sendStatus(500);
              res.json({ok:"ok"});
            });
        });
      }else{
        Categoria.update({_id:categoria._id}, {$push : {transacoes: transacao }}, function(err){
          if(err)
            return res.sendStatus(500);
          res.json({ok:"ok"});
        });
      }
    });
  });
});

module.exports = router;
