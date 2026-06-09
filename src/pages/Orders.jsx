import { orders } from '../data/mockData';

function statusClass(status) {
  const map = {
    Processing: 'processing',
    Shipped: 'shipped',
    'Quote Approved': 'quote',
    'Awaiting Payment': 'payment',
    Delivered: 'delivered',
  };
  return map[status] || 'processing';
}

export default function Orders() {
  return (
    <>
      <div className="mvp-banner">
        <strong>Order Management</strong>
        — Full order lifecycle (TP-13): RFQ, quotes, production/sample orders, cancellations, returns, and split shipments.
      </div>

      <div className="page-header">
        <h2>Order Management</h2>
        <p>B2B order pipeline from RFQ through fulfilment and repeat purchase tracking.</p>
      </div>

      <div className="kpi-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <div className="kpi-card">
          <div className="label">Open Orders</div>
          <div className="value">312</div>
        </div>
        <div className="kpi-card">
          <div className="label">RFQs Pending</div>
          <div className="value">28</div>
        </div>
        <div className="kpi-card">
          <div className="label">Sample Orders</div>
          <div className="value">142</div>
        </div>
        <div className="kpi-card">
          <div className="label">Repeat Order Rate</div>
          <div className="value">34%</div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3>Order Pipeline</h3>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button type="button" className="btn btn-outline">New RFQ</button>
            <button type="button" className="btn btn-primary">Create Order</button>
          </div>
        </div>
        <div className="card-body">
          <table className="data-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Items</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id}>
                  <td className="mono">{o.id}</td>
                  <td>{o.customer}</td>
                  <td>{o.type}</td>
                  <td>{o.amount}</td>
                  <td>{o.items}</td>
                  <td>{o.date}</td>
                  <td>
                    <span className={`status-badge ${statusClass(o.status)}`}>{o.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
