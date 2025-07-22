import React, { useEffect, useState } from 'react';
import api from '../api/axios';
import { Bar, Line } from 'react-chartjs-2';

export default function ChartsPage() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    api.get('/expenses').then(res => setExpenses(res.data));
  }, []);

  // Expenses per category
  const categories = [...new Set(expenses.map(e => e.category))];
  const totalsByCategory = categories.map(cat =>
    expenses.filter(e => e.category === cat).reduce((sum, e) => sum + parseFloat(e.amount), 0)
  );

  // Expenses monthly
  const monthlyTotals = {};
  expenses.forEach(exp => {
    const month = exp.date.slice(0, 7); // 'YYYY-MM'
    monthlyTotals[month] = (monthlyTotals[month] || 0) + parseFloat(exp.amount);
  });

  return (
    <div>
      <h2>Expenses Per Category</h2>
      <Bar data={{
        labels: categories,
        datasets: [{ label: 'Total Expense', data: totalsByCategory, backgroundColor: 'rgba(75,192,192,0.6)' }]
      }} />

      <h2>Monthly Expense Breakdown</h2>
      <Line data={{
        labels: Object.keys(monthlyTotals),
        datasets: [{ label: 'Expense', data: Object.values(monthlyTotals), fill: false, borderColor: 'blue' }]
      }} />
    </div>
  );
}
