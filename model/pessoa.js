var mongoose = require('../connection/db');

var Schema = mongoose.Schema;

<<<<<<< HEAD
var pessoaSchema = new Schema({
	nome: {type:String, require:true},
  email: {type:String, require:true},
	senha: {type:String, require:true},
=======
var PessoaSchema = new Schema({
	nome: String,
  email: String,
	senha: String,
>>>>>>> master
	contas: [{ type: Schema.Types.ObjectId, ref: 'Conta' }],
	transacoes: [{ type: Schema.Types.ObjectId, ref: 'Transacao' }],
	categorias: [{ type: Schema.Types.ObjectId, ref: 'Categoria' }]
});

module.exports = mongoose.model('Pessoa', PessoaSchema);
