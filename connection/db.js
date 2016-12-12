var mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin@ds023425.mlab.com:23425/financeiro', function(error){
  if (error) {
    console.log("Error! Connection not found!");
  }
  else {
    console.log("Connected.");
  }
});

mongoose.set('debug', true);
module.exports = mongoose;
