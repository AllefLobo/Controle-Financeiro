var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pessoaSchema = new Schema({
	nome: {type:String, require:true},
  email: {type:String, require:true},
	senha: {type:String, require:true},
	contas: [{ type: Schema.Types.ObjectId, ref: 'Conta' }],
	transacoes: [{ type: Schema.Types.ObjectId, ref: 'Transacao' }],
	categorias: [{ type: Schema.Types.ObjectId, ref: 'Categoria' }]
});

module.exports = mongoose.model('Pessoa', pessoaSchema);
