var Categoria= require('../model/categoria');
var Transacao= require('../model/transacao');

var express = require('express');
var router = express.Router();

/**
 * @api {get} /
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
router.get("/", function(req, res){
  Categoria.buscar(function(erro, dados){
    if(erro)
      res.sendStatus(500);
    else {
      res.json(dados);
    }
  });
});


/**
 * @api {post} /cadastrar
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

/**
   * @api {put} /editar
   * @apiGroup Categoria

   * @apiParam {String} _id   Obrigatório
   * @apiParam {String} titulo Opcional
   * @apiParam {String} tipo Opcional
   * @apiParam {String} estimativaGastos Opcional
   *
   * @apiSuccess {Categoria} categoria Retorna os dados atualizados de uma categoria.
   *
   * @apiSuccessExample {json} Sucesso
   *    HTTP/1.1 200 OK
   *    {
   *      "categoria": {_id:"as334fdd5G23", "titulo": "Aluguel", "estimativaGastos": "2333", "tipo":"Despesa"}
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

/**
 * @api {delete} /excluir
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

/**
 * @api {post} /add-trasacao
 * @apiGroup Categoria
 *
 *@apiParam {String} _idCategoria Obrigatório

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
router.post("/add-trasacao", function(req, res){
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
              res.sendStatus(200);
            });
        });
      }else{
        Categoria.update({_id:categoria._id}, {$push : {transacoes: transacao }}, function(err){
          if(err)
            return res.sendStatus(500);
          res.sendStatus(200);
        });
      }
    });
  });
});

module.exports = router;
