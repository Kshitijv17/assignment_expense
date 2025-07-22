import React, { useState, useEffect } from 'react';
import api from '../api/axios';

export default function EmployeeDashboard() {
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({ amount: '', category: '', date: '', notes: '' });

  useEffect(() => {
    api.get('/expenses').then(res => setExpenses(res.data));
  }, []);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await api.post('/expenses', form);
    const res = await api.get('/expenses');
    setExpenses(res.data);
    setForm({ amount: '', category: '', date: '', notes: '' });
  };

  return (
    <div>
      <h2>My Expenses</h2>
      <ul>
        {expenses.map(exp => (
          <li key={exp._id}>
            {exp.category} - ${exp.amount} - {new Date(exp.date).toLocaleDateString()} - Status: {exp.status}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input name="amount" type="number" placeholder="Amount" value={form.amount} onChange={handleInputChange} required />
        <input name="category" placeholder="Category" value={form.category} onChange={handleInputChange} required />
        <input name="date" type="date" value={form.date} onChange={handleInputChange} required />
        <input name="notes" placeholder="Notes" value={form.notes} onChange={handleInputChange} />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}
