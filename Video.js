const mongoose = require('mongoose');

module.exports = mongoose.model('Video', new mongoose.Schema({
  filename: String,
  status: { type:String, default:'processing' },
  safe: Boolean,
  owner: { type:mongoose.Schema.Types.ObjectId, ref:'User' }
},{timestamps:true}));