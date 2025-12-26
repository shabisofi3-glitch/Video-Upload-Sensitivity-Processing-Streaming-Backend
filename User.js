const mongoose = require('mongoose');

module.exports = mongoose.model('User', new mongoose.Schema({
  email: String,
  password: String,
  role: { type:String, enum:['viewer','editor','admin'], default:'viewer' }
}));