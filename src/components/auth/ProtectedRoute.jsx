import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-ocean-blue-500"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate 
      to="/login" 
      state={{ 
        from: location.pathname,
        message: "Please log in to access Ocean Hub" 
      }} 
      replace 
    />;
  }

  return children;
} 