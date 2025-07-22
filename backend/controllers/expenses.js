const Expense = require('../models/Expense');

exports.list = async (req, res) => {
  const filter = req.user.role === 'admin' ? {} : { user: req.user._id };
  const expenses = await Expense.find(filter);
  res.json(expenses);
};

exports.create = async (req, res) => {
  const data = { ...req.body, user: req.user._id };
  const expense = await Expense.create(data);
  req.expenseId = expense._id;
  res.status(201).json(expense);
};

exports.updateStatus = async (req, res) => {
  const expense = await Expense.findById(req.params.id);
  if (!expense) return res.sendStatus(404);
  expense.status = req.body.status;
  await expense.save();
  req.expenseId = expense._id;
  res.json(expense);
};
