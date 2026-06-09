import { Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Header({ title }) {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1 className="header-title">{title}</h1>
      <div className="header-actions">
        <button
          type="button"
          className="header-notif-btn"
          onClick={() => navigate('/app/notifications')}
          aria-label="Notifications"
        >
          <Bell size={20} />
          <span className="notif-dot" />
        </button>
      </div>
    </header>
  );
}
