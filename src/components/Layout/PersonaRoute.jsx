import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { canAccessNav } from '../../data/navigation';

export default function PersonaRoute({ navId, children }) {
  const { currentUser } = useAuth();

  if (!canAccessNav(navId, currentUser?.modules, currentUser?.excludedNavIds)) {
    return <Navigate to="/app/dashboard" replace />;
  }

  return children;
}
