const mongoose = require('mongoose');
const expenseSchema = new mongoose.Schema({
  amount: Number,
  category: String,
  date: { type: Date },
  notes: String,
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});
module.exports = mongoose.model('Expense', expenseSchema);
