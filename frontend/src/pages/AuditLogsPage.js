import React, { useEffect, useState } from 'react';
import api from '../api/axios';

export default function AuditLogsPage() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    api.get('/audit-logs').then(res => setLogs(res.data));
  }, []);

  return (
    <div>
      <h2>Audit Logs</h2>
      <table>
        <thead>
          <tr>
            <th>Action</th><th>User Email</th><th>Expense ID</th><th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {logs.map(log => (
            <tr key={log._id}>
              <td>{log.action}</td>
              <td>{log.user?.email || 'Unknown'}</td>
              <td>{log.expense?._id || '-'}</td>
              <td>{new Date(log.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
