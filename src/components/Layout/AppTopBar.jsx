import { Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { canAccessNav } from '../../data/navigation';
import DevonLogo from '../DevonLogo';

export default function AppTopBar() {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const showNotifications = canAccessNav(
    'notifications',
    currentUser?.modules,
    currentUser?.excludedNavIds
  );

  const goToLanding = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="app-topbar">
      <button
        type="button"
        className="app-topbar-logo"
        onClick={goToLanding}
        aria-label="Go to landing page"
      >
        <DevonLogo variant="corner" />
      </button>

      <div className="app-topbar-spacer" />

      {showNotifications && (
        <button
          type="button"
          className="header-notif-btn"
          onClick={() => navigate('/app/notifications')}
          aria-label="Notifications"
        >
          <Bell size={20} />
          <span className="notif-dot" />
        </button>
      )}
    </div>
  );
}
