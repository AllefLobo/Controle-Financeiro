var Categoria= require('../model/categoria');

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

router.post("/cadastrar", function(req, res){
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

router.put("/editar", function(req, res){
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

router.delete("/excluir", function(req, res){
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

module.exports = router;
