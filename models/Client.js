
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ClientSchema = new Schema({
  name: {
    type: String
  },
  companyName: {
    type: String
  },
  email: {
    type: String
  },
  description: {
    type: String
  },
  newsletter: {
    type: Boolean
  },

});

var Client = mongoose.model("Client", ClientSchema);
module.exports = Client;
