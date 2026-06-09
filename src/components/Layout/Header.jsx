import { Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { canAccessNav } from '../../data/navigation';

export default function Header({ title }) {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const showNotifications = canAccessNav(
    'notifications',
    currentUser?.modules,
    currentUser?.excludedNavIds
  );

  return (
    <header className="header">
      <h1 className="header-title">{title}</h1>
      <div className="header-actions">
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
    </header>
  );
}
