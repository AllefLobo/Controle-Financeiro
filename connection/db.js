var mongoose = require('mongoose');

mongoose.connect('mongodb://alleflobo:PmmXa2oNBqrXrGkHaAFvy_qKHCrrjWt7@ds023425.mlab.com:23425/financeiro', function(error){
  if (error) {
    console.log("Error! Connection not found!");
  }
  else {
    console.log("Connected.");
  }
});

mongoose.set('debug', true);
module.exports = mongoose;
