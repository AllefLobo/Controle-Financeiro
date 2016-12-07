var Transacao = require('../model/transacao');

var express = require('express');
var router = express.Router();

/**
 * @api {get} /
 * @apiGroup Transacao
 *
 * @apiSuccess {Transacao[]} dados Todas as transações cadastradas na aplicação.
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *     [{"_id": "58437c328b204c2fb08cad1d", "titulo": "Internet", "valor": 300, "tipo": "Despesa"},
        {"_id": "58437c328b204c2fb08cad2e", "titulo": "Salario", "valor": 3000, "tipo": "Receita"}]
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
router.get("/", function(req, res){
  Transacao.buscar(function(erro, dados){
    if(erro)
      res.sendStatus(500);
    else {
      res.json(dados);
    }
  });
});

/**
 * @api {post} /cadastrar
 * @apiGroup Transacao
 *
 * @apiParam {String} titulo Obrigatório
 * @apiParam {String} tipo Obrigatório
 * @apiParam {Number} valor Obrigarório
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
router.post("/cadastrar", function(req, res){
  var dados = req.body.transacao;
  console.log(dados);
  if(!dados)
    return res.sendStatus(400);

  var json = JSON.parse(dados);

	console.log(json);

  transacao = new Transacao(json);

  transacao.save(function(err){
    if(err)
      res.sendStatus(500);
    else {
      res.sendStatus(200);
    }
  });
});

/**
   * @api {put} /editar
   * @apiGroup Transacao

   * @apiParam {String} _id   Obrigatório
   * @apiParam {String} titulo Opcional
   * @apiParam {String} tipo Opcional
   * @apiParam {String} valor Opcional
   *
   * @apiSuccess {Transacao} transacao Retorna os dados atualizados de uma transação.
   *
   * @apiSuccessExample {json} Sucesso
   *    HTTP/1.1 200 OK
   *    {
   *      "categoria": {_id:"as334fdd5G23", "Mercantil": "Aluguel", "valor": "300", "tipo":"Despesa"}
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
router.put("/editar", function(req, res){
  var dados = req.body.transacao;

  if(!dados)
    return res.sendStatus(400);

  var json = JSON.parse(dados);

  transacaoEditar = new Transacao(json);
  console.log(transacaoEditar);
  Transacao.buscarPorId(transacaoEditar._id, function(err, transacao){
     if(err)
        return response.sendStatus(500);

        console.log(transacao);
        transacao.titulo = transacaoEditar.titulo;
        transacao.tipo = transacaoEditar.tipo;
        transacao.valor = transacaoEditar.valor;

        transacao.save(function(err){
          if(err)
            res.sendStatus(500);
          else{
            res.json(transacao);
          }
     });
   });
});

/**
 * @api {delete} /excluir
 * @apiGroup Transacao

 * @apiParam {String} _id   Obrigatório
 *
 * @apiSuccess {String} ok Sucesso em deletar uma transação.
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
router.delete("/excluir", function(req, res){
  var dados = req.body.transacao;

  if(!dados)
    return response.sendStatus(400);

  var json = JSON.parse(dados);

  transacaoExcluir = new Transacao(json);

  Transacao.remove({_id:transacaoExcluir._id}, function(err){
    if(err)
      return res.sendStatus(500);

    res.sendStatus(200);
  });
});

module.exports = router;
