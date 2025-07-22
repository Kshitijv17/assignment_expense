// seedExpenses.js
require('dotenv').config();
const mongoose = require('mongoose');
const Expense = require('./models/Expense');
const User = require('./models/User');

async function seedExpenses() {
  await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  const user = await User.findOne({ role: 'employee' });

  await Expense.deleteMany({});
  await Expense.create([
    {
      amount: 250,
      category: 'Travel',
      date: '2025-07-01',
      notes: 'Business trip',
      status: 'pending',
      user: user._id,
    },
    {
      amount: 120,
      category: 'Food',
      date: '2025-07-05',
      notes: 'Team lunch',
      status: 'approved',
      user: user._id,
    },
  ]);
  console.log('Seeded expenses.');
  process.exit();
}

seedExpenses();
