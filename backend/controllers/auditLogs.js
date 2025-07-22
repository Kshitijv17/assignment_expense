const AuditLog = require('../models/AuditLog');
exports.list = async (req, res) => {
  const logs = await AuditLog.find().populate('user', 'email').populate('expense').sort('-timestamp').limit(50);
  res.json(logs);
};
