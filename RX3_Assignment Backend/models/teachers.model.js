const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  subjects: [String],
});

const Teacher = mongoose.model("Teacher", teacherSchema);


module.exports = { Teacher };