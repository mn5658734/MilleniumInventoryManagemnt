import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard, Boxes, Truck, FileText, Shield, Network, Plug, Bell,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { navItems, roleLabels } from '../../data/navigation';

const iconMap = {
  LayoutDashboard, Boxes, Truck, FileText, Shield, Network, Plug, Bell,
};

export default function Sidebar() {
  const { currentUser, logout } = useAuth();

  const visibleNav = navItems.filter((item) =>
    item.roles.includes(currentUser?.role)
  );

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
                <span className="nav-item-label">{item.label}</span>
                <span className="nav-item-desc">{item.description}</span>
              </span>
            </NavLink>
          );
        })}
      </>
    );
  };

  const getNavSections = () => {
    if (currentUser?.role === 'admin') {
      return (
        <>
          {renderNavSection('Administrator', visibleNav.filter((i) =>
            ['dashboard', 'iam', 'architecture', 'integrations'].includes(i.id)
          ))}
          {renderNavSection('Operations & Commerce', visibleNav.filter((i) =>
            ['inventory', 'logistics', 'orders', 'notifications'].includes(i.id)
          ))}
        </>
      );
    }
    if (currentUser?.role === 'dept_head') {
      return (
        <>
          {renderNavSection(`${currentUser.dept || 'Department'} Head`, visibleNav.filter((i) =>
            ['dashboard', 'inventory', 'logistics', 'orders'].includes(i.id)
          ))}
          {renderNavSection('Platform & Intelligence', visibleNav.filter((i) =>
            ['architecture', 'integrations', 'notifications'].includes(i.id)
          ))}
        </>
      );
    }
    return renderNavSection('My Workspace', visibleNav);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <h1>Millennium Digital</h1>
        <p>Semiconductor Supply Platform</p>
      </div>

      <div className="sidebar-user">
        <div className="sidebar-user-name">{currentUser?.name}</div>
        <div className="sidebar-user-role">
          {roleLabels[currentUser?.role]}
          {currentUser?.dept ? ` · ${currentUser.dept}` : ''}
        </div>
      </div>

      <nav className="sidebar-nav">{getNavSections()}</nav>

      <div className="sidebar-footer">
        <button type="button" onClick={logout}>Switch Persona</button>
      </div>
    </aside>
  );
}
