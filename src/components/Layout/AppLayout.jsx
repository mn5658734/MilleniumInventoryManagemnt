import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import AppTopBar from './AppTopBar';
import { getHeaderTitle } from '../../data/navigation';
import { useAuth } from '../../context/AuthContext';

export default function AppLayout() {
  const location = useLocation();
  const { currentUser } = useAuth();
  const title = getHeaderTitle(location.pathname, currentUser?.id);

  return (
    <div className="app-layout">
      <AppTopBar />
      <div className="app-body">
        <Sidebar />
        <div className="main-area">
          <Header title={title} />
          <main className="content">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
