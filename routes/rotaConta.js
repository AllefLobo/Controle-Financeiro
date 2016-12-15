var express = require('express');
var router = express.Router();
var Conta = require('../model/conta');


/**
 * @api {get} /conta
 * @apiGroup Conta
 * @apiName Buscar Conta
 * @apiSuccess {Conta[]} dados Todas as contas cadastradas na aplicação.
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *    	success: true,
 *			contas: [{"_id": "",
 *            "titulo": "",
 *          "descricao": "",
 *            "valor": ,
 *            "status": ,
 *            "prazo": "",
 *            "__v": 0}]
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

router.get('/conta', function(req, res) {
	Conta.buscar(function(erro, dados){
    if(erro)
      res.sendStatus(500);
    else {
      res.json({
				"success": true,
				"contas": dados
			});
    }
  });
});

/**
 * @api {post} /conta
 * @apiGroup Conta
 *
 * @apiParam {String} titulo Obrigatório
 * @apiParam {String} descricao Opcional
 * @apiParam {Number} valor Obrigatorio
 * @apiParam {Boolean} status Obrigatorio
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *    	success: true,
 *     	conta: "__v": 0,
 *      "titulo": "",
 *      "descricao": "",
 *      "valor": ,
 *      "status": ,
 *      "prazo": "",
 *      "_id": ""
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
router.post('/conta', function(req, res) {
	var dados = req.body;

  if(!dados)
    return res.sendStatus(400);

	dados.prazo = new Date();

  var conta = new Conta(dados);

  conta.save(function(err){
    if(err)
      res.sendStatus(500);
    else {
      res.json({
				"success": true,
				"conta": conta
			});
    }
  });
});

/**
   * @api {put} /conta
   * @apiGroup Conta

   * @apiParam {String} id   Obrigatório
	 * @apiParam {String} titulo Obrigatório
	 * @apiParam {String} descricao Opcional
	 * @apiParam {Number} valor Obrigatorio
	 * @apiParam {Boolean} status Obrigatorio
   *
   * @apiSuccess {Conta} conta Retorna os dados atualizados de uma conta.
   *
   * @apiSuccessExample {json} Sucesso
   *    HTTP/1.1 200 OK
   *     "success": true,
    "conta": {
        "_id": "",
        "titulo": "",
        "descricao": "",
        "valor": ,
        "status": ,
        "prazo": "",
        "__v":
    }
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
router.put('/conta', function(req, res) {

	Conta.findById(req.body.id, function(err, conta) {
    if (err){
      res.send(err);
		}

		conta.titulo = req.body.titulo;
		conta.prazo = new Date();
		conta.valor = req.body.valor;
		conta.status = req.body.status;
		conta.descricao = req.body.descricao;

    conta.save(function(err) {
      if (err){
        res.sendStatus(err);
			}

      res.json({
				"success": true,
				"conta":	conta
			});
    });
  });
});

/**
 * @api {delete} /conta
 * @apiGroup Conta

 * @apiParam {String} id   Obrigatório
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
router.delete('/conta', function(req, res) {
	var dados = req.body;

  if(!dados)
    return response.sendStatus(400);

  var ContaExcluir = new Conta(dados);

  Conta.remove({_id:ContaExcluir.id}, function(err){
    if(err)
      return response.sendStatus(500);

    response.sendStatus(200);
  });
});

module.exports = router;
