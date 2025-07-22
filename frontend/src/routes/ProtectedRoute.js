import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export default function ProtectedRoute({ children, role }) {
  const { auth } = useContext(AuthContext);

  if (!auth.token) return <Navigate to="/login" />;

  if (role && auth.user.role !== role) return <Navigate to="/login" />;

  return children;
}
