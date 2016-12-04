var mongoose = require('../connection/db');

var Schema = mongoose.Schema;


var ContaSchema = new Schema({
	titulo: {type:String, require:true},
  prazo: {type:Date, require:true},
	valor: {type:Number, require:true},
	status: {type:Boolean, require:true},
	descricao: {type:String, require:true}
});

ContaSchema.statics.buscarPorId = function(id, resposta){
  this.findOne({_id:id})
  .exec(resposta);
};

ContaSchema.statics.buscar = function(resposta){
  this.find()
  .exec(resposta);
};

module.exports = mongoose.model('Conta', ContaSchema);
