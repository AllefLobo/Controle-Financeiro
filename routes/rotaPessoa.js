var Categoria= require('../model/categoria');
var Transacao= require('../model/transacao');
var Conta= require('../model/conta');

var express = require('express');
var router = express.Router();
var Pessoa = require('../model/pessoa');

/**
 * @api {get} /pessoa
 * @apiName asdasdasdasdasdasd
 * @apiGroup Pessoa
 *
 *
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *    	success: true,
 *		  pessoas: ["_id": "",
            "nome": "",
            "__v": 0,
            "email": "",
            "senha": "",
            "categorias": [],
            "transacoes": [],
            "contas": []]
 *    }
 *
 * @apiError Erro Erros.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       status: 500
 *     }

 * @apiError Erro Bad Request.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       status: 400
 *     }
 */
router.get('/pessoa', function(req, res) {
	Pessoa.buscar(function(erro, dados){
    if(erro)
      res.sendStatus(500);
    else {
      res.json({
		  	"success": true,
		  	"pessoas": dados
		  });
    }
  });
});

/**
 * @api {post} /pessoa
 * @apiName post
 * @apiGroup Pessoa
 *
 * @apiParam {String} nome Obrigatório
 * @apiParam {String} email Obrigatório
 * @apiParam {String} senha Obrigatório
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *    	success: true,
 *			pessoa: {"__v": 0,
        "nome": "",
        "email": "",
        "senha": "",
        "_id": "",
        "categorias": [],
        "transacoes": [],
        "contas": []}
 *
 * @apiError Erro Erros.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       status: 500
 *     }

 * @apiError Erro Bad Request.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       status: 400
 *     }
 */
router.post('/pessoa', function(req, res) {
	var dados = req.body;
	console.log(dados);

  if(!dados){
    return res.sendStatus(400);
	}

	var pessoa = new Pessoa(dados);

  pessoa.save(function(err){
    if(err)
      res.json({
				"success": false
			});
    else {
			res.json({
		  	"success": true,
				"pessoa": pessoa
		  });
    }
  });
});

/**
   * @api {put} /pessoa
   * @apiName put
   * @apiGroup Pessoa
   *
   *
   * @apiParam {String} id   Obrigatório
	 * @apiParam {String} nome Obrigatório
	 * @apiParam {String} email Obrigatório
	 * @apiParam {String} senha Obrigatório
   *
   *
	 * @apiSuccessExample {json} Sucesso
	 *    HTTP/1.1 200 OK
	 *    {
	 *    	success: true,
	 				pessoa: {"_id": "",
        "nome": "",
        "email": "",
        "senha": "",
        "__v": 0,
        "categorias": [],
        "transacoes": [],
        "contas": []}
	 *    }
	 *
	 * @apiError Erro Erros.
	 *
	 * @apiErrorExample Error-Response:
	 *     HTTP/1.1 500 Internal Server Error
	 *     {
	 *       status: 500
	 *     }

	 * @apiError Erro Bad Request.
	 *
	 * @apiErrorExample Error-Response:
	 *     HTTP/1.1 400 Bad Request
	 *     {
	 *       status: 400
	 *     }
	 */
router.put('/pessoa', function(req, res) {
	Pessoa.findById(req.body.id, function(err, pessoa) {
    if (err)
      res.send(err);

    pessoa.nome = req.body.nome;
		pessoa.email = req.body.email;
		pessoa.senha = req.body.senha;
    pessoa.save(function(err) {
      if (err){
        res.sendStatus(500);
			}

      res.json({
				"success": true,
				"pessoa":	pessoa
			});
    });
  });
});

/**
 * @api {delete} /pessoa
 * @apiName asdasd
 * @apiGroup Pessoa
 *
 * @apiParam {String} id   Obrigatório
 *
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *    	success: true
 *    }
 *
 * @apiError Erro Erros.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       status: 500
 *     }

 * @apiError Erro Bad Request.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       status: 400
 *     }
 */
router.delete('/pessoa', function(req, res) {
	Pessoa.remove({
      _id: req.Params
  }, function(err, pessoa) {
      if (err)
          res.sendStatus(500);

      res.json({ success: true });
  });
});

/**
 * @api {post} /pessoa/add/transacao
 * @apiGroup Pessoa
 *
 * @apiParam {String} pessoaId Obrigatório
 *
 * @apiParam {String} titulo Obrigatório
 * @apiParam {String} tipo Obrigatório
 * @apiParam {Number} valor Obrigatório
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *    	success: true
 *
 *    }
 *
 * @apiError Erro Erros.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       status: 500
 *     }

 * @apiError Erro Bad Request.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       status: 400
 *     }
 */
router.post("/pessoa/add/transacao", function(req, res){
	Pessoa.findById(req.body.pessoaId, function(err, pessoa) {
    if (err){
      res.send(err);
		} else{
			var transacao = new Transacao({titulo: req.body.titulo,
				tipo: req.body.tipo,
				valor: req.body.valor});
			transacao.save();
			pessoa.transacoes.push(transacao);
	    pessoa.save(function(err) {
	      if (err)
	        res.sendStatus(500);

	    res.json({
				"success": true,
				"pessoa": pessoa
				});
	    });
		}
  });
});

/**
 * @api {post} /pessoa/add/categoria
 * @apiGroup Pessoa
 *
 *@apiParam  {String} pessoaId Obrigatório

 * @apiParam {String} titulo Obrigatório
 * @apiParam {Number} estimativa Obrigatório
 * @apiParam {String} tipo Obrigatório
 *
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *    	success: true
 *
 *    }
 *
 * @apiError Erro Erros.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       status: 500
 *     }

 * @apiError Erro Bad Request.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       status: 400
 *     }
 */
router.post("/pessoa/add/categoria", function(req, res){
	Pessoa.findById(req.body.pessoaId, function(err, pessoa) {
		if (err){
			res.send(err);
		} else{
			var categoria = new Categoria({titulo: req.body.titulo,
				estimativa: req.body.estimativa,
				tipo: req.body.tipo});
			categoria.save();
			pessoa.categorias.push(categoria);
			pessoa.save(function(err) {
				if (err)
					res.sendStatus(500);

			res.json({
				"success": true
				});
			});
		}
	});
});

/**
 * @api {post} /pessoa/add/conta
 * @apiGroup Pessoa
 *
 *@apiParam {String} pessoaId Obrigatório

 * @apiParam  {String} titulo Obrigatório
 * @apiParam  {String} [descricao] Opcional
 * @apiParam  {Date} prazo Obrigatório
 * @apiParam  {Number} valor Obrigatório
 * @apiParam  {Boolean} status Obrigatório
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *    	success: true
 *    }
 *
 * @apiError Erro Erros.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       status: 500
 *     }

 * @apiError Erro Bad Request.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       status: 400
 *     }
 */
router.post("/pessoa/add/conta", function(req, res){
	Pessoa.findById(req.body.pessoaId, function(err, pessoa) {
		if (err){
			res.send(err);
		} else{
			var conta = new Conta({titulo:req.body.Conta,
				descricao: req.body.descricao,
				prazo: new Date(),
				valor: req.body.valor,
				status: req.body.status
			});
			conta.save();
			pessoa.contas.push(conta);
			pessoa.save(function(err) {
				if (err)
					res.sendStatus(500);

				res.json({
					"success": true
					});
			});
		}
	});
});

module.exports = router;
