import React, { useState, useEffect } from 'react';
import api from '../api/axios';

export default function AdminDashboard() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    api.get('/expenses').then(res => setExpenses(res.data));
  }, []);

  const changeStatus = async (id, status) => {
    await api.patch(`/expenses/${id}/status`, { status });
    const res = await api.get('/expenses');
    setExpenses(res.data);
  };

  return (
    <div>
      <h2>All Expenses</h2>
      <table>
        <thead>
          <tr>
            <th>User</th><th>Category</th><th>Amount</th><th>Date</th><th>Status</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(exp => (
            <tr key={exp._id}>
              <td>{exp.user?.email || exp.user}</td>
              <td>{exp.category}</td>
              <td>${exp.amount}</td>
              <td>{new Date(exp.date).toLocaleDateString()}</td>
              <td>{exp.status}</td>
              <td>
                {exp.status !== 'approved' && <button onClick={() => changeStatus(exp._id, 'approved')}>Approve</button>}
                {exp.status !== 'rejected' && <button onClick={() => changeStatus(exp._id, 'rejected')}>Reject</button>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
