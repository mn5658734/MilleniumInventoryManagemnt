import { AlertTriangle, Brain, Link2 } from 'lucide-react';
import { notifications, predictions } from '../data/mockData';

const notifIcons = {
  alert: AlertTriangle,
  prediction: Brain,
  integration: Link2,
};

export default function Notifications() {
  return (
    <>
      <div className="mvp-banner">
        <strong>Notifications & Predictive Analysis</strong>
        — Transactional alerts, demand forecasting (TP-07), surplus liquidation intelligence, and integration health notifications.
      </div>

      <div className="page-header">
        <h2>Notifications & Predictive Analysis</h2>
        <p>Real-time alerts and AI-driven insights for inventory, demand, and commercial decisions.</p>
      </div>

      <h3 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
        Predictive Analysis Panel
      </h3>
      <div className="prediction-grid" style={{ marginBottom: '2rem' }}>
        {predictions.map((p) => (
          <div key={p.metric} className="prediction-card">
            <h4>{p.metric}</h4>
            <div className="prediction-value">{p.forecast}</div>
            <div className="prediction-confidence">Confidence: {p.confidence}</div>
            <div className="prediction-action">→ {p.action}</div>
          </div>
        ))}
      </div>

      <div className="card">
        <div className="card-header">
          <h3>Notification Center</h3>
          <button type="button" className="btn btn-outline">Mark All Read</button>
        </div>
        <ul className="notif-list">
          {notifications.map((n) => {
            const Icon = notifIcons[n.type];
            return (
              <li key={n.id} className={`notif-item priority-${n.priority}`}>
                <div className={`notif-icon ${n.type}`}>
                  <Icon size={18} />
                </div>
                <div className="notif-content">
                  <h4>{n.title}</h4>
                  <time>{n.time}</time>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
