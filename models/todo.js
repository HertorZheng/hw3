const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
  due_date: { type: Date },
  completed_at: { type: Date }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
