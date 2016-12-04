var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pessoaSchema = new Schema({
	nome: String,
  email: String,
	senha: String,
	contas: [{ type: Schema.Types.ObjectId, ref: 'Conta' }],
	transacoes: [{ type: Schema.Types.ObjectId, ref: 'Transacao' }],
	categorias: [{ type: Schema.Types.ObjectId, ref: 'Categoria' }]
});

module.exports = mongoose.model('Pessoa', pessoaSchema);
