import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Landing from './pages/Landing';
import AppLayout from './components/Layout/AppLayout';
import PersonaRoute from './components/Layout/PersonaRoute';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import Logistics from './pages/Logistics';
import Orders from './pages/Orders';
import IAM from './pages/IAM';
import Architecture from './pages/Architecture';
import Integrations from './pages/Integrations';
import Notifications from './pages/Notifications';
import { getNavForPersona } from './data/navigation';

function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();
  if (!currentUser) return <Navigate to="/" replace />;
  return children;
}

function DefaultAppRedirect() {
  const { currentUser } = useAuth();
  const firstNav = getNavForPersona(currentUser?.modules, currentUser?.excludedNavIds)[0];
  return <Navigate to={firstNav?.path?.replace('/app/', '') || 'dashboard'} replace />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route
        path="/app"
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DefaultAppRedirect />} />
        <Route path="dashboard" element={<PersonaRoute navId="dashboard"><Dashboard /></PersonaRoute>} />
        <Route path="inventory" element={<PersonaRoute navId="inventory"><Inventory /></PersonaRoute>} />
        <Route path="logistics" element={<PersonaRoute navId="logistics"><Logistics /></PersonaRoute>} />
        <Route path="orders" element={<PersonaRoute navId="orders"><Orders /></PersonaRoute>} />
        <Route path="iam" element={<PersonaRoute navId="iam"><IAM /></PersonaRoute>} />
        <Route path="architecture" element={<PersonaRoute navId="architecture"><Architecture /></PersonaRoute>} />
        <Route path="integrations" element={<PersonaRoute navId="integrations"><Integrations /></PersonaRoute>} />
        <Route path="notifications" element={<PersonaRoute navId="notifications"><Notifications /></PersonaRoute>} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
