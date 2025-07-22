// seed.js
require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

  const passwordAdmin = await bcrypt.hash('adminpass', 10);
  const passwordEmployee = await bcrypt.hash('employeepass', 10);

  await User.deleteMany({});
  await User.create([
    { email: 'admin@acme.com', password: passwordAdmin, role: 'admin' },
    { email: 'user@acme.com', password: passwordEmployee, role: 'employee' },
  ]);
  
  console.log('Seeded users.');
  process.exit();
}

seed();
