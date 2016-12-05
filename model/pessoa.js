var mongoose = require('../connection/db');

var Schema = mongoose.Schema;


var PessoaSchema = new Schema({
	nome: {type:String, require:true},
  email: {type:String, require:true},
	senha: {type:String, require:true},
	contas: [{ type: Schema.Types.ObjectId, require: false, ref: 'Conta' },{versionKey: false}],
	transacoes: [{ type: Schema.Types.ObjectId, require: false, ref: 'Transacao' }, {versionKey: false}],
	categorias: [{ type: Schema.Types.ObjectId, require: false, ref: 'Categoria' }, {versionKey: false}]
});

PessoaSchema.statics.buscarPorId = function(id, resposta){
  this.findOne({_id:id})
  .exec(resposta);
};

PessoaSchema.statics.buscar = function(resposta){
  this.find()
  .exec(resposta);
};

module.exports = mongoose.model('Pessoa', PessoaSchema);
