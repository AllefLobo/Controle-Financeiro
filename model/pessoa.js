var mongoose = require('../connection/db');

var Schema = mongoose.Schema;

var PessoaSchema = new Schema({
	nome: String,
  email: String,
	senha: String,
	contas: [{ type: Schema.Types.ObjectId, ref: 'Conta' }],
	transacoes: [{ type: Schema.Types.ObjectId, ref: 'Transacao' }],
	categorias: [{ type: Schema.Types.ObjectId, ref: 'Categoria' }]
});

module.exports = mongoose.model('Pessoa', PessoaSchema);
