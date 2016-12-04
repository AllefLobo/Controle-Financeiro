var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/financeiro', function(error){
  if (error) {
    console.log("Error! Connection not found!");
  }
  else {
    console.log("Connected.");
  }
});

mongoose.set('debug', true);
module.exports = mongoose;
