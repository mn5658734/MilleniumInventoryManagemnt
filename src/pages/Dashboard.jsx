import { kpiMetrics } from '../data/mockData';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { currentUser } = useAuth();

  return (
    <>
      <div className="mvp-banner">
        <strong>MVP Dashboard</strong>
        — Operational KPIs aligned to BRD TP-18: revenue, orders, inventory turnover,
        customer activation, and surplus monetisation for {currentUser?.name}.
      </div>

      <div className="page-header">
        <h2>Executive & Operational Dashboard</h2>
        <p>Real-time view of Millennium Digital commerce performance and supply chain health.</p>
      </div>

      <div className="kpi-grid">
        {kpiMetrics.map((kpi) => (
          <div key={kpi.label} className="kpi-card">
            <div className="label">{kpi.label}</div>
            <div className="value">{kpi.value}</div>
            <div className="meta">
              <span className={`change ${kpi.trend}`}>{kpi.change}</span>
              <span className="target">Target: {kpi.target}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card-header">
            <h3>Revenue Mix (70/20/10 Model)</h3>
          </div>
          <div className="card-body" style={{ padding: '1.25rem' }}>
            <div className="revenue-mix">
              <div className="mix-bar">
                <div className="mix-bar-fill" style={{ background: '#06b6d4', width: '100%' }} />
                <span>Marketplace 70%</span>
              </div>
              <div className="mix-bar">
                <div className="mix-bar-fill" style={{ background: '#6366f1', width: '100%' }} />
                <span>Aggregator 20%</span>
              </div>
              <div className="mix-bar">
                <div className="mix-bar-fill" style={{ background: '#10b981', width: '100%' }} />
                <span>Services 10%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>Launch Categories</h3>
          </div>
          <div className="card-body" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['Evaluation Boards', 'Passive Components', 'Sample/Starter Kits', 'Commodity Components'].map((cat) => (
                <span key={cat} style={{
                  padding: '0.4rem 0.75rem',
                  background: 'var(--bg-hover)',
                  borderRadius: '6px',
                  fontSize: '0.8rem',
                }}>
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
