var mongoose = require('../connection/db');

var schema = mongoose.Schema;

var CategoriaSchema = schema({
  titulo:{type:String, require:true},
  estimativaGastos:{type:Number, require:false},
  tipo:{type:String, require:true}
}, {versionKey: false});

CategoriaSchema.statics.buscarPorId = function(id, resposta){
  this.findOne({_id:id})
  .exec(resposta);
};

CategoriaSchema.statics.buscar = function(resposta){
  this.find()
  .exec(resposta);
};

module.exports = mongoose.model('Categoria', CategoriaSchema);