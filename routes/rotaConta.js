var express = require('express');
var router = express.Router();
var Conta = require('../model/conta');


/**
 * @api {get} /
 * @apiGroup Conta
 *
 * @apiSuccess {Conta[]} dados Todas as contas cadastradas na aplicação.
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *
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
	Conta.buscar(function(erro, dados){
    if(erro)
      res.sendStatus(500);
    else {
      res.json(dados);
    }
  });
});

/**
 * @api {post} /
 * @apiGroup Conta
 *
 * @apiParam {String} titulo Obrigatório
 * @apiParam {String} descricao Opcional
 * @apiParam {Date} prazo Obrigatorio
 * @apiParam {Number} valor Obrigatorio
 * @apiParam {Boolean} status Obrigatorio
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
	var dados = req.body.conta;

  if(!dados)
    return res.sendStatus(400);

  var conta = new Conta(dados);

  conta.save(function(err){
    if(err)
      res.sendStatus(500);
    else {
      res.sendStatus(200);
    }
  });
});

/**
   * @api {put} /
   * @apiGroup Conta

   * @apiParam {String} _id   Obrigatório
	 * @apiParam {String} titulo Obrigatório
	 * @apiParam {String} descricao Opcional
	 * @apiParam {Date} prazo Obrigatorio
	 * @apiParam {Number} valor Obrigatorio
	 * @apiParam {Boolean} status Obrigatorio
   *
   * @apiSuccess {Conta} conta Retorna os dados atualizados de uma conta.
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

/**
 * @api {delete} /
 * @apiGroup Conta

 * @apiParam {String} _id   Obrigatório
 *
 * @apiSuccess {String} ok Sucesso em deletar uma conta.
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
