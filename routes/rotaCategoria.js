var Categoria= require('../model/categoria');
var Transacao= require('../model/transacao');

var express = require('express');
var router = express.Router();

/**
 * @api {get} /categoria
 * @apiGroup Categoria
 *
 * @apiSuccess {Categoria[]} dados Todas as categorias cadastradas na aplicação.
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *     [{"_id": "58437c328b204c2fb08cad1d", "titulo": "Comida", "estimativaGastos": 3000, "tipo": "Despesa",
 *              "transacoes": ["58437c328b204c2fb08cad1d"]]}
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
router.get("/categoria", function(req, res){
  Categoria.buscar(function(erro, dados){
    if(erro)
      res.sendStatus(500);
    else {
      res.json(dados);
    }
  });
});


/**
 * @api {post} /categoria
 * @apiGroup Categoria
 *
 * @apiParam {String} titulo Obrigatório
 * @apiParam {String} tipo Obrigatório
 * @apiParam {Number} estimativaGastos Opcional
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
router.post("/categoria", function(req, res){
  var dados = req.body;

  if(!dados)
    return res.sendStatus(400);


  categoria = new Categoria(dados);

  categoria.save(function(err){
    if(err)
      res.sendStatus(500);
    else {
      res.sendStatus(200);
    }
  });
});

/**
   * @api {put} /categoria
   * @apiGroup Categoria

   * @apiParam {String} _id   Obrigatório
   * @apiParam {String} [titulo] Opcional
   * @apiParam {String} [tipo] Opcional
   * @apiParam {Number} [estimativaGastos] Opcional
   *
   * @apiSuccess {Categoria} categoria Retorna os dados atualizados de uma categoria.
   *
   * @apiSuccessExample {json} Sucesso
   *    HTTP/1.1 200 OK
   *    {
   *      "categoria": {_id:"as334fdd5G23", "titulo": "Aluguel", "estimativaGastos": 2333, "tipo":"Despesa"}
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
router.put("/categoria", function(req, res){
  var dados = req.body;

  if(!dados)
    return res.sendStatus(400);


  categoriaEditar = new Categoria(dados);

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

/**
 * @api {delete} /categoria
 * @apiGroup Categoria

 * @apiParam {String} _id   Obrigatório
 *
 * @apiSuccess {String} ok Sucesso em deletar uma categoria.
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
router.delete("/categoria", function(req, res){
  var dados = req.body;

  if(!dados)
    return response.sendStatus(400);

  categoriaExcluir = new Categoria(dados);

  Categoria.remove({_id:categoriaExcluir._id}, function(err){
    if(err)
      return res.sendStatus(500);

    res.sendStatus(200);
  });
});

/**
 * @api {post} /categoria/add/transacao
 * @apiGroup Categoria
 *
 *@apiParam {String} categoriaId Obrigatório

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
router.post("/categoria/add/transacao", function(req, res){

	Categoria.findById(req.body.categoriaId, function(err, categoria) {
		if (err){
			res.send(err);
		} else{
			var transacao = new Transacao({titulo: req.body.titulo,
				tipo: req.body.tipo,
				valor: req.body.valor});
			transacao.save();
			categoria.transacoes.push(transacao);
			categoria.save(function(err) {
				if (err)
					res.sendStatus(500);

			res.sendStatus(200);
			});
		}
	});
});

module.exports = router;
