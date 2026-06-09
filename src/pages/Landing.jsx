import { useNavigate } from 'react-router-dom';
import {
  Crown, ClipboardList, Package, TrendingUp, IndianRupee, Warehouse,
  Headphones, Store, ShoppingCart, Cpu, Calendar, Users, Target,
} from 'lucide-react';
import { personas } from '../data/personas';
import { useAuth } from '../context/AuthContext';

const iconMap = {
  Crown, ClipboardList, Package, TrendingUp, IndianRupee, Warehouse,
  Headphones, Store, ShoppingCart,
};

export default function Landing() {
  const navigate = useNavigate();
  const { loginAs } = useAuth();

  const handleEnter = (persona) => {
    loginAs(persona);
    navigate('/app/dashboard');
  };

  return (
    <div className="landing">
      <section className="landing-hero">
        <div className="landing-badge">
          <Cpu size={14} />
          MVP Phase · FY 2026-2031 Roadmap
        </div>
        <h1>
          <span>Millennium Digital</span>
          <br />
          Semiconductor Import & Supply Platform
        </h1>
        <p>
          B2B commerce platform for Millennium Semiconductors — marketplace, aggregator,
          and services model with ERP sync, CRM integration, and operational intelligence.
        </p>
        <div className="landing-meta">
          <span><Target size={14} /> Year 1 Target: ₹150 Cr</span>
          <span><Users size={14} /> 3,000+ Customer Migration</span>
          <span><Calendar size={14} /> 180-Day Launch Roadmap</span>
        </div>
      </section>

      <section className="persona-section">
        <h2>Select Your User Persona</h2>
        <p>
          Choose a role to explore the platform with role-based navigation and module access.
          Each persona maps to BRD stakeholder groups with tailored dashboards and permissions.
        </p>

        <div className="persona-grid">
          {personas.map((persona) => {
            const Icon = iconMap[persona.icon];
            return (
              <div
                key={persona.id}
                className="persona-card"
                style={{ '--persona-color': persona.color }}
                onClick={() => handleEnter(persona)}
                onKeyDown={(e) => e.key === 'Enter' && handleEnter(persona)}
                role="button"
                tabIndex={0}
              >
                <div className="persona-card-header">
                  <div
                    className="persona-icon"
                    style={{ background: `${persona.color}22`, color: persona.color }}
                  >
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3>{persona.name}</h3>
                    <span className={`persona-role-badge ${persona.role}`}>
                      {persona.role === 'admin' ? 'Admin' : persona.role === 'dept_head' ? 'Dept Head' : 'User'}
                      {persona.dept ? ` · ${persona.dept}` : ''}
                    </span>
                  </div>
                </div>
                <p>{persona.description}</p>
                <div className="persona-modules">
                  {persona.modules.map((m) => (
                    <span key={m} className="persona-module-tag">{m}</span>
                  ))}
                </div>
                <button type="button" className="persona-enter-btn">
                  Enter as {persona.name.split('/')[0].trim()}
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
