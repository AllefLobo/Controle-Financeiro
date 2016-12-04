define({ "api": [
  {
    "type": "delete",
    "url": "/excluir",
    "title": "",
    "group": "Categoria",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Obrigatório</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ok",
            "description": "<p>Sucesso em deletar uma categoria.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n  \"status: 200\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Erro",
            "description": "<p>Erros.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  status: 500\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  status: 400\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/rotaCategoria.js",
    "groupTitle": "Categoria",
    "name": "DeleteExcluir"
  },
  {
    "type": "get",
    "url": "/",
    "title": "",
    "group": "Categoria",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Categoria[]",
            "optional": false,
            "field": "dados",
            "description": "<p>Todas as categorias cadastradas na aplicação.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n [{\"_id\": \"58437c328b204c2fb08cad1d\", \"titulo\": \"Comida\", \"estimativaGastos\": 3000, \"tipo\": \"Despesa\",\n          \"transacoes\": [\"58437c328b204c2fb08cad1d\"]]}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Erro",
            "description": "<p>Erro interno do servidor.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  status:500\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/rotaCategoria.js",
    "groupTitle": "Categoria",
    "name": "Get"
  },
  {
    "type": "post",
    "url": "/add-trasacao",
    "title": "",
    "group": "Categoria",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_idCategoria",
            "description": "<p>Obrigatório</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tituloTransacao",
            "description": "<p>Obrigatório</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tipoTransacao",
            "description": "<p>Obrigatório</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "valorTransacao",
            "description": "<p>Obrigatório</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ok",
            "description": "<p>Cadastro ocorreu com sucesso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n  status:200\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Erro",
            "description": "<p>Erros.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  status:500\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/rotaCategoria.js",
    "groupTitle": "Categoria",
    "name": "PostAddTrasacao"
  },
  {
    "type": "post",
    "url": "/cadastrar",
    "title": "",
    "group": "Categoria",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "titulo",
            "description": "<p>Obrigatório</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tipo",
            "description": "<p>Obrigatório</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "estimativaGastos",
            "description": "<p>Opcional</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ok",
            "description": "<p>Cadastro ocorreu com sucesso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n  status:200\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Erro",
            "description": "<p>Erros.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  status:500\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  status: 400\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/rotaCategoria.js",
    "groupTitle": "Categoria",
    "name": "PostCadastrar"
  },
  {
    "type": "put",
    "url": "/editar",
    "title": "",
    "group": "Categoria",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Obrigatório</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "titulo",
            "description": "<p>Opcional</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tipo",
            "description": "<p>Opcional</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "estimativaGastos",
            "description": "<p>Opcional</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Categoria",
            "optional": false,
            "field": "categoria",
            "description": "<p>Retorna os dados atualizados de uma categoria.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n  \"categoria\": {_id:\"as334fdd5G23\", \"titulo\": \"Aluguel\", \"estimativaGastos\": \"2333\", \"tipo\":\"Despesa\"}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Erro",
            "description": "<p>Erros.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  status: 500\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  status: 400\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/rotaCategoria.js",
    "groupTitle": "Categoria",
    "name": "PutEditar"
  },
  {
    "type": "delete",
    "url": "/excluir",
    "title": "",
    "group": "Transacao",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Obrigatório</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ok",
            "description": "<p>Sucesso em deletar uma transação.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n  \"status: 200\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Erro",
            "description": "<p>Erros.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  status: 500\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  status: 400\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/rotaTransacao.js",
    "groupTitle": "Transacao",
    "name": "DeleteExcluir"
  },
  {
    "type": "get",
    "url": "/",
    "title": "",
    "group": "Transacao",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Transacao[]",
            "optional": false,
            "field": "dados",
            "description": "<p>Todas as transações cadastradas na aplicação.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n [{\"_id\": \"58437c328b204c2fb08cad1d\", \"titulo\": \"Internet\", \"valor\": 300, \"tipo\": \"Despesa\"},\n     {\"_id\": \"58437c328b204c2fb08cad2e\", \"titulo\": \"Salario\", \"valor\": 3000, \"tipo\": \"Receita\"}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Erro",
            "description": "<p>Erro interno do servidor.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  status:500\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/rotaTransacao.js",
    "groupTitle": "Transacao",
    "name": "Get"
  },
  {
    "type": "post",
    "url": "/cadastrar",
    "title": "",
    "group": "Transacao",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "titulo",
            "description": "<p>Obrigatório</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tipo",
            "description": "<p>Obrigatório</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "valor",
            "description": "<p>Obrigarório</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ok",
            "description": "<p>Cadastro ocorreu com sucesso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n  status:200\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Erro",
            "description": "<p>Erros.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  status:500\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  status: 400\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/rotaTransacao.js",
    "groupTitle": "Transacao",
    "name": "PostCadastrar"
  },
  {
    "type": "put",
    "url": "/editar",
    "title": "",
    "group": "Transacao",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Obrigatório</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "titulo",
            "description": "<p>Opcional</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tipo",
            "description": "<p>Opcional</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "valor",
            "description": "<p>Opcional</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Transacao",
            "optional": false,
            "field": "transacao",
            "description": "<p>Retorna os dados atualizados de uma transação.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n  \"categoria\": {_id:\"as334fdd5G23\", \"Mercantil\": \"Aluguel\", \"valor\": \"300\", \"tipo\":\"Despesa\"}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Erro",
            "description": "<p>Erros.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  status: 500\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  status: 400\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/rotaTransacao.js",
    "groupTitle": "Transacao",
    "name": "PutEditar"
  }
] });
