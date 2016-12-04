var schema = mongoose.Schema;

var TransacaoSchema = schema({
  titulo:{type:String, require:true},
  valor:{type:Number, require:true},
  tipo:{type:String, require:true}
}, {versionKey: false});

TransacaoSchema.statics.buscarPorId = function(id, resposta){
  this.findOne({_id:id})
  .exec(resposta);
};

BicicletaSchema.statics.buscar = function(resposta){
  this.find()
  .exec(resposta);
};

module.exports = mongoose.model('Transacao', TransacaoSchema);
