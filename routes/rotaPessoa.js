var Categoria= require('../model/categoria');
var Transacao= require('../model/transacao');
var Conta= require('../model/conta');

var express = require('express');
var router = express.Router();
var Pessoa = require('../model/pessoa');

/**
 * @api {get} /
 * @apiGroup Pessoa
 *
 * @apiSuccess {Pessoa[]} dados Todas as pessoas cadastradas na aplicação.
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *     	[{"_id":"5843667379fa085cc7808525","nome":"allef","email":"allef@lobo","senha":"123","__v":0,"categorias":[],"transacoes":[],"contas":[]}]
 *    }
 *
 * @apiError Erro Erro interno do servidor.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       status:500
 *     }
 */
router.get('/', function(req, res) {
	Pessoa.buscar(function(erro, dados){
    if(erro)
      res.sendStatus(500);
    else {
      res.json(dados);
    }
  });
});

/**
 * @api {post} /
 * @apiGroup Pessoa
 *
 * @apiParam {String} nome Obrigatório
 * @apiParam {String} email Obrigatório
 * @apiParam {String} senha Obrigatório
 * @apiParam {[conta]} contas Opcional
 * @apiParam {[transacao]} transacoes Opcional
 * @apiParam {[categoria]} categorias Opcional
 *
 * @apiSuccess {String} ok Cadastro ocorreu com sucesso.
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      status:200
 *    }
 *
 *
 * @apiError Erro Erros.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       status:500
 *     }

 * @apiError Erro Bad Request.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       status: 400
 *     }
 */
router.post('/', function(req, res) {
	var dados = req.body.pessoa;

  if(!dados)
    return res.sendStatus(400);

  var json = dados;
  var pessoa = new Pessoa(json);

  pessoa.save(function(err){
    if(err)
      res.sendStatus(500);
    else {
      res.sendStatus(200);
    }
  });
});

/**
   * @api {put} /editar
   * @apiGroup Categoria

   * @apiParam {String} _id   Obrigatório
	 * @apiParam {String} nome Obrigatório
	 * @apiParam {String} email Obrigatório
	 * @apiParam {String} senha Obrigatório
	 * @apiParam {[conta]} contas Opcional
	 * @apiParam {[transacao]} transacoes Opcional
	 * @apiParam {[categoria]} categorias Opcional
   *
   * @apiSuccess {Pessoa} pessoa Retorna os dados atualizados de uma pessoa.
   *
   * @apiSuccessExample {json} Sucesso
   *    HTTP/1.1 200 OK
   *    {
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
router.put('/', function(req, res) {
	Pessoa.findById(req.body.pessoa.id, function(err, pessoa) {
    if (err)
      res.send(err);

    pessoa.nome = req.body.pessoa.nome;
		pessoa.email = req.body.pessoa.email;
		pessoa.senha = req.body.pessoa.senha;
    pessoa.save(function(err) {
      if (err)
        res.send(err);

      res.json(pessoa);
    });
  });
});

/**
 * @api {delete} /
 * @apiGroup Pessoa

 * @apiParam {String} _id   Obrigatório
 *
 * @apiSuccess {String} ok Sucesso em deletar uma pessoa.
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      "status: 200
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
router.delete('/', function(req, res) {
	Pessoa.remove({
      _id: req.body.pessoa.id
  }, function(err, pessoa) {
      if (err)
          res.send(err);

      res.json({ message: 'Successfully deleted' });
  });
});

/**
 * @api {post} /add-trasacao
 * @apiGroup Pessoa
 *
 *@apiParam {String} _idPessoa Obrigatório

 * @apiParam {String} tituloTransacao Obrigatório
 * @apiParam {String} tipoTransacao Obrigatório
 * @apiParam {Number} valorTransacao Obrigatório
 *
 * @apiSuccess {String} ok Cadastro ocorreu com sucesso.
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      status:200
 *    }
 *
 *
 * @apiError Erro Erros.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       status:500
 *     }
 */
router.post("/add-transacao", function(req, res){
	Pessoa.findById(req.body.pessoa.id, function(err, pessoa) {
    if (err){
      res.send(err);
		} else{
			pessoa.transacoes.push(new Transacao(req.body.transacao));
	    pessoa.save(function(err) {
	      if (err)
	        res.send(err);

	    res.json(pessoa);
	    });
		}
  });
});

/**
 * @api {post} /add-categoria
 * @apiGroup Pessoa
 *
 *@apiParam {String} _idPessoa Obrigatório

 * @apiParam {String} tituloCategoria Obrigatório
 * @apiParam {Number} estimativaGastos Obrigatório
 * @apiParam {String} tipoCategoria Obrigatório
 * @apiParam {[Transacao]} transacoes Obrigatório
 *
 * @apiSuccess {String} ok Cadastro ocorreu com sucesso.
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      status:200
 *    }
 *
 *
 * @apiError Erro Erros.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       status:500
 *     }
 */
router.post("/add-categoria", function(req, res){
	Pessoa.findById(req.body.pessoa.id, function(err, pessoa) {
		if (err){
			res.send(err);
		} else{
			pessoa.categorias.push(new Categoria(req.body.categoria));
			pessoa.save(function(err) {
				if (err)
					res.send(err);

			res.json(pessoa);
			});
		}
	});
});

/**
 * @api {post} /add-conta
 * @apiGroup Pessoa
 *
 *@apiParam {String} _idPessoa Obrigatório

 * @apiParam {String} tituloConta Obrigatório
 * @apiParam {String} descricao Opcional
 * @apiParam {Date} prazo Obrigatório
 * @apiParam {Number} valor Obrigatório
 * @apiParam {Boolean} status Obrigatório
 *
 * @apiSuccess {String} ok Cadastro ocorreu com sucesso.
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      status:200
 *    }
 *
 *
 * @apiError Erro Erros.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       status:500
 *     }
 */
router.post("/add-conta", function(req, res){
	Pessoa.findById(req.body.pessoa.id, function(err, pessoa) {
		if (err){
			res.send(err);
		} else{
			pessoa.conta.push(new Conta(req.body.Conta));
			pessoa.save(function(err) {
				if (err)
					res.send(err);

			res.json(pessoa);
			});
		}
	});
});

module.exports = router;
