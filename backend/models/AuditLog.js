const mongoose = require('mongoose');
const auditLogSchema = new mongoose.Schema({
  action: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  expense: { type: mongoose.Schema.Types.ObjectId, ref: 'Expense', default: null },
  timestamp: { type: Date, default: Date.now }
});
module.exports = mongoose.model('AuditLog', auditLogSchema);
