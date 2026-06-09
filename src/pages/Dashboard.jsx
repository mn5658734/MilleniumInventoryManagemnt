import {
  kpiMetrics,
  revenueTrend,
  orderVolume,
  revenueMix,
  categoryPerformance,
  inventoryStatus,
  customerActivation,
} from '../data/mockData';
import { useAuth } from '../context/AuthContext';
import {
  LineChart,
  BarChart,
  DonutChart,
  HorizontalBarChart,
  ActivationGauge,
  InventoryPieLegend,
} from '../components/Dashboard/Charts';

const buyerKpiLabels = ['Active Orders', 'Repeat Order Rate'];

export default function Dashboard() {
  const { currentUser } = useAuth();
  const isBuyer = currentUser?.id === 'b2b-buyer';
  const showInventoryCharts = !isBuyer && currentUser?.modules?.includes('Inventory');

  const visibleKpis = isBuyer
    ? kpiMetrics.filter((k) => buyerKpiLabels.includes(k.label))
    : kpiMetrics;

  if (isBuyer) {
    return (
      <>
        <div className="mvp-banner">
          <strong>My Dashboard</strong>
          — Track your orders, reorders, and account activity. Inventory management is not available for B2B buyers.
        </div>

        <div className="page-header">
          <h2>My Account Dashboard</h2>
          <p>Overview of your orders, shipments, and quote requests.</p>
        </div>

        <div className="kpi-grid">
          {visibleKpis.map((kpi) => (
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

        <div className="chart-grid">
          <div className="card chart-card">
            <div className="card-header">
              <h3>My Order Status</h3>
            </div>
            <div className="card-body chart-body buyer-order-summary">
              {[
                { label: 'Open Orders', value: 8, color: '#6366f1' },
                { label: 'In Transit', value: 3, color: '#06b6d4' },
                { label: 'Delivered (30d)', value: 12, color: '#10b981' },
                { label: 'RFQs Pending', value: 2, color: '#f59e0b' },
              ].map((item) => (
                <div key={item.label} className="buyer-stat">
                  <div className="buyer-stat-value" style={{ color: item.color }}>{item.value}</div>
                  <div className="buyer-stat-label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card chart-card">
            <div className="card-header">
              <h3>My Order History</h3>
              <span className="chart-badge up">+12% MoM</span>
            </div>
            <div className="card-body chart-body">
              <BarChart data={orderVolume} valueKey="orders" color="#3b82f6" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>Recent Orders</h3>
            <button type="button" className="btn btn-primary">Place New Order</button>
          </div>
          <div className="card-body" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'grid', gap: '0.75rem' }}>
              {[
                { id: 'ORD-45821', items: 12, status: 'Processing', amount: '₹2,45,000' },
                { id: 'ORD-45819', items: 3, status: 'Shipped', amount: '₹8,500' },
                { id: 'ORD-45805', items: 8, status: 'Delivered', amount: '₹1,15,000' },
              ].map((o) => (
                <div key={o.id} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.75rem 1rem',
                  background: 'var(--bg-hover)',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                }}>
                  <span className="mono" style={{ fontFamily: 'var(--font-mono)' }}>{o.id}</span>
                  <span style={{ color: 'var(--text-muted)' }}>{o.items} items</span>
                  <span className={`status-badge ${o.status === 'Delivered' ? 'delivered' : o.status === 'Shipped' ? 'shipped' : 'processing'}`}>
                    {o.status}
                  </span>
                  <strong>{o.amount}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="mvp-banner">
        <strong>MVP Dashboard</strong>
        — Operational KPIs aligned to BRD TP-18 for {currentUser?.name}.
      </div>

      <div className="page-header">
        <h2>Executive & Operational Dashboard</h2>
        <p>Real-time view of Millennium Digital commerce performance and supply chain health.</p>
      </div>

      <div className="kpi-grid">
        {visibleKpis.map((kpi) => (
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

      <div className="chart-grid">
        <div className="card chart-card">
          <div className="card-header">
            <h3>Revenue Trend (₹ Cr)</h3>
            <span className="chart-badge up">+18.4% YTD</span>
          </div>
          <div className="card-body chart-body">
            <LineChart data={revenueTrend} />
          </div>
        </div>

        <div className="card chart-card">
          <div className="card-header">
            <h3>Order Volume</h3>
            <span className="chart-badge up">+12% MoM</span>
          </div>
          <div className="card-body chart-body">
            <BarChart data={orderVolume} valueKey="orders" color="#6366f1" />
          </div>
        </div>
      </div>

      <div className="chart-grid">
        <div className="card chart-card">
          <div className="card-header">
            <h3>Revenue Mix (70/20/10 Model)</h3>
          </div>
          <div className="card-body chart-body">
            <DonutChart data={revenueMix} />
          </div>
        </div>

        <div className="card chart-card">
          <div className="card-header">
            <h3>Category Performance</h3>
          </div>
          <div className="card-body chart-body">
            <HorizontalBarChart data={categoryPerformance} />
          </div>
        </div>
      </div>

      <div className="chart-grid">
        <div className="card chart-card">
          <div className="card-header">
            <h3>Customer Activation Progress</h3>
            <span className="chart-badge">3,000+ migration target</span>
          </div>
          <div className="card-body chart-body">
            <ActivationGauge
              current={customerActivation.current}
              target={customerActivation.target}
              monthly={customerActivation.monthly}
            />
          </div>
        </div>

        {showInventoryCharts ? (
          <div className="card chart-card">
            <div className="card-header">
              <h3>Inventory Health Distribution</h3>
              <span className="chart-badge warn">₹50+ Cr surplus</span>
            </div>
            <div className="card-body chart-body">
              <InventoryPieLegend data={inventoryStatus} />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
