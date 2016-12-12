define({ "api": [
  {
    "type": "delete",
    "url": "/categoria",
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
    "name": "DeleteCategoria",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/categoria"
      }
    ]
  },
  {
    "type": "get",
    "url": "/categoria",
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
    "name": "GetCategoria",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/categoria"
      }
    ]
  },
  {
    "type": "post",
    "url": "/categoria",
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
    "name": "PostCategoria",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/categoria"
      }
    ]
  },
  {
    "type": "post",
    "url": "/categoria/add/transacao",
    "title": "",
    "group": "Categoria",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoriaId",
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
    "name": "PostCategoriaAddTransacao",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/categoria/add/transacao"
      }
    ]
  },
  {
    "type": "put",
    "url": "/categoria",
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
            "optional": true,
            "field": "titulo",
            "description": "<p>Opcional</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tipo",
            "description": "<p>Opcional</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
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
          "content": "HTTP/1.1 200 OK\n{\n  \"categoria\": {_id:\"as334fdd5G23\", \"titulo\": \"Aluguel\", \"estimativaGastos\": 2333, \"tipo\":\"Despesa\"}\n}",
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
    "name": "PutCategoria",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/categoria"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/conta",
    "title": "",
    "group": "Conta",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Obrigatório</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n\tsuccess: true\n}",
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
    "filename": "routes/rotaConta.js",
    "groupTitle": "Conta",
    "name": "DeleteConta",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/conta"
      }
    ]
  },
  {
    "type": "get",
    "url": "/conta",
    "title": "",
    "group": "Conta",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Conta[]",
            "optional": false,
            "field": "dados",
            "description": "<p>Todas as contas cadastradas na aplicação.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "   HTTP/1.1 200 OK\n   {\n   \tsuccess: true,\n\t\t\tcontas: [{\"_id\": \"\",\n           \"titulo\": \"\",\n         \"descricao\": \"\",\n           \"valor\": ,\n           \"status\": ,\n           \"prazo\": \"\",\n           \"__v\": 0}]\n   }",
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
    "filename": "routes/rotaConta.js",
    "groupTitle": "Conta",
    "name": "GetConta",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/conta"
      }
    ]
  },
  {
    "type": "post",
    "url": "/conta",
    "title": "",
    "group": "Conta",
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
            "field": "descricao",
            "description": "<p>Opcional</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "valor",
            "description": "<p>Obrigatorio</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Obrigatorio</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n\tsuccess: true,\n \tconta: \"__v\": 0,\n  \"titulo\": \"\",\n  \"descricao\": \"\",\n  \"valor\": ,\n  \"status\": ,\n  \"prazo\": \"\",\n  \"_id\": \"\"\n}",
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
    "filename": "routes/rotaConta.js",
    "groupTitle": "Conta",
    "name": "PostConta",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/conta"
      }
    ]
  },
  {
    "type": "put",
    "url": "/conta",
    "title": "",
    "group": "Conta",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Obrigatório</p>"
          },
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
            "field": "descricao",
            "description": "<p>Opcional</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "valor",
            "description": "<p>Obrigatorio</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Obrigatorio</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Conta",
            "optional": false,
            "field": "conta",
            "description": "<p>Retorna os dados atualizados de uma conta.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n \"success\": true,\n \"conta\": {\n     \"_id\": \"\",\n     \"titulo\": \"\",\n     \"descricao\": \"\",\n     \"valor\": ,\n     \"status\": ,\n     \"prazo\": \"\",\n     \"__v\":\n }",
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
    "filename": "routes/rotaConta.js",
    "groupTitle": "Conta",
    "name": "PutConta",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/conta"
      }
    ]
  },
  {
    "type": "post",
    "url": "/pessoa/add/categoria",
    "title": "",
    "group": "Pessoa",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pessoaId",
            "description": "<p>Obrigatório</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "titulo",
            "description": "<p>Obrigatório</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "estimativa",
            "description": "<p>Obrigatório</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tipo",
            "description": "<p>Obrigatório</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n\tsuccess: true\n\n}",
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
    "filename": "routes/rotaPessoa.js",
    "groupTitle": "Pessoa",
    "name": "PostPessoaAddCategoria",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/pessoa/add/categoria"
      }
    ]
  },
  {
    "type": "post",
    "url": "/pessoa/add/conta",
    "title": "",
    "group": "Pessoa",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pessoaId",
            "description": "<p>Obrigatório</p>"
          },
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
            "optional": true,
            "field": "descricao",
            "description": "<p>Opcional</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "prazo",
            "description": "<p>Obrigatório</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "valor",
            "description": "<p>Obrigatório</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Obrigatório</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n\tsuccess: true\n}",
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
    "filename": "routes/rotaPessoa.js",
    "groupTitle": "Pessoa",
    "name": "PostPessoaAddConta",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/pessoa/add/conta"
      }
    ]
  },
  {
    "type": "post",
    "url": "/pessoa/add/transacao",
    "title": "",
    "group": "Pessoa",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pessoaId",
            "description": "<p>Obrigatório</p>"
          },
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
            "description": "<p>Obrigatório</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n\tsuccess: true\n\n}",
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
    "filename": "routes/rotaPessoa.js",
    "groupTitle": "Pessoa",
    "name": "PostPessoaAddTransacao",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/pessoa/add/transacao"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/pessoa",
    "title": "",
    "name": "asdasd",
    "group": "Pessoa",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Obrigatório</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n\tsuccess: true\n}",
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
    "filename": "routes/rotaPessoa.js",
    "groupTitle": "Pessoa",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/pessoa"
      }
    ]
  },
  {
    "type": "get",
    "url": "/pessoa",
    "title": "",
    "name": "asdasdasdasdasdasd",
    "group": "Pessoa",
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "   HTTP/1.1 200 OK\n   {\n   \tsuccess: true,\n\t\t  pessoas: [\"_id\": \"\",\n            \"nome\": \"\",\n            \"__v\": 0,\n            \"email\": \"\",\n            \"senha\": \"\",\n            \"categorias\": [],\n            \"transacoes\": [],\n            \"contas\": []]\n   }",
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
    "filename": "routes/rotaPessoa.js",
    "groupTitle": "Pessoa",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/pessoa"
      }
    ]
  },
  {
    "type": "post",
    "url": "/pessoa",
    "title": "",
    "name": "post",
    "group": "Pessoa",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Obrigatório</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Obrigatório</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "senha",
            "description": "<p>Obrigatório</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "   HTTP/1.1 200 OK\n   {\n   \tsuccess: true,\n\t\t\tpessoa: {\"__v\": 0,\n        \"nome\": \"\",\n        \"email\": \"\",\n        \"senha\": \"\",\n        \"_id\": \"\",\n        \"categorias\": [],\n        \"transacoes\": [],\n        \"contas\": []}",
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
    "filename": "routes/rotaPessoa.js",
    "groupTitle": "Pessoa",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/pessoa"
      }
    ]
  },
  {
    "type": "put",
    "url": "/pessoa",
    "title": "",
    "name": "put",
    "group": "Pessoa",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Obrigatório</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Obrigatório</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Obrigatório</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "senha",
            "description": "<p>Obrigatório</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "   HTTP/1.1 200 OK\n   {\n   \tsuccess: true,\n\t \t\t\t\tpessoa: {\"_id\": \"\",\n        \"nome\": \"\",\n        \"email\": \"\",\n        \"senha\": \"\",\n        \"__v\": 0,\n        \"categorias\": [],\n        \"transacoes\": [],\n        \"contas\": []}\n   }",
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
    "filename": "routes/rotaPessoa.js",
    "groupTitle": "Pessoa",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/pessoa"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/transacao",
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
    "name": "DeleteTransacao",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/transacao"
      }
    ]
  },
  {
    "type": "get",
    "url": "/transacao",
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
    "name": "GetTransacao",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/transacao"
      }
    ]
  },
  {
    "type": "post",
    "url": "/transacao",
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
    "name": "PostTransacao",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/transacao"
      }
    ]
  },
  {
    "type": "put",
    "url": "/transacao",
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
    "name": "PutTransacao",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/transacao"
      }
    ]
  }
] });
