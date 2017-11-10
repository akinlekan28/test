var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  matricno: Number,
  department: String,
  level: String,
  tel: Number,
  email: String,
  address: String,
  dob: { type: Date },
  added_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Student', StudentSchema);