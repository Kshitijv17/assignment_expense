const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const expCtrl = require('../controllers/expenses');
const auditCtrl = require('../controllers/auditLogs');
const auth = require('../middleware/auth');
const adminOnly = require('../middleware/adminOnly');
const auditLogger = require('../middleware/auditLogger');

// Auth
router.post('/auth/login', authController.login);

// Expenses
router.get('/expenses', auth, expCtrl.list);
router.post('/expenses', auth, auditLogger('create_expense'), expCtrl.create);
router.patch('/expenses/:id/status', auth, adminOnly, auditLogger('change_status'), expCtrl.updateStatus);

// Audit Logs
router.get('/audit-logs', auth, adminOnly, auditCtrl.list);


module.exports = router;
