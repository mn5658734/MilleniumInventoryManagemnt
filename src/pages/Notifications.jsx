import { AlertTriangle, Brain, Link2 } from 'lucide-react';
import { notifications, predictions } from '../data/mockData';
import { useAuth } from '../context/AuthContext';

const notifIcons = {
  alert: AlertTriangle,
  prediction: Brain,
  integration: Link2,
};

const inventoryKeywords = ['stock', 'surplus', 'liquidation', 'sku', 'inventory'];

function isInventoryRelated(text) {
  const lower = text.toLowerCase();
  return inventoryKeywords.some((kw) => lower.includes(kw));
}

export default function Notifications() {
  const { currentUser } = useAuth();
  const isBuyer = currentUser?.id === 'b2b-buyer';

  const buyerNotifications = [
    { id: 101, type: 'alert', title: 'Order ORD-45821 shipped — tracking available', time: '2 min ago', priority: 'high' },
    { id: 102, type: 'alert', title: 'Quote approved for RFQ — ORD-45815 ready to order', time: '45 min ago', priority: 'medium' },
    { id: 103, type: 'alert', title: 'Payment reminder: ORD-45810 due in 2 days', time: '1 hr ago', priority: 'high' },
    { id: 104, type: 'prediction', title: 'Reorder suggestion: ESP32-WROOM-32 based on past purchases', time: '3 hrs ago', priority: 'low' },
  ];

  const buyerPredictions = [
    { metric: 'Reorder Recommendation', forecast: 'ESP32-WROOM-32', confidence: '89%', action: 'Reorder now — usual lead time 3 days' },
    { metric: 'Delivery ETA', forecast: 'Jun 11', confidence: '94%', action: 'Track shipment SHP-2026-0847' },
  ];

  const visibleNotifications = isBuyer
    ? buyerNotifications
    : notifications.filter((n) => !isBuyer || !isInventoryRelated(n.title));

  const visiblePredictions = isBuyer ? buyerPredictions : predictions.filter(
    (p) => !isInventoryRelated(p.metric) && !isInventoryRelated(p.action)
  );

  return (
    <>
      <div className="mvp-banner">
        <strong>{isBuyer ? 'My Notifications' : 'Notifications & Predictive Analysis'}</strong>
        {isBuyer
          ? ' — Order updates, shipment alerts, and quote notifications.'
          : ' — Transactional alerts, demand forecasting (TP-07), surplus liquidation intelligence, and integration health notifications.'}
      </div>

      <div className="page-header">
        <h2>{isBuyer ? 'My Notifications' : 'Notifications & Predictive Analysis'}</h2>
        <p>
          {isBuyer
            ? 'Stay updated on your orders, deliveries, and quote requests.'
            : 'Real-time alerts and AI-driven insights for inventory, demand, and commercial decisions.'}
        </p>
      </div>

      <h3 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
        {isBuyer ? 'Order Insights' : 'Predictive Analysis Panel'}
      </h3>
      <div className="prediction-grid" style={{ marginBottom: '2rem' }}>
        {visiblePredictions.map((p) => (
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
          {visibleNotifications.map((n) => {
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
