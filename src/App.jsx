import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Landing from './pages/Landing';
import AppLayout from './components/Layout/AppLayout';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import Logistics from './pages/Logistics';
import Orders from './pages/Orders';
import IAM from './pages/IAM';
import Architecture from './pages/Architecture';
import Integrations from './pages/Integrations';
import Notifications from './pages/Notifications';

function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();
  if (!currentUser) return <Navigate to="/" replace />;
  return children;
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
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="logistics" element={<Logistics />} />
        <Route path="orders" element={<Orders />} />
        <Route path="iam" element={<IAM />} />
        <Route path="architecture" element={<Architecture />} />
        <Route path="integrations" element={<Integrations />} />
        <Route path="notifications" element={<Notifications />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
