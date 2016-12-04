var Categoria= require('../model/categoria');
var Transacao= require('../model/transacao');
var Conta= require('../model/conta');

var express = require('express');
var router = express.Router();
var Pessoa = require('../model/pessoa');



router.get('/', function(req, res) {
	Pessoa.buscar(function(erro, dados){
    if(erro)
      res.sendStatus(500);
    else {
      res.json(dados);
    }
  });
});

router.post('/', function(req, res) {
	var dados = req.body.pessoa;

  if(!dados)
    return res.sendStatus(400);

  var json = JSON.parse(dados);
  var pessoa = new Pessoa(json);

  pessoa.save(function(err){
    if(err)
      res.sendStatus(500);
    else {
      res.sendStatus(200);
    }
  });
});

router.put('/', function(req, res) {
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

router.delete('/', function(req, res) {
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

router.post("/add-transacao", function(req, res){
  var idPessoa = req.body.Pessoa;
  var dados = req.body.transacao;
  console.log(idPessoa);
  console.log(dados);
  if(!idPessoa || !dados)
    return res.sendStatus(400);

  var jsonPessoa = JSON.parse(dados);
  var pessoa = new Pessoa(jsonPessoa);

  var jsonTransacao = JSON.parse(dados);
  transacao = new Transacao(jsonTransacao);

  pessoa.buscarPorId(pessoa._id, function(err, pessoa){
     if(err)
        return res.sendStatus(500);

    Transacao.buscarPorId(transacao._id, function(err, transacaoServer){
      if(err)
         return res.sendStatus(500);
      if(transacaoServer == null){
        transacao.save(function(err){
          if(err)
            res.sendStatus(500);

            pessoa.update({_id:pessoa._id}, {$push : {transacoes: transacao }}, function(err){
              if(err)
                return res.sendStatus(500);
              res.json({ok:"ok"});
            });
        });
      }else{
        pessoa.update({_id:pessoa._id}, {$push : {transacoes: transacao }}, function(err){
          if(err)
            return res.sendStatus(500);
          res.json({ok:"ok"});
        });
      }
    });
  });
});

router.post("/add-categoria", function(req, res){
  var idPessoa = req.body.Pessoa;
  var dados = req.body.categoria;
  console.log(idPessoa);
  console.log(dados);
  if(!idPessoa || !dados)
    return res.sendStatus(400);

  var jsonPessoa = JSON.parse(dados);
  var pessoa = new Pessoa(jsonPessoa);

  var jsonCategoria = JSON.parse(dados);
  var categoria = new Categoria(jsonCategoria);

  pessoa.buscarPorId(pessoa._id, function(err, pessoa){
     if(err)
        return res.sendStatus(500);

    Categoria.buscarPorId(categoria._id, function(err, categoriaServer){
      if(err)
         return res.sendStatus(500);
      if(categoriaServer == null){
        categoria.save(function(err){
          if(err)
            res.sendStatus(500);

            pessoa.update({_id:pessoa._id}, {$push : {categorias: categoria }}, function(err){
              if(err)
                return res.sendStatus(500);
              res.json({ok:"ok"});
            });
        });
      }else{
        pessoa.update({_id:pessoa._id}, {$push : {categorias: categoria }}, function(err){
          if(err)
            return res.sendStatus(500);
          res.json({ok:"ok"});
        });
      }
    });
  });
});

router.post("/add-conta", function(req, res){
  var idPessoa = req.body.Pessoa;
  var dados = req.body.conta;
  console.log(idPessoa);
  console.log(dados);
  if(!idPessoa || !dados)
    return res.sendStatus(400);

  var jsonPessoa = JSON.parse(dados);
  var pessoa = new Pessoa(jsonPessoa);

  var jsonConta = JSON.parse(dados);
  var conta = new Conta(jsonConta);

  pessoa.buscarPorId(pessoa._id, function(err, pessoa){
     if(err)
        return res.sendStatus(500);

    Conta.buscarPorId(conta._id, function(err, contaServer){
      if(err)
         return res.sendStatus(500);
      if(contaServer == null){
        conta.save(function(err){
          if(err)
            res.sendStatus(500);

            pessoa.update({_id:pessoa._id}, {$push : {contas: conta }}, function(err){
              if(err)
                return res.sendStatus(500);
              res.json({ok:"ok"});
            });
        });
      }else{
        pessoa.update({_id:pessoa._id}, {$push : {contas: conta }}, function(err){
          if(err)
            return res.sendStatus(500);
          res.json({ok:"ok"});
        });
      }
    });
  });
});

module.exports = router;
