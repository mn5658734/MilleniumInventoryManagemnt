import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, Boxes, Truck, FileText, Shield, Network, Plug, Bell,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { getNavSections, getNavLabel, getNavDescription, roleLabels } from '../../data/navigation';

const iconMap = {
  LayoutDashboard, Boxes, Truck, FileText, Shield, Network, Plug, Bell,
};

export default function Sidebar() {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const sections = getNavSections(
    currentUser?.modules,
    currentUser?.id,
    currentUser?.excludedNavIds
  );

  const goToLanding = () => {
    logout();
    navigate('/');
  };

  const renderNavSection = (label, items) => {
    if (!items.length) return null;
    return (
      <>
        <div className="nav-section-label">{label}</div>
        {items.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
            >
              <span className="nav-item-icon"><Icon size={18} /></span>
              <span className="nav-item-text">
                <span className="nav-item-label">{getNavLabel(item, currentUser?.id)}</span>
                <span className="nav-item-desc">{getNavDescription(item, currentUser?.id)}</span>
              </span>
            </NavLink>
          );
        })}
      </>
    );
  };

  return (
    <aside className="sidebar">
      <button type="button" className="sidebar-brand" onClick={goToLanding} aria-label="Go to landing page">
        <h1>Millennium Digital</h1>
        <p>Semiconductor Supply Platform</p>
      </button>

      <div className="sidebar-user">
        <div className="sidebar-user-name">{currentUser?.name}</div>
        <div className="sidebar-user-role">
          {roleLabels[currentUser?.role]}
          {currentUser?.dept ? ` · ${currentUser.dept}` : ''}
        </div>
      </div>

      <nav className="sidebar-nav">
        {sections.map((section) => (
          <div key={section.label}>
            {renderNavSection(section.label, section.items)}
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button type="button" onClick={goToLanding}>Switch Persona</button>
      </div>
    </aside>
  );
}
