import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import { navItems } from '../../data/navigation';

export default function AppLayout() {
  const location = useLocation();
  const currentNav = navItems.find((n) => n.path === location.pathname);
  const title = currentNav?.label || 'Millennium Digital';

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-area">
        <Header title={title} />
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
