const AuditLog = require('../models/AuditLog');
module.exports = (action) => async (req, res, next) => {
  res.on('finish', () => {
    if ([200, 201].includes(res.statusCode)) {
      AuditLog.create({
        action,
        user: req.user._id,
        expense: req.expenseId || null,
      });
    }
  });
  next();
};
